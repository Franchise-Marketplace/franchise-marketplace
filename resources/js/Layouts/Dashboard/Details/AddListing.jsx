import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function AddListing() {
    const [visible, setVisible] = useState(false);
    const [industry, setIndustry] = useState('');
    const { data, setData, post, reset, progress } = useForm({
        Franchise_name: '',
        Franchise_location: '',
        Franchise_type: '',
        Franchise_price: '',
        Franchise_description: '',
        Franchise_image: null,
        Franchise_contact: '',
        Franchise_email: '',
        Franchise_phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleFileChange = (e) => {
        setData('Franchise_image', e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/listings', {
            onSuccess: () => {
                reset();
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                }, 3000);
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const industries = [
        'Food & Beverage',
        'Retail',
        'Education',
        'Health & Wellness',
        'Real Estate',
        'Technology',
        'Fashion',
        'Tourism',
        'Agriculture',
        'Logistics',
    ];

    return (
        <div className="rounded-md bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-500">
                Add Franchise Listing
            </h2>
            {visible && (
                <div className="mt-4 rounded bg-green-100 p-4 text-green-800">
                    Listing added successfully!
                </div>
            )}
            <form onSubmit={handleSubmit} className="mt-6 w-2/4 space-y-4">
                <div>
                    <label
                        htmlFor="Franchise_name"
                        className="block text-sm font-semibold"
                    >
                        Franchise Name
                    </label>
                    <input
                        type="text"
                        id="Franchise_name"
                        name="Franchise_name"
                        value={data.Franchise_name}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="Franchise_location"
                        className="block text-sm font-semibold"
                    >
                        Location
                    </label>
                    <select
                        id="Franchise_location"
                        name="Franchise_location"
                        value={data.Franchise_location}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    >
                        <option value="">Select a City</option>
                        <option value="Addis Ababa">Addis Ababa</option>
                        <option value="Dire Dawa">Dire Dawa</option>
                        <option value="Mekelle">Mekelle</option>
                        <option value="Adama">Adama</option>
                        <option value="Hawassa">Hawassa</option>
                        <option value="Bahir Dar">Bahir Dar</option>
                        <option value="Gondar">Gondar</option>
                        <option value="Jimma">Jimma</option>
                        <option value="Jigjiga">Jigjiga</option>
                        <option value="Harar">Harar</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="Franchise_type"
                        className="block text-sm font-semibold"
                    >
                        Type of Business
                    </label>

                    <select
                        id="Franchise_type"
                        name="Franchise_type"
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                        value={industry}
                        onChange={(e) => {
                            setIndustry(e.target.value);
                            setData('Franchise_type', e.target.value);
                        }}
                    >
                        <option value="">Select an Industry</option>
                        {industries.map((ind, index) => (
                            <option key={index} value={ind}>
                                {ind}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="Franchise_price"
                        className="block text-sm font-semibold"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        id="Franchise_price"
                        name="Franchise_price"
                        value={data.Franchise_price}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="Franchise_image"
                        className="block text-sm font-semibold"
                    >
                        Image Upload
                    </label>
                    <input
                        type="file"
                        id="Franchise_image"
                        name="Franchise_image"
                        onChange={handleFileChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                    {progress && <div>Uploading: {progress.percentage}%</div>}
                </div>
                <div>
                    <label
                        htmlFor="Franchise_description"
                        className="block text-sm font-semibold"
                    >
                        Description
                    </label>
                    <textarea
                        id="Franchise_description"
                        name="Franchise_description"
                        value={data.Franchise_description}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="Franchise_contact"
                        className="block text-sm font-semibold"
                    >
                        Contact Name
                    </label>
                    <input
                        type="text"
                        id="Franchise_contact"
                        name="Franchise_contact"
                        value={data.Franchise_contact}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="Franchise_email"
                        className="block text-sm font-semibold"
                    >
                        Contact Email
                    </label>
                    <input
                        type="email"
                        id="Franchise_email"
                        name="Franchise_email"
                        value={data.Franchise_email}
                        onChange={handleChange}
                        className="mt-2 w-full rounded border border-gray-300 p-2"
                    />
                </div>
                <div>
                    <label
                        htmlFor="Franchise_phone"
                        className="block text-sm font-semibold"
                    >
                        Contact Phone
                    </label>
                    <input
                        type="text"
                        id="Franchise_phone"
                        name="Franchise_phone"
                        value={data.Franchise_phone}
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
