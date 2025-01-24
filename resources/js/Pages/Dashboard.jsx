import AddListing from '@/Layouts/Dashboard/Details/AddListing';
import ManageLeads from '@/Layouts/Dashboard/Details/ManageLeads';
import ManageListing from '@/Layouts/Dashboard/Details/ManageListing';
import MyDashboard from '@/Layouts/Dashboard/Details/MyDashboard';
import Stats from '@/Layouts/Dashboard/Details/Stats';
import SideBar from '@/Layouts/Dashboard/SideBar';
import Footer from '@/Layouts/Footer';
import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';
import { useState } from 'react';

export default function Dashboard({ user, listings, stat = [] }) {
    const [currentSection, setCurrentSection] = useState('mydashboard');
    const [editingListing, setEditingListing] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const handleSectionChange = (section) => {
        setCurrentSection(section);
    };

    const handleEdit = (listing, section, editFlag) => {
        setEditingListing(listing);
        setIsEdit(editFlag);
        setCurrentSection(section);
        console.log(listing);
    };

    return (
        <>
            <Header />
            <Nav />

            <div className="flex flex-col bg-gray-100 lg:flex-row">
                <SideBar user={user} onSectionChange={handleSectionChange} />
                <div className="flex-1 p-8">
                    {currentSection === 'addListing' &&
                        (isEdit ? (
                            <AddListing
                                editingListing={editingListing}
                                isEdit={isEdit}
                            />
                        ) : (
                            <AddListing />
                        ))}

                    {currentSection === 'manageListing' && (
                        <ManageListing
                            listings={listings}
                            onEdit={handleEdit}
                        />
                    )}
                    {currentSection === 'manageLeads' && (
                        <ManageLeads listings={listings} />
                    )}
                    {currentSection === 'mydashboard' && <MyDashboard />}
                    {currentSection === 'stats' && <Stats Stats={stat} />}
                </div>
            </div>

            <Footer />
        </>
    );
}
