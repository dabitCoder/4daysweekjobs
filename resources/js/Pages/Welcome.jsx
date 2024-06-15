import React from 'react';
import {Head, Link} from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown.jsx";

export default function Index({auth}) {
    return (
        <>
            <Head title="4 days week jobs"/>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 flex justify-between items-center py-4">
                    <Link href="/" className="text-3xl font-bold text-blue-600">4 Days Week Jobs</Link>
                    <nav className="space-x-4">
                    </nav>
                    <div className="space-x-4">
                        {auth?.user ?
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
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
                                        </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>:
                            <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                        }
                    </div>
                </div>
            </header>
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-2">Find Your Dream Job</h1>
                    <p className="text-2xl mb-8">Discover Companies Offering More Free Time and a Better Work-Life
                        Balance</p>
                    <Link href="/post-job"
                          className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white hover:shadow">Post
                        a
                        Job</Link>
                </div>
            </section>
            <section id="jobs" className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Latest Jobs</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                            <p className="text-gray-700 mb-4">Awesome Company</p>
                            <p className="text-gray-600 mb-2"><strong>Location:</strong> Remote</p>
                            <p className="text-gray-600 mb-2"><strong>Salary:</strong> $60,000 - $80,000</p>
                            <a href="#" className="text-blue-600 font-semibold hover:underline">View Details</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Backend Developer</h3>
                            <p className="text-gray-700 mb-4">Tech Innovators</p>
                            <p className="text-gray-600 mb-2"><strong>Location:</strong> Hybrid</p>
                            <p className="text-gray-600 mb-2"><strong>Salary:</strong> $70,000 - $90,000</p>
                            <a href="#" className="text-blue-600 font-semibold hover:underline">View Details</a>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">UX Designer</h3>
                            <p className="text-gray-700 mb-4">Creative Studio</p>
                            <p className="text-gray-600 mb-2"><strong>Location:</strong> Office</p>
                            <p className="text-gray-600 mb-2"><strong>Salary:</strong> $50,000 - $70,000</p>
                            <a href="#" className="text-blue-600 font-semibold hover:underline">View Details</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
