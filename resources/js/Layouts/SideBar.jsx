export default function SideBar() {
    return (
        <>
            {/* <main className="flex">
            <sidebar />
        </main> */}
            <div className="item-center ml-4 flex flex-col justify-start">
                <section className="my-4 h-screen w-full bg-white p-4 md:max-w-[300px]">
                    <h2 className="mb-4 text-2xl font-bold text-gray-500">
                        Find Franchise Marketplaces
                    </h2>
                    <div className="space-y-4">
                        <div className="search_industry flex flex-col">
                            <label
                                htmlFor="investment"
                                className="text-xl font-semibold"
                            >
                                Search by Investment
                            </label>
                            <select
                                placeholder="Select investment"
                                name="investment"
                                id="investment"
                                className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                            >
                                <option value="">Select Investment</option>
                                <option value="10000">
                                    Franchise under 10,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 20,000 ETB
                                </option>
                                <option value="30000">
                                    Franchise under 30,000 ETB
                                </option>
                                <option value="40000">
                                    Franchise under 40,000 ETB
                                </option>
                                <option value="50000">
                                    Franchise under 50,000 ETB
                                </option>
                                <option value="60000">
                                    Franchise under 60,000 ETB
                                </option>
                                <option value="70000">
                                    Franchise under 70,000 ETB
                                </option>
                                <option value="80000">
                                    Franchise under 80,000 ETB
                                </option>
                                <option value="90000">
                                    Franchise under 90,000 ETB
                                </option>
                                <option value="100000">
                                    Franchise under 100,000 ETB
                                </option>
                            </select>
                        </div>

                        <div className="search_investment flex flex-col">
                            <label
                                htmlFor="investment"
                                className="text-xl font-semibold"
                            >
                                Search an investment
                            </label>
                            <select
                                placeholder="Select investment"
                                name="investment" // Updated to a proper name
                                id="investment" // Updated to match htmlFor
                                className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                            >
                                <option value="">Select an investment</option>
                                <option value="10000">
                                    Franchise under 10,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 20,000 ETB
                                </option>
                                <option value="30000">
                                    Franchise under 30,000 ETB
                                </option>
                                <option value="40000">
                                    Franchise under 40,000 ETB
                                </option>
                                <option value="50000">
                                    Franchise under 50,000 ETB
                                </option>
                                <option value="60000">
                                    Franchise under 60,000 ETB
                                </option>
                                <option value="70000">
                                    Franchise under 70,000 ETB
                                </option>
                                <option value="80000">
                                    Franchise under 80,000 ETB
                                </option>
                                <option value="90000">
                                    Franchise under 90,000 ETB
                                </option>
                                <option value="100000">
                                    Franchise under 100,000 ETB
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm text-gray-700">
                                Search By Location
                            </label>
                            <select className="focus:blue-500 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none">
                                <option value="">Select Location</option>
                                <option value="location1">Location 1</option>
                                <option value="location2">Location 2</option>
                                <option value="location3">Location 3</option>
                                <option value="location4">Location 4</option>
                                <option value="location5">Location 5</option>
                                <option value="location6">Location 6</option>
                                <option value="location7">Location 7</option>
                                <option value="location8">Location 8</option>
                                <option value="location9">Location 9</option>
                                <option value="location10">Location 10</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="mt-4 w-full rounded-md bg-blue-500 py-2 font-bold text-white hover:bg-blue-700">
                        Search Now
                    </button>

                    {/* another section here */}
                    <div className="mt-14 w-full border-t border-gray-300 p-4">
                        <h3 className="mb-4 text-lg font-semibold text-gray-800">
                            Search By Investment
                        </h3>
                        <ul className="space-y-3">
                            {[
                                <span key="line-break">
                                    Franchises Under <br /> 10,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 25,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 50,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 100,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 200,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 300,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 400,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 500,000 ETB
                                </span>,
                                <span key="line-break">
                                    Franchises Under <br /> 500,000 ETB
                                </span>,
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex cursor-pointer items-center justify-between text-gray-700 hover:text-blue-600"
                                >
                                    <span className="flex items-center">
                                        <span className="mr-2 h-2 w-2 rounded-full bg-orange-500"></span>
                                        {item}
                                    </span>
                                    <span className="text-gray-400">&gt;</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
