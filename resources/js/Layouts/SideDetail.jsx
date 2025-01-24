import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function SideDetail({
    listings = [],
    userId,
    isSearch = false,
}) {
    const [processingStates, setProcessingStates] = useState({});
    const [interestedListings, setInterestedListings] = useState({});
    const [selectedListing, setSelectedListing] = useState(null);
    const [buyListings, setBuyListings] = useState({});
    const { post, setData, errors, data } = useForm({
        listing_id: null,
        buyer_id: userId,
        is_interested: false,
        is_bought: false,
    });

    useEffect(() => {
        const initialInterestedState = listings.reduce((acc, listing) => {
            const userTransaction = listing.transactions?.find(
                (txn) => txn.buyer_id === userId,
            );
            acc[listing.id] = userTransaction?.is_interested || false;
            return acc;
        }, {});
        setInterestedListings(initialInterestedState);

        const initialBoughtState = listings.reduce((acc, listing) => {
            const userTransaction = listing.transactions?.find(
                (txn) => txn.buyer_id === userId,
            );
            acc[listing.id] = userTransaction?.is_bought || false;
            return acc;
        }, {});
        setBuyListings(initialBoughtState);
    }, [listings, userId]);

    useEffect(() => {
        if (data.listing_id && data.buyer_id !== null) {
            const {
                listing_id: listingId,
                is_interested: newInterest,
                is_bought: newBuy,
            } = data;

            post('/franchisee/create/', {
                onSuccess: () => {
                    setInterestedListings((prev) => ({
                        ...prev,
                        [listingId]: newInterest,
                    }));
                    setBuyListings((prev) => ({
                        ...prev,
                        [listingId]: newBuy,
                    }));
                    setProcessingStates((prev) => ({
                        ...prev,
                        [listingId]: false,
                    }));
                },
                onError: () => {
                    setProcessingStates((prev) => ({
                        ...prev,
                        [listingId]: false,
                    }));
                },
            });
        }
    }, [data]);

    const handleInterestClick = (e, listing) => {
        e.preventDefault();
        const listingId = listing.id;
        const currentInterest = interestedListings[listingId];
        const newInterest = !currentInterest;

        setInterestedListings((prev) => ({
            ...prev,
            [listingId]: newInterest,
        }));
        setProcessingStates((prev) => ({ ...prev, [listingId]: true }));

        setData({
            listing_id: listingId,
            buyer_id: userId,
            is_interested: newInterest,
            is_bought: false,
        });
    };

    const handleBuyListing = (listing) => {
        const listingId = listing.id;
        const currentBuyStatus = buyListings[listingId];
        const newBuyStatus = !currentBuyStatus;

        setBuyListings((prev) => ({
            ...prev,
            [listingId]: newBuyStatus,
        }));
        setProcessingStates((prev) => ({ ...prev, [listingId]: true }));

        setData({
            listing_id: listingId,
            buyer_id: userId,
            is_interested: true,
            is_bought: newBuyStatus,
        });
    };

    const handleCloseModal = () => {
        setSelectedListing(null);
    };

    return (
        <div className="mb-24 mt-8 flex flex-col px-8">
            {isSearch ? (
                <h2 className="text-6xl font-bold text-blue-500">
                    Search Results
                </h2>
            ) : (
                <h2 className="text-6xl font-bold text-blue-500">
                    All Franchises
                </h2>
            )}

            <hr className="mb-10" />

            {listings.map((listing) => {
                const isInterested = interestedListings[listing.id] || false;
                const isBought = buyListings[listing.id] || false;
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
                                    disabled={isProcessing || isBought}
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

                                {isBought ? (
                                    <button
                                        disabled
                                        className="mx-4 mb-4 rounded bg-green-500 px-8 py-2 font-bold text-white"
                                    >
                                        Bought
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            handleBuyListing(listing)
                                        }
                                        disabled={isProcessing}
                                        className="mx-4 mb-4 rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700"
                                    >
                                        Buy Now
                                    </button>
                                )}
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

            {selectedListing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
                        <h1 className="mb-4 text-2xl font-bold text-blue-500">
                            {selectedListing.Franchise_name}
                        </h1>
                        <p>{selectedListing.Franchise_description}</p>
                        <p className="text-gray-500">
                            Location: {selectedListing.Franchise_location}
                        </p>
                        <p className="text-gray-500">
                            Price: {selectedListing.Franchise_price}
                        </p>
                        <div className="mt-4 flex justify-end gap-4">
                            <button
                                onClick={handleCloseModal}
                                className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
                            >
                                Close
                            </button>
                            {!buyListings[selectedListing.id] && (
                                <button
                                    onClick={() =>
                                        handleBuyListing(selectedListing)
                                    }
                                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                                >
                                    Buy Now
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
