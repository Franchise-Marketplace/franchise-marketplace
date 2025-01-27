import { useForm } from '@inertiajs/react';

export default function ManageListing({ listings, onEdit }) {
    const { delete: destroy } = useForm();

    const handleDelete = (listingId) => {
        if (confirm('Are you sure you want to delete this listing?')) {
            console.log('Deleting Listing ID:', listingId);
            destroy(`/listings/delete/${listingId}`, {
                onSuccess: () => {
                    console.log('Delete successful');
                },
                onError: (error) => {
                    console.error('Delete failed:', error);
                },
            });
        }
    };

    return (
        <div className="rounded-md bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-500">
                Manage Franchise Listings
            </h2>
            <ul className="mt-6 w-2/4 space-y-4">
                {listings.map((listing) => (
                    <li
                        key={listing.id}
                        className="rounded border border-gray-300 p-4"
                    >
                        <img
                            src={'storage/' + listing.Franchise_image}
                            alt="franchise logo"
                            className="mb-4 rounded"
                        />
                        <h3 className="text-xl font-semibold">
                            {listing.Franchise_name}
                        </h3>
                        <p>
                            <strong>Location:</strong>{' '}
                            {listing.Franchise_location}
                        </p>
                        <p>
                            <strong>Type:</strong> {listing.Franchise_type}
                        </p>
                        <p>
                            <strong>Price:</strong> ${listing.Franchise_price}
                        </p>
                        <p>
                            <strong>Description:</strong>{' '}
                            {listing.Franchise_description}
                        </p>
                        <p>
                            <strong>Contact Name:</strong>{' '}
                            {listing.Franchise_contact}
                        </p>
                        <p>
                            <strong>Contact Email:</strong>{' '}
                            {listing.Franchise_email}
                        </p>
                        <p>
                            <strong>Contact Phone:</strong>{' '}
                            {listing.Franchise_phone}
                        </p>

                        <div className="mt-4 flex gap-4">
                            <button
                                onClick={() =>
                                    onEdit(listing, 'addListing', true)
                                }
                                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleDelete(listing.id)}
                                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
