import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Hero({ showResults = [] }) {
    const [industry, setIndustry] = useState('');
    const [locationSearch, setLocationSearch] = useState('');
    const [investment, setInvestment] = useState('');
    const { data, setData, post, reset } = useForm({
        Franchise_location: '',
        Franchise_type: '',
        Franchise_price: '',
    });

    const handleSearch = () => {
        console.log(data);
        post('/search', {
            onSuccess: () => {
                reset();
                window.scrollBy({
                    top: -70,
                    behavior: 'smooth',
                });
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <>
            <div className="hero_container relative flex flex-col items-center justify-start">
                <img
                    src="images/001589022cd52fe180cac52549b3d1dc.jpg"
                    alt=""
                    className="w-full"
                />
                <h1 className="absolute top-0 z-10 mt-4 text-center text-5xl font-extrabold text-white">
                    Everything You Need To Know About ET Franchising
                </h1>

                <div className="search_box-container absolute top-36 mx-auto flex w-fit flex-col rounded-lg bg-gray-950 bg-opacity-20 px-10 py-8">
                    <h2 className="mb-6 text-3xl font-normal text-white">
                        Search all ET Franchise opportunities
                    </h2>
                    <div className="searching_categories flex flex-col items-center gap-6 md:flex-row">
                        {/* Industry Dropdown */}
                        <div className="search_industry flex w-full flex-col">
                            <label
                                htmlFor="industry"
                                className="text-xl font-semibold text-white"
                            >
                                Search by Industry
                            </label>
                            <select
                                id="industry"
                                className="rounded border-gray-300 p-2"
                                value={industry}
                                onChange={(e) => {
                                    setIndustry(e.target.value);
                                    setData('Franchise_type', e.target.value);
                                }}
                            >
                                <option value="">Select Industry</option>
                                <option value="Food & Beverage">
                                    Food & Beverage
                                </option>
                                <option value="Retail">Retail</option>
                                <option value="Education">Education</option>
                                <option value="Health & Wellness">
                                    Health & Wellness
                                </option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Technology">Technology</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Tourism">Tourism</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Logistics">Logistics</option>
                            </select>
                        </div>

                        {/* Location Dropdown */}
                        <div className="search_location flex w-full flex-col">
                            <label
                                htmlFor="location"
                                className="text-xl font-semibold text-white"
                            >
                                Search by Location
                            </label>
                            <select
                                id="location"
                                className="rounded border-gray-300 p-2"
                                value={locationSearch}
                                onChange={(e) => {
                                    setLocationSearch(e.target.value);
                                    setData(
                                        'Franchise_location',
                                        e.target.value,
                                    );
                                }}
                            >
                                <option value="">Select Location</option>
                                <option value="Addis Ababa">Addis Ababa</option>
                                <option value="Dire Dawa">Dire Dawa</option>
                                <option value="Bahir Dar">Bahir Dar</option>
                                <option value="Adama">Adama</option>
                                <option value="Hawassa">Hawassa</option>
                                <option value="Mekelle">Mekelle</option>
                                <option value="Jimma">Jimma</option>
                                <option value="Gondar">Gondar</option>
                                <option value="Harar">Harar</option>
                                <option value="Debre Birhan">
                                    Debre Birhan
                                </option>
                            </select>
                        </div>

                        {/* Investment Dropdown */}
                        <div className="search_investment flex w-full flex-col">
                            <label
                                htmlFor="investment"
                                className="text-xl font-semibold text-white"
                            >
                                Search by Investment
                            </label>
                            <select
                                id="investment"
                                className="rounded border-gray-300 p-2"
                                value={investment}
                                onChange={(e) => {
                                    setInvestment(e.target.value);
                                    setData('Franchise_price', e.target.value);
                                }}
                            >
                                <option value="">Select Investment</option>
                                <option value="20000">20,000 ETB</option>
                                <option value="50000">50,000 ETB</option>
                                <option value="100000">100,000 ETB</option>
                                <option value="200000">200,000 ETB</option>
                                <option value="500000">500,000 ETB</option>
                            </select>
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            className="rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {showResults.length > 0 && (
                <div className="mt-12 px-8">
                    <h3 className="text-2xl font-bold text-blue-500">
                        Search Results
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {showResults.map((listing) => (
                            <div
                                key={listing.id}
                                className="rounded border p-4 shadow"
                            >
                                <img
                                    src={'storage/' + listing.Franchise_image}
                                    alt={listing.Franchise_name}
                                    className="h-48 w-full rounded object-cover"
                                />
                                <h4 className="mt-2 text-lg font-semibold">
                                    {listing.Franchise_name}
                                </h4>
                                <p className="text-gray-600">
                                    {listing.Franchise_description}
                                </p>
                                <p className="font-bold text-blue-500">
                                    {listing.Franchise_price} ETB
                                </p>
                                <p>{listing.Franchise_location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
