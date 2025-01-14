import SideBar from '@/Layouts/Dashboard/SideBar';
import Footer from '@/Layouts/Footer';
import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';
import SideDetail from '@/Layouts/SideDetail';
import { Head } from '@inertiajs/react';

export default function franchiseeDashboard({ listings, user }) {
    return (
        <>
            {/* <AuthenticatedLayout> */}
            <Head title="franchiseeDashboard" />
            <Header />
            <Nav />
            <div className="flex">
                <SideBar listings={listings} user={user} />
                <SideDetail listings={listings} userId={user.id} />
            </div>
            <Footer />
            {/* </AuthenticatedLayout> */}
        </>
    );
}
