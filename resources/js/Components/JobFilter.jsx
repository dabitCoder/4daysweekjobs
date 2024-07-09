import React, { useState } from "react";

const JobFilter = ({ onFilter }) => {
    const [location, setLocation] = useState("");
    const [modality, setModality] = useState("");
    const [salaryRange, setSalaryRange] = useState("");

    const handleFilter = () => {
        onFilter({ location, modality, salaryRange });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Filter Jobs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label className="block text-gray-600">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Modality</label>
                    <select
                        value={modality}
                        onChange={(e) => setModality(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    >
                        <option value="">All</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600">Salary Range</label>
                    <input
                        type="text"
                        value={salaryRange}
                        onChange={(e) => setSalaryRange(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        placeholder="e.g. 50000-100000"
                    />
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    onClick={handleFilter}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default JobFilter;
