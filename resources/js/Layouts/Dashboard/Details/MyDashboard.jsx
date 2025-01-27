export default function MyDashboard({ onSectionChange }) {
    return (
        <>
            <div className="rounded-md bg-white p-6 shadow-md">
                <h2 className="mb-4 text-xl font-bold text-blue-500">
                    My Dashboard
                </h2>

                {/* Content Sections */}
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Manage Listing */}
                    <div className="rounded-md bg-gray-200 p-4">
                        <h3 className="mb-2 font-semibold">Manage Listing</h3>
                        <ul className="space-y-2">
                            <li
                                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white"
                                onClick={() => onSectionChange('mydashboard')}
                            >
                                My Dashboard
                            </li>
                            <li
                                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white"
                                onClick={() => onSectionChange('addListing')}
                            >
                                Add Listing
                            </li>
                            <li
                                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white"
                                onClick={() => onSectionChange('manageListing')}
                            >
                                Manage Listing
                            </li>
                            <li
                                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white"
                                onClick={() => onSectionChange('manageLeads')}
                            >
                                Manage Leads
                            </li>
                            <li
                                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white"
                                onClick={() => onSectionChange('stats')}
                            >
                                Stats
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
