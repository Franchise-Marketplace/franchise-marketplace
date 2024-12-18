import { Link } from '@inertiajs/react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export default function Footer() {
    return (
        <>
            <div className="flex items-center justify-center space-x-[1rem]">
                <button className="w-[12em] rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                    Join Our Newsletter
                </button>
                <button className="flex w-[12em] items-center justify-start rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                    <span>Click To Subscribe</span>
                    <span className="ml-2">➤</span>
                </button>
            </div>

            <div className="mb-24 ml-36 mt-20 grid grid-cols-[4fr_2fr_2fr] items-start gap-4">
                <p className="text-xl font-bold text-blue-500">
                    Franchise Marketplace is a trading name of Connect
                    <br /> Digital Solutions Ltd.
                </p>
                <p className="w-full text-center text-xl font-bold text-blue-500">
                    Advertise With Us
                </p>
                <div>
                    <p className="mb-2 text-xl font-bold text-blue-500">
                        Support
                    </p>
                    <ul className="list-none space-y-1 text-left">
                        <li className="text-base">
                            <Link
                                href="#"
                                className="text-blue-8300 mx-1 text-base hover:text-blue-500 hover:underline"
                            >
                                Member login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-blue-8300 mx-1 text-base hover:text-blue-500 hover:underline"
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ml-36">
                <ul className="flex space-x-4">
                    <li>
                        <div className="flex cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white hover:bg-blue-700">
                            <FaFacebookF className="text-lg" />
                        </div>
                    </li>

                    <li>
                        <div className="flex cursor-pointer items-center justify-center rounded-full bg-pink-500 p-3 text-white hover:bg-pink-700">
                            <FaInstagram className="text-lg" />
                        </div>
                    </li>

                    <li>
                        <div className="flex cursor-pointer items-center justify-center rounded-full bg-blue-500 p-3 text-white hover:bg-blue-700">
                            <FaX className="text-lg" />
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mb-10 py-4 text-center text-sm text-slate-600">
                <p>
                    © 2024
                    <Link
                        href="/HomePage"
                        className="mx-1 text-blue-800 hover:underline"
                    >
                        Franchise Marketplace
                    </Link>
                    All Rights Reserved
                    <Link
                        href="/HomePage"
                        className="mx-1 text-blue-800 hover:underline"
                    >
                        Terms of Use
                    </Link>
                    <Link
                        href="/HomePage"
                        className="mx-1 text-blue-800 hover:underline"
                    >
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </>
    );
}
