import Footer from '@/Layouts/Footer';
import Header from '@/Layouts/Header';
import Hero from '@/Layouts/Hero';
import Nav from '@/Layouts/Nav';

export default function HomePage() {
    const products = [
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
    ];

    const services = [
        {
            image: '',
            service_name: 'Pets Service',
        },
        {
            image: '',
            service_name: 'Resturant & Fast Food',
        },
        {
            image: '',
            service_name: 'Professional & Consulting',
        },
        {
            image: '',
            service_name: 'Sport & Fitness',
        },
        {
            image: '',
            service_name: 'Care',
        },
        {
            image: '',
            service_name: 'Kids Club',
        },
        {
            image: '',
            service_name: 'Van Based',
        },
        {
            image: '',
            service_name: 'Home Services',
        },
    ];

    return (
        <>
            <Header />
            <Nav />
            <Hero />
            <div className="main_body-container">
                <h2 className="mb-8 text-center text-4xl font-semibold">
                    Latest Franchises
                </h2>
                <div className="latest_franchise_contianer mb-8 flex flex-wrap justify-evenly">
                    {products.map((product) => {
                        return (
                            <>
                                <div className="lists mb-12 flex flex-col rounded p-8 shadow-xl">
                                    <h2 className="mb-2 text-xl font-bold">
                                        {product.title}
                                    </h2>
                                    <div className="franhcise_box flex gap-5">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="h-36 w-36"
                                        />
                                        <div className="franchise_description_and_button flex flex-col gap-2">
                                            <p className="w-44 text-sm">
                                                {product.description}
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
                <h2 className="mb-8 text-center text-4xl font-semibold">
                    Franchise by Industry
                </h2>
                <div className="franchise_by_industry_container mb-8 flex flex-wrap justify-around">
                    {services.map((service) => {
                        return (
                            <div className="lists align relative mb-12 flex h-40 w-96 flex-col rounded bg-[url('images/BF-Magazine-Logo-REV-2.png')] shadow-xl">
                                <h3 className="z-10 text-center">
                                    {service.service_name}
                                </h3>
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-200 via-transparent to-slate-100 opacity-70"></div>
                                <p className="absolute bottom-0 flex w-full cursor-pointer items-end justify-center rounded-b-sm bg-blue-200 py-2 opacity-70">
                                    View Category
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}
