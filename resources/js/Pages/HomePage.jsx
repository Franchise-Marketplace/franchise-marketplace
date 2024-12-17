import Header from '@/Layouts/Header';
import Hero from '@/Layouts/Hero';

export default function HomePage() {
    return (
        <>
            <Header />
            <nav className="flex">
                <ul className="align-center flex h-full w-full cursor-pointer justify-center text-lg font-semibold">
                    <li className="px-14 py-2 hover:bg-slate-100 hover:text-blue-700">
                        Home
                    </li>
                    <li className="border-l-2 px-14 py-2 hover:bg-slate-100">
                        Hot Franchise
                    </li>
                    <li className="border-l-2 px-14 py-2 hover:bg-slate-100">
                        All Franchise
                    </li>
                    <li className="border-l-2 px-14 py-2 hover:bg-slate-100">
                        About Us
                    </li>
                    <li className="border-l-2 px-14 py-2 hover:bg-slate-100">
                        Franchise your Business
                    </li>
                </ul>
            </nav>
            <Hero />
        </>
    );
}
