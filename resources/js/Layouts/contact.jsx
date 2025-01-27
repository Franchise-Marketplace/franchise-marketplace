import axios from 'axios';
import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        message: '',
        agreeToPolicies: false,
    });

    const [showNotification, setShowNotification] = useState(false);
    const [notification, setNotification] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const notify = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const csrfToken = document.querySelector(
                'meta[name="csrf-token"]',
            )?.content;
            const response = await axios.post('/submit-request', formData, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
            });

            if (response.status === 200) {
                setNotification('Contact info submitted successfully');
                setResponseMessage('Your request has been sent successfully!');
                notify();
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    location: '',
                    message: '',
                    agreeToPolicies: false,
                });
            }
        } catch (error) {
            setResponseMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            ></div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Request FREE Details
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                    No Time To Search For Your Next Franchise Or Business
                    Opportunity? Submit Your Request Below, And Let Us Find It
                    For You!
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                autoComplete="given-name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Last Name */}
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                autoComplete="family-name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phone-number"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phone-number"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="123-456-7890"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="location"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Location
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="location"
                                id="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm/6 font-semibold text-gray-900"
                        >
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            ></textarea>
                        </div>
                    </div>

                    {/* Agree to Policies */}
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <input
                                type="checkbox"
                                name="agreeToPolicies"
                                checked={formData.agreeToPolicies}
                                onChange={handleInputChange}
                                className="h-6 w-6"
                            />
                        </div>
                        <label className="text-sm/6 text-gray-600">
                            I understand that information I enter will be stored
                            and shared with relevant members of the site and
                            that I may be contacted by these members and/or the
                            admin of the website.
                        </label>
                    </div>
                </div>
                {showNotification && (
                    <div className="mt-4 rounded bg-green-100 p-4 text-green-800">
                        <p>{notification}</p>
                    </div>
                )}

                {/* Submit Button */}
                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
}
