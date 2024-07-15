import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import React, {useEffect, useState} from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Footer from "@/Components/Footer";

export default function Dashboard({auth, jobs}) {
    console.log(jobs)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Your profile"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold mb-6">Your jobs</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {jobs?.map((job) => (
                            <div
                                key={job.id}
                                className="relative bg-white overflow-hidden shadow-sm sm:rounded-lg group"
                            >
                                <div
                                    className="p-6 text-gray-900 group-hover:opacity-25 transition-opacity duration-300">
                                    <p className="text-gray-700 mb-2">
                                        <strong>Title:</strong> {job.title}
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        <strong>Salary:</strong>{" "}
                                        {job.salary_range === "0"
                                            ? "No specified"
                                            : job.salary_range}
                                    </p>
                                    <p className="text-gray-700 mb-2">
                                        <strong>Is Active:</strong>{" "}
                                        {job.is_active ? "Yes" : "No"}
                                    </p>
                                </div>
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link href={route('jobs.show', {id: job.job_uuid})}>
                                        <PrimaryButton
                                            className="text-white text-xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                                            EDIT
                                        </PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </AuthenticatedLayout>
    );
}
