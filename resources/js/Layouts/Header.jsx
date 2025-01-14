import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';

export default function Header() {
    const { auth } = usePage().props;

    const user = auth?.user;

    return (
        <>
            <header className="header_container flex items-center justify-around bg-slate-50">
                <Link href={route('home')}>
                    <img
                        src="images/BF-Magazine-Logo-REV-2.png"
                        alt=""
                        className="h-20"
                    />
                </Link>
                <div className="header_buttons flex gap-x-6">
                    <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        News & Advice
                    </button>

                    {!user ? (
                        <>
                            <Link
                                href={route('register')}
                                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            >
                                Register
                            </Link>
                            <Link
                                href={route('login')}
                                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            >
                                Log in
                            </Link>
                        </>
                    ) : (
                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="flex items-center rounded border border-blue-500 px-4 py-2 font-bold text-blue-500 hover:bg-blue-200 hover:text-blue-700"
                                        >
                                            {user.name}
                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        {user.user_role == 'franchisor' ? (
                                            <>
                                                <Dropdown.Link
                                                    href={route('dashboard')}
                                                >
                                                    Dashboard
                                                </Dropdown.Link>
                                            </>
                                        ) : (
                                            <>
                                                <Dropdown.Link
                                                    href={route(
                                                        'franchiseeDashboard',
                                                    )}
                                                >
                                                    Dashboard
                                                </Dropdown.Link>
                                            </>
                                        )}

                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>

                            {/* Signature Box */}
                            {user.signature && (
                                <div className="ml-4 border border-dashed border-blue-500 p-2 text-sm text-gray-600">
                                    <span>Signed in as:</span>
                                    <div className="font-bold text-blue-500">
                                        {user.signature}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
