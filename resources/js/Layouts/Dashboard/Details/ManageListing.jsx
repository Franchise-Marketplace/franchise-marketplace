export default function ManageListing({ listings }) {
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
                    </li>
                ))}
            </ul>
        </div>
    );
}
