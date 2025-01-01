export default function SideBar({ user, onSectionChange }) {
    return (
        <div className="m-0 w-full bg-gray-100 p-8 pr-5 lg:w-1/5">
            <div className="max-w-fit bg-white p-8 text-white">
                <h1 className="mb-6 bg-white text-2xl font-bold text-blue-500 backdrop-blur-lg backdrop-filter hover:text-gray-700">
                    {user.name} Dashboard
                </h1>
                <ul className="space-y-4">
                    <li
                        className="cursor-pointer font-bold text-blue-500 hover:text-gray-700"
                        onClick={() => onSectionChange('mydashboard')}
                    >
                        My Dashboard
                    </li>
                    <li
                        className="cursor-pointer font-bold text-blue-500 hover:text-gray-700"
                        onClick={() => onSectionChange('addListing')}
                    >
                        Add Listing
                    </li>
                    <li
                        className="cursor-pointer font-bold text-blue-500 hover:text-gray-700"
                        onClick={() => onSectionChange('manageListing')}
                    >
                        Manage Listing
                    </li>
                    <li
                        className="cursor-pointer font-bold text-blue-500 hover:text-gray-700"
                        onClick={() => onSectionChange('manageLeads')}
                    >
                        Manage Leads
                    </li>
                    <li
                        className="cursor-pointer font-bold text-blue-500 hover:text-gray-700"
                        onClick={() => onSectionChange('stats')}
                    >
                        Stats
                    </li>
                </ul>
            </div>
        </div>
    );
}
