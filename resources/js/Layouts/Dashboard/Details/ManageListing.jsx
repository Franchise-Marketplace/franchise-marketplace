export default function ManageListing() {
    const listings = [
        {
            id: 1,
            title: 'Franchise A',
            location: 'New York',
            businessType: 'Restaurant',
            price: 100000,
            description: 'A prime location for a new restaurant.',
            contactName: 'John Doe',
            contactEmail: 'john@example.com',
            contactPhone: '123-456-7890',
        },
        {
            id: 2,
            title: 'Franchise B',
            location: 'Los Angeles',
            businessType: 'Retail',
            price: 150000,
            description: 'An established retail business in a busy area.',
            contactName: 'Jane Smith',
            contactEmail: 'jane@example.com',
            contactPhone: '987-654-3210',
        },
    ];

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
                        <h3 className="text-xl font-semibold">
                            {listing.title}
                        </h3>
                        <p>
                            <strong>Location:</strong> {listing.location}
                        </p>
                        <p>
                            <strong>Type:</strong> {listing.businessType}
                        </p>
                        <p>
                            <strong>Price:</strong> ${listing.price}
                        </p>
                        <p>
                            <strong>Description:</strong> {listing.description}
                        </p>
                        <p>
                            <strong>Contact Name:</strong> {listing.contactName}
                        </p>
                        <p>
                            <strong>Contact Email:</strong>{' '}
                            {listing.contactEmail}
                        </p>
                        <p>
                            <strong>Contact Phone:</strong>{' '}
                            {listing.contactPhone}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
