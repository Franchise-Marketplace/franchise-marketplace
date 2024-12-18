export default function Hero() {
    return (
        <>
            <div className="hero_container relative flex flex-col items-center justify-start">
                <img
                    src="images/001589022cd52fe180cac52549b3d1dc.jpg"
                    alt=""
                    className="w-full"
                />
                <h1 className="absolute top-0 z-10 mt-4 text-center text-5xl font-extrabold">
                    Everything You Need To Know About ET Franchising
                </h1>

                <div className="search_box-container absolute top-36 mx-auto flex w-fit flex-col rounded-lg bg-gray-950 bg-opacity-20 px-20 py-8">
                    <h2 className="mb-6 text-5xl font-normal">
                        Search all ET Franchise opportunities
                    </h2>
                    <div className="searching_categories flex items-end gap-x-8">
                        <div className="search_industry flex w-full flex-col">
                            <label
                                htmlFor="industry"
                                className="text-xl font-semibold"
                            >
                                Search by industry
                            </label>
                            <select
                                placeholder="Search by industry"
                                name="sin"
                                id="sin"
                            >
                                <option value>Search by industry</option>
                                <option value="20000">
                                    Franchise under 20,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 20,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 30,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 40,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 50,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 60,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 70,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 80,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 90,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 100,000 ETB
                                </option>
                            </select>
                        </div>
                        <div className="search_location flex flex-col">
                            <label
                                htmlFor="location"
                                className="text-xl font-semibold"
                            >
                                Search by location
                            </label>
                            <input type="text" name="" id="location" />
                        </div>
                        <div className="search_investment flex flex-col">
                            <label
                                htmlFor="investment"
                                className="text-xl font-semibold"
                            >
                                Search by investment
                            </label>
                            <select
                                placeholder="Select investment"
                                name="sin"
                                id="sin"
                            >
                                <option value>Select Investment</option>
                                <option value="20000">
                                    Franchise under 20,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 20,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 30,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 40,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 50,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 60,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 70,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 80,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 90,000 ETB
                                </option>
                                <option value="20000">
                                    Franchise under 100,000 ETB
                                </option>
                            </select>
                        </div>
                        <button class="rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
