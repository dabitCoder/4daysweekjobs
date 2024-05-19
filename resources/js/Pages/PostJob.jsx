import {Head} from "@inertiajs/react";

const JobPosting = ()  => {
    return (
        <>
            <Head title="4 days week jobs - Post job" />
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Post a Job</h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <form action="#" method="POST" enctype="multipart/form-data">
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Job Title</label>
                                <input type="text" id="title" name="title" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required placeholder="Frontend Developer with React"/>
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Job Description</label>
                                <textarea id="description" name="description" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required
                                    placeholder="We are looking for a developer with at least 3 years of React..."
                                ></textarea>
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
                                <select id="type" name="type" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required>
                                    <option value="remote">Remote</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="office">Office</option>
                                </select>
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
                                <input type="text" id="location" name="location" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
                            </div>
        
                            <div className="mb-4">
                                <label htmlFor="min_salary" className="block text-gray-700 font-bold mb-2">Min. Salary</label>
                                <input type="text" id="salary" name="min_salary" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="max_salary" className="block text-gray-700 font-bold mb-2">Max. Salary</label>
                                <input type="text" id="salary" name="max_salary" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
                            </div>
                            
                            <div className="mb-4 flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="company_name" className="block text-gray-700 font-bold mb-2">Company Name</label>
                                    <input type="text" id="company_name" name="company_name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required/>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="logo" className="block text-gray-700 font-bold mb-2">Company Logo</label>
                                    <input type="file" id="logo" name="logo" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Post Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobPosting
