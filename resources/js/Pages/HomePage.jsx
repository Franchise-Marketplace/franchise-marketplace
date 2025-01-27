import Categories from '@/Layouts/Categories';
import Footer from '@/Layouts/Footer';
import Header from '@/Layouts/Header';
import Hero from '@/Layouts/Hero';
import Nav from '@/Layouts/Nav';
import ContactUs from '@/Layouts/contact';

export default function HomePage({ showResults = [], listings = [] }) {
    return (
        <>
            <Header />
            <Nav />
            <Hero showResults={showResults} />

            <div className="main_body-container">
                <h2 className="mb-8 text-center text-4xl font-semibold">
                    Latest Franchises
                </h2>
                <div className="latest_franchise_contianer mb-8 flex flex-wrap justify-evenly">
                    {listings.map((listing) => {
                        return (
                            <>
                                <div className="lists mb-12 flex flex-col rounded p-8 shadow-xl">
                                    <div className="franhcise_box flex gap-5">
                                        <img
                                            src={
                                                'storage/' +
                                                listing.Franchise_image
                                            }
                                            alt=""
                                            className="h-36 w-36 pt-2"
                                        />
                                        <div className="franchise_description_and_button flex flex-col gap-2">
                                            <h2 className="mb-2 text-xl font-bold">
                                                {listing.Franchise_name}
                                            </h2>
                                            <p className="w-44 text-sm">
                                                {listing.Franchise_description}
                                            </p>
                                            <button className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">
                                                View Listing
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <h2
                    className="mb-2 text-center text-4xl font-semibold"
                    id="category"
                >
                    Franchise by Industry
                </h2>

                <Categories />

                <ContactUs />

                <div className="pb-14">
                    <div className="relative isolate bg-white px-6 py-1 sm:py-1 lg:px-8">
                        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                            <div className="rounded-3xl rounded-t-3xl bg-white/60 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
                                <h3 className="text-base/7 font-semibold text-indigo-600">
                                    Are You A Franchise Owner ?
                                </h3>

                                <p className="mt-6 text-base/7 text-gray-600">
                                    List your franchise & business opportunities
                                    now on the largest international franchise
                                    directory and connect with qualified
                                    potential franchisees around the world.
                                    build your profile in less than 5 minutes
                                    and ensure a higher exposure by submitting
                                    your latest news, videos, and success
                                    stories and access your profile and leads
                                    from any device!
                                </p>

                                <a
                                    href="#"
                                    className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
                                >
                                    Join Our Site Today
                                </a>
                            </div>
                            <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
                                <h3 className="text-base/7 font-semibold text-indigo-400">
                                    About Franchise Directory
                                </h3>

                                <p className="mt-6 text-base/7 text-gray-300">
                                    Franchise Directory - Full Basket of
                                    Opportunities! Search our list of best
                                    franchise & business opportunities and
                                    connect with franchise owners. View the
                                    franchise profiles, news, videos, and
                                    franchise success stories.
                                </p>

                                <a
                                    href="#"
                                    className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
                                >
                                    Find Your Franchise
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
