export default function ManageLeads({ listings }) {
    return (
        <div className="rounded-md bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-500">Manage Leads</h2>
            <ul className="mt-6 space-y-4">
                {listings.map((listing) =>
                    listing.transactions
                        .filter(
                            (transaction) => transaction.is_interested === 1,
                        )
                        .map((transaction) => (
                            <li
                                key={transaction.id}
                                className="rounded border border-gray-300 p-4"
                            >
                                <h3 className="text-xl font-semibold">
                                    {transaction.buyer.name}
                                </h3>
                                <p>
                                    <strong>Email:</strong>{' '}
                                    {transaction.buyer.email}
                                </p>
                                <p>
                                    <strong>Phone:</strong>{' '}
                                    {transaction.buyer.phone}
                                </p>
                                <p>
                                    <strong>Interested in:</strong>{' '}
                                    {listing.Franchise_name}
                                </p>
                            </li>
                        )),
                )}
            </ul>
        </div>
    );
}
