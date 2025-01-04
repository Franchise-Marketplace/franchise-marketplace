export default function MyDashboard() {
    return (
        <>
            <div className="rounded-md bg-white p-6 shadow-md">
                <h2 className="mb-4 text-xl font-bold text-blue-500">
                    My Dashboard
                </h2>
                <p>
                    Your listing is 0% complete. Please update your profile to
                    make it live.
                </p>

                {/* Content Sections */}
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Manage Listing */}
                    <div className="rounded-md bg-gray-200 p-4">
                        <h3 className="mb-2 font-semibold">Manage Listing</h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white">
                                    Basic Information
                                </button>
                            </li>
                            <li>
                                <button className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white">
                                    Profile Photo
                                </button>
                            </li>
                            <li>
                                <button className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white">
                                    Additional Details
                                </button>
                            </li>
                            <li>
                                <button className="w-full rounded-md bg-yellow-500 px-4 py-2 text-left text-white">
                                    About Me
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
