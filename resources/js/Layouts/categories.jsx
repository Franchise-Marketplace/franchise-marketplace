import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function Categories({ pagination, listings }) {
    const categories = [
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

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortCriteria, setSortCriteria] = useState('Franchise_type');
    const [isFetching, setIsFetching] = useState(false);
    const [listingsData, setListingsData] = useState(listings || []);
    const [isListing, setListing] = useState(false);
    const listingsRef = useRef(null);

    const fetchListings = async () => {
        if (!selectedCategory) return;
        setListing(true);
        setIsFetching(true);
        try {
            const csrfToken = document.querySelector(
                'meta[name="csrf-token"]',
            )?.content;
            const response = await axios.get('/listings-search', {
                params: {
                    category: selectedCategory,
                    page: currentPage,
                    sort: sortCriteria,
                    perPage: 10,
                },
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            });

            setListingsData(response.data.listings || []);
            if (listingsRef.current) {
                listingsRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            console.error('Error fetching listings:', error);
            alert('Failed to fetch listings. Please try again.');
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        fetchListings();
    }, [selectedCategory, currentPage, sortCriteria]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className="franchise_by_industry_container mb-8 flex min-h-screen flex-col items-center justify-center">
            {/* Category Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="lists relative flex h-40 w-60 cursor-pointer flex-col rounded-lg bg-[url('images/BF-Magazine-Logo-REV-2.png')] bg-cover shadow-lg hover:shadow-2xl"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <h3 className="z-10 text-center text-lg font-semibold text-black">
                            {category}
                        </h3>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-slate-200 via-transparent to-slate-100 opacity-80"></div>
                        <p className="absolute bottom-0 flex w-full items-center justify-center rounded-b-lg bg-blue-500 py-2 text-white opacity-90">
                            View Category
                        </p>
                    </div>
                ))}
            </div>

            {isListing && listingsData && listingsData.length > 0 ? (
                <div className="listings_container mt-12 w-3/4 text-center">
                    <h2 className="mb-6 text-2xl font-bold text-gray-800">
                        Listings for: {selectedCategory || 'All'}
                    </h2>

                    {/* Sort Dropdown */}
                    <select
                        onChange={handleSortChange}
                        value={sortCriteria}
                        className="mb-6 rounded border border-gray-300 p-2"
                    >
                        <option value="Franchise_name">Name</option>
                        <option value="Franchise_price">Price</option>
                        <option value="Franchise_location">Location</option>
                    </select>

                    {/* Listings */}
                    {isFetching ? (
                        <p>Loading listings...</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {listingsData.map((listing, index) => (
                                <div
                                    key={index}
                                    className="listing_item flex flex-col items-center rounded-lg border bg-white p-4 shadow-xl transition-all duration-300 hover:shadow-2xl"
                                >
                                    {/* Image at the top */}
                                    {listing.Franchise_image && (
                                        <img
                                            src={
                                                'storage/' +
                                                listing.Franchise_image
                                            }
                                            alt={listing.Franchise_name}
                                            className="h-40 w-full rounded-t-lg object-cover"
                                        />
                                    )}

                                    <div className="flex flex-col items-center justify-between space-y-4 p-4">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {listing.Franchise_name}
                                        </h3>
                                        <p className="text-center text-sm text-gray-600">
                                            {listing.Franchise_description}
                                        </p>
                                        <p className="text-lg font-semibold text-blue-600">
                                            Price: {listing.Franchise_price}
                                        </p>

                                        {/* Button to view more */}
                                        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-blue-700">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="pagination mt-8 flex items-center justify-between">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1 || isFetching}
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
                        >
                            Previous
                        </button>
                        <span className="text-gray-700">
                            Page {currentPage}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={
                                pagination?.current_page ===
                                    pagination?.last_page || isFetching
                            }
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="text-center text-2xl font-bold text-blue-500">
                        No results found
                    </h3>
                </div>
            )}
        </div>
    );
}
