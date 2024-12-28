import { useState } from 'react';

export default function AddListing() {
    const [listingDetails, setListingDetails] = useState({
        title: '',
        location: '',
        businessType: '',
        price: '',
        description: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setListingDetails({ ...listingDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle adding listing logic (e.g., API call to save the listing)
        console.log('Listing added:', listingDetails);
    };

    return (
        <div className="rounded-md bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-500">
                Add Franchise Listing
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 w-2/4 space-y-4">
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-semibold"
                    >
                        Franchise Name
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={listingDetails.title}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="location"
                        className="block text-sm font-semibold"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={listingDetails.location}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="businessType"
                        className="block text-sm font-semibold"
                    >
                        Type of Business
                    </label>
                    <select
                        id="businessType"
                        name="businessType"
                        value={listingDetails.businessType}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    >
                        <option value="">Select Type</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Retail">Retail</option>
                        <option value="Service">Service</option>
                        <option value="Franchise">Franchise</option>
                        <option value="Fitness">Fitness</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-semibold"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={listingDetails.price}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-semibold"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={listingDetails.description}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="contactName"
                        className="block text-sm font-semibold"
                    >
                        Contact Name
                    </label>
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={listingDetails.contactName}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="contactEmail"
                        className="block text-sm font-semibold"
                    >
                        Contact Email
                    </label>
                    <input
                        type="email"
                        id="contactEmail"
                        name="contactEmail"
                        value={listingDetails.contactEmail}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="contactPhone"
                        className="block text-sm font-semibold"
                    >
                        Contact Phone
                    </label>
                    <input
                        type="text"
                        id="contactPhone"
                        name="contactPhone"
                        value={listingDetails.contactPhone}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 rounded bg-blue-500 p-2 text-white"
                >
                    Add Listing
                </button>
            </form>
        </div>
    );
}
