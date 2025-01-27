import { Link } from '@inertiajs/react';

export default function Nav() {
    return (
        <>
            <nav className="flex">
                <ul className="align-center flex h-full w-full cursor-pointer justify-center text-lg font-semibold">
                    <Link href={route('home')}>
                        <li className="px-14 py-2 hover:bg-slate-100 hover:text-blue-700">
                            Home
                        </li>
                    </Link>
                    <Link to="/#category">
                        <li className="border-l-2 px-14 py-2 hover:bg-slate-100">
                            Category
                        </li>
                    </Link>
                    <li className="border-l-2 px-14 py-2 hover:bg-slate-100">
                        All Franchise
                    </li>
                    <li className="border-l-2 px-14 py-2 hover:bg-slate-100">
                        About Us
                    </li>
                </ul>
            </nav>
        </>
    );
}
