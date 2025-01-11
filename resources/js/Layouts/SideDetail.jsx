import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function SideDetail({ listings = [], userId }) {
    const [processingStates, setProcessingStates] = useState({});
    const [interestedListings, setInterestedListings] = useState({});
    const { post, setData, errors, data } = useForm({
        listing_id: null,
        buyer_id: userId,
        is_interested: false,
    });

    // Initialize interestedListings
    useEffect(() => {
        const initialState = listings.reduce((acc, listing) => {
            const userTransaction = listing.transactions?.find(
                (txn) => txn.buyer_id === userId,
            );
            acc[listing.id] = userTransaction?.is_interested || false;
            return acc;
        }, {});
        setInterestedListings(initialState);
    }, [listings, userId]);

    // Trigger `post` when `data` changes
    useEffect(() => {
        if (data.listing_id && data.buyer_id !== null) {
            const { listing_id: listingId, is_interested: newInterest } = data;

            post('/franchisee/create/', {
                onSuccess: () => {
                    setInterestedListings((prev) => ({
                        ...prev,
                        [listingId]: newInterest,
                    }));
                    setProcessingStates((prev) => ({
                        ...prev,
                        [listingId]: false,
                    }));
                },
                onError: () => {
                    setInterestedListings((prev) => ({
                        ...prev,
                        [listingId]: !newInterest, // Revert on error
                    }));
                    setProcessingStates((prev) => ({
                        ...prev,
                        [listingId]: false,
                    }));
                },
            });
        }
    }, [data]); // Run whenever `data` changes

    const handleInterestClick = (e, listing) => {
        e.preventDefault();
        const listingId = listing.id;
        const currentInterest = interestedListings[listingId];
        const newInterest = !currentInterest;

        // Optimistic update: show spinner and set new state
        setInterestedListings((prev) => ({
            ...prev,
            [listingId]: newInterest,
        }));
        setProcessingStates((prev) => ({ ...prev, [listingId]: true }));

        // Update form data (triggers `useEffect` above)
        setData({
            listing_id: listingId,
            buyer_id: userId,
            is_interested: newInterest,
        });
    };

    const handleViewListing = (listing) => {
        alert(`Viewing listing: ${listing.Franchise_name}`);
    };

    return (
        <div className="mb-24 mt-8 flex flex-col px-8">
            <div className="mt-2 flex justify-between">
                <p className="text-gray-700">
                    Showing {listings.length} Results
                </p>
                <select
                    name="sort"
                    id="sort"
                    className="mr-2 inline-block w-48 rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-blue-400"
                >
                    <option value="">Search by</option>
                    <option value="location">Location</option>
                    <option value="industry">Industry</option>
                    <option value="investment">Investment</option>
                </select>
            </div>
            <h2 className="text-6xl font-bold text-blue-500">All Franchises</h2>
            <hr className="mb-10" />

            {listings.map((listing) => {
                const isInterested = interestedListings[listing.id] || false;
                const isProcessing = processingStates[listing.id] || false;

                return (
                    <div key={listing.id} className="flex gap-4 p-4">
                        <img
                            src={`storage/${listing.Franchise_image}`}
                            alt="Franchise"
                            className="h-32 w-32 object-cover"
                        />
                        <div className="relative flex w-full flex-col justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-blue-500">
                                    {listing.Franchise_name}
                                </h1>
                                <p>{listing.Franchise_description}</p>
                                <p className="text-gray-500">
                                    Location: {listing.Franchise_location}
                                </p>
                                <p className="text-gray-500">
                                    Price: {listing.Franchise_price}
                                </p>
                                <p className="text-sm text-gray-400">
                                    Posted:{' '}
                                    {new Date(
                                        listing.created_at,
                                    ).toLocaleString()}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={(e) =>
                                        handleInterestClick(e, listing)
                                    }
                                    disabled={isProcessing}
                                    className={`mx-4 mb-4 rounded px-8 py-2 font-bold text-white ${
                                        isInterested
                                            ? 'bg-green-500 hover:bg-green-700'
                                            : 'bg-blue-500 hover:bg-blue-700'
                                    }`}
                                >
                                    {isProcessing
                                        ? 'Processing...'
                                        : isInterested
                                          ? 'Interested (Click to Undo)'
                                          : 'I am interested'}
                                </button>

                                <button
                                    onClick={() => handleViewListing(listing)}
                                    className="mx-4 mb-4 rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700"
                                >
                                    View Listing
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}

            {errors &&
                Object.keys(errors).map((field) => (
                    <p key={field} className="text-red-500">
                        {errors[field]}
                    </p>
                ))}
        </div>
    );
}
