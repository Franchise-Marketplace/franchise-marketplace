import Footer from '@/Layouts/Footer';
import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';
import SideBar from '@/Layouts/SideBar';
import SideDetail from '@/Layouts/SideDetail';
import { Head } from '@inertiajs/react';

export default function franchiseeDashboard({
    listings,
    user,
    isSearch = false,
}) {
    return (
        <>
            {/* <AuthenticatedLayout> */}
            <Head title="franchiseeDashboard" />
            <Header />
            <Nav />
            <div className="flex">
                <SideBar />
                <SideDetail
                    listings={listings}
                    userId={user.id}
                    isSearch={isSearch}
                />
            </div>
            <Footer />
            {/* </AuthenticatedLayout> */}
        </>
    );
}
