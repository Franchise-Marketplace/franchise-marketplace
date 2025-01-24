import { useForm } from '@inertiajs/react';

export default function SideBar() {
    const { data, setData, post } = useForm({
        Franchise_price: '',
        Franchise_location: '',
        Franchise_type: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/search');
    };

    return (
        <div className="item-center ml-4 flex flex-col justify-start">
            <section className="my-4 h-screen w-full bg-white p-4 md:max-w-[300px]">
                <h2 className="mb-4 text-2xl font-bold text-gray-500">
                    Find Franchise Marketplaces
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="search_investment flex flex-col">
                        <label
                            htmlFor="investment"
                            className="text-xl font-semibold"
                        >
                            Search by Investment
                        </label>
                        <select
                            name="investment"
                            id="investment"
                            value={data.Franchise_price}
                            onChange={(e) =>
                                setData('Franchise_price', e.target.value)
                            }
                            className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                        >
                            <option value="">Select Investment</option>
                            <option value="20000">20,000 ETB</option>
                            <option value="50000">50,000 ETB</option>
                            <option value="100000">100,000 ETB</option>
                            <option value="200000">200,000 ETB</option>
                            <option value="500000">500,000 ETB</option>
                        </select>
                    </div>

                    <div className="search_industry flex flex-col">
                        <label
                            htmlFor="industry"
                            className="text-xl font-semibold"
                        >
                            Search by Industry
                        </label>
                        <select
                            name="industry"
                            id="industry"
                            value={data.Franchise_type}
                            onChange={(e) =>
                                setData('Franchise_type', e.target.value)
                            }
                            className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
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
                    <div className="search_location flex flex-col">
                        <label
                            htmlFor="location"
                            className="text-xl font-semibold"
                        >
                            Search by Location
                        </label>
                        <select
                            name="location"
                            id="location"
                            value={data.Franchise_location}
                            onChange={(e) =>
                                setData('Franchise_location', e.target.value)
                            }
                            className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                        >
                            <option value="">Select Location</option>
                            <option value="Addis Ababa">Addis Ababa</option>
                            <option value="Dire Dawa">Dire Dawa</option>
                            <option value="Mekelle">Mekelle</option>
                            <option value="Adama">Adama</option>
                            <option value="Hawassa">Hawassa</option>
                            <option value="Bahir Dar">Bahir Dar</option>
                            <option value="Gondar">Gondar</option>
                            <option value="Jimma">Jimma</option>
                            <option value="Jigjiga">Jigjiga</option>
                            <option value="Harar">Harar</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full rounded-md bg-blue-500 py-2 font-bold text-white hover:bg-blue-700"
                    >
                        Search Now
                    </button>
                </form>
            </section>
        </div>
    );
}
