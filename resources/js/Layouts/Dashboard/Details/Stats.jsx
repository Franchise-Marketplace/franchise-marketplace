export default function Stats({ Stats = [] }) {
    // const stats = {
    //     totalListings: 20,
    //     totalLeads: 35,
    //     totalRevenue: 500000,
    //     listingsByType: {
    //         Restaurant: 5,
    //         Retail: 10,
    //         Service: 3,
    //         Franchise: 2,
    //         Fitness: 0,
    //     },
    //     leadsByLocation: {
    //         NewYork: 10,
    //         LosAngeles: 8,
    //         Chicago: 5,
    //         Miami: 7,
    //     },
    //     revenuePerListing: 25000,

    return (
        <div className="rounded-md bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-500">
                Dashboard Stats
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded border border-gray-300 p-4">
                    <h3 className="text-xl font-semibold text-blue-500">
                        Total Listings
                    </h3>
                    <p>{Stats.totalListings}</p>
                </div>
                <div className="rounded border border-gray-300 p-4">
                    <h3 className="text-xl font-semibold text-blue-500">
                        Total Leads
                    </h3>
                    <p>{Stats.totalLeads}</p>
                </div>
                <div className="rounded border border-gray-300 p-4">
                    <h3 className="text-xl font-semibold text-blue-500">
                        Total Revenue
                    </h3>
                    <p>${Stats.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="rounded border border-gray-300 p-4">
                    <h3 className="text-xl font-semibold text-blue-500">
                        Revenue per Listing
                    </h3>
                    <p>${Stats.revenuePerListing.toLocaleString()}</p>
                </div>
                <div className="rounded border border-gray-300 p-4">
                    <h3 className="text-xl font-semibold text-blue-500">
                        Listings by Type
                    </h3>
                    <ul>
                        {Object.entries(Stats.listingsByType).map(
                            ([type, count]) => (
                                <li key={type}>
                                    <strong>{type}:</strong> {count}
                                </li>
                            ),
                        )}
                    </ul>
                </div>
                <div className="rounded border border-gray-300 p-4">
                    <h3 className="text-xl font-semibold text-blue-500">
                        Leads by Location
                    </h3>
                    <ul>
                        {Object.entries(Stats.leadsByLocation).map(
                            ([location, count]) => (
                                <li key={location}>
                                    <strong>{location}:</strong> {count}
                                </li>
                            ),
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
