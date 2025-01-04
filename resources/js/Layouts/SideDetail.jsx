import { useEffect, useState } from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

export default function SideDetail() {
    const [verified, setVerified] = useState(false);
    useEffect(() => {
        const fetchVerificationStatus = async () => {
            const fetchedVerifiedStatus = true;
            setVerified(fetchedVerifiedStatus);
        };

        fetchVerificationStatus();
    }, []);

    const franchisedata = [
        {
            id: 1,
            name: 'BRGR Lab',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, optio voluptatum. Itaque asperiores cum nam.',
            image: 'https://via.placeholder.com/256',
            verified: true,
        },
        {
            id: 2,
            name: 'Pizza Planet',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, optio voluptatum. Itaque asperiores cum nam.',
            image: 'https://via.placeholder.com/256',
            verified: false,
        },
        {
            id: 3,
            name: 'Sushi World',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, optio voluptatum. Itaque asperiores cum nam.',
            image: 'https://via.placeholder.com/256',
            verified: true,
        },
        {
            id: 4,
            name: 'Taco Town',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, optio voluptatum. Itaque asperiores cum nam.',
            image: 'https://via.placeholder.com/256',
            verified: false,
        },
    ];

    return (
        <>
            <div className="mb-24 mt-8 flex flex-col px-8">
                <div className="mt-2 flex justify-between">
                    <p className="text-gray-700">
                        Showing 1 - 30 of 194 Results
                    </p>
                    <select
                        name="sort"
                        id="sort"
                        placeholder="sort by"
                        className="focus:blue-400 mr-2 inline-block w-48 rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none"
                    >
                        <option value="">Search by</option>
                        <option value="location">Location</option>
                        <option value="industry">Industry</option>
                        <option value="investment">Investment</option>
                    </select>
                </div>
                <h2 className="text-6xl font-bold text-blue-500">
                    All Franchises
                </h2>
                <hr className="mb-10" />
                {/* Franchise Section */}
                {franchisedata.map((franchise) => {
                    return (
                        <>
                            <div className="flex gap-4 p-4" id={franchise.id}>
                                <img src={franchise.image} alt="Franchise" />
                                <div className="relative flex flex-col justify-between gap-4">
                                    <div className="relative flex flex-col gap-4">
                                        <h1 className="text-3xl font-bold text-blue-500">
                                            {franchise.name}
                                        </h1>
                                        <div className="absolute right-0 top-0 flex items-center gap-3">
                                            {franchise.verified ? (
                                                <FaCheckCircle className="text-3xl text-blue-500" />
                                            ) : (
                                                <FaRegCheckCircle className="text-3xl text-gray-400" />
                                            )}
                                            <span
                                                className={
                                                    verified
                                                        ? 'text-blue-500'
                                                        : 'text-gray-400'
                                                }
                                            >
                                                {verified
                                                    ? 'Verified'
                                                    : 'Not Verified'}
                                            </span>
                                        </div>
                                        <p>{franchise.description}</p>
                                    </div>
                                    <div className="flex">
                                        <button className="mx-4 mb-4 rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700">
                                            I am interested
                                        </button>

                                        <button className="mx-4 mb-4 rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700">
                                            View Listing
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
