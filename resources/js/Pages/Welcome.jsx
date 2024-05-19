import React from 'react';
import {Head, Link} from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="4 days week jobs" />
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-2">Find Your Dream Job</h1>
                    <p className="text-2xl mb-8">Discover Companies Offering More Free Time and a Better Work-Life Balance</p>
                    <Link href="/post-job" className="bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold">Post a Job</Link>
                </div>
            </section>
            <section id="jobs" className="py-12">
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
