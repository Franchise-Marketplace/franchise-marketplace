export default function Hero() {
    return (
        <>
            <h1 className="mt-4 text-center text-5xl font-extrabold">
                Everything You Need To Know About ET Franchising
            </h1>
            <div className="search_box-container mx-auto flex w-fit flex-col border border-black">
                <p>Search all ET Franchise opportunities</p>
                <div className="searching_categories flex justify-center">
                    <div className="search_industry flex flex-col">
                        <label htmlFor="industry">Search by industry</label>
                        <input type="text" name="" id="industry" />
                    </div>
                    <div className="search_location flex flex-col">
                        <label htmlFor="industry">Search by location</label>
                        <input type="text" name="" id="industry" />
                    </div>
                    <div className="search_investment flex flex-col">
                        <label htmlFor="industry">Search by investment</label>
                        <input type="text" name="" id="industry" />
                    </div>
                </div>
            </div>
        </>
    );
}
