import { useForm } from '@inertiajs/react';

export default function SideBar() {
    const { data, setData, post } = useForm({
        investment: '',
        location: '',
        industry: '',
    });

    const industries = [
        'Food & Beverage',
        'Retail',
        'Education',
        'Health & Wellness',
        'Real Estate',
        'Technology',
        'Fashion',
        'Tourism',
        'Agriculture',
        'Logistics',
    ];

    const handleSubmit = () => {
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
                            value={data.investment}
                            onChange={(e) =>
                                setData('investment', e.target.value)
                            }
                            className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                        >
                            <option value="">Select Investment</option>
                            {[...Array(10).keys()].map((i) => {
                                const value = (i + 1) * 10000;
                                return (
                                    <option key={value} value={value}>
                                        Franchise under {value.toLocaleString()}{' '}
                                        ETB
                                    </option>
                                );
                            })}
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
                            value={data.industry}
                            onChange={(e) =>
                                setData('industry', e.target.value)
                            }
                            className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                        >
                            <option value="">Select Industry</option>
                            {industries.map((industry, index) => (
                                <option key={index} value={industry}>
                                    {industry}
                                </option>
                            ))}
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
                            value={data.location}
                            onChange={(e) =>
                                setData('location', e.target.value)
                            }
                            className="focus:blue-400 w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                        >
                            <option value="">Select Location</option>
                            {[
                                'Addis Ababa',
                                'Dire Dawa',
                                'Mekelle',
                                'Adama',
                                'Hawassa',
                                'Bahir Dar',
                                'Gondar',
                                'Jimma',
                                'Jigjiga',
                                'Harar',
                            ].map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
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
