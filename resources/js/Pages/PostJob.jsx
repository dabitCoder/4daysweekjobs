import {Head, useForm, Link} from "@inertiajs/react";
import {useEffect, useState} from "react";

const JobPosting = () => {
    const {data, setData, post, processing, reset, errors} = useForm({
        title: '',
        description: '',
        modality: 'remote',
        industry_id: '',
        role: '',
        apply_url: '',
        min_salary: 10_000,
        max_salary: 10_000,
        company_name: ''
    });

    const [industries, setIndustries] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/industries')
            .then(async response => setIndustries(await response.json()))
            .catch(error => console.log(error))
    }, [fetch, setIndustries])


    const handleChangeInput = (field, value) => {
        setData({...data, [field]: value})
    }

    const generateSalaryOptions = () => {
        const options = [];
        for (let i = 10000; i <= 500000; i += 10000) {
            options.push(
                <option key={i} value={i}>{i.toLocaleString()}</option>
            );
        }
        return options;
    };

    const onSubmit = (e) => {
        e.preventDefault()
        post(route('jobs.store'), {onError: () => console.log(errors)});
    }


    return (
        <>
            <Head title="4 days week jobs - Post job"/>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 flex justify-between items-center py-4">
                    <Link href="/" className="text-3xl font-bold text-blue-600">4 Days Week Jobs</Link>
                    <nav className="space-x-4">
                    </nav>
                    <div className="space-x-4">
                        <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>

                    </div>
                </div>
            </header>
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bold mb-6 text-gray-800 text-center">Post a Job</h2>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <form encType="multipart/form-data">
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title <span
                                    className="text-red-500">*</span></label>
                                <input type="text"
                                       id="title" name="title"
                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                       required
                                       onChange={e => handleChangeInput('title', e.target.value)}
                                       placeholder="Frontend Developer with React"/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description"
                                       className="block text-gray-700 font-bold mb-2">Description<span
                                    className="text-red-500">*</span></label>
                                <textarea id="description" name="description" rows="5"
                                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                          required
                                          placeholder="We are looking for a developer with at least 3 years of React..."
                                          onChange={e => handleChangeInput('description', e.target.value)}

                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role<span
                                    className="text-red-500">*</span></label>
                                <input type="text"
                                       id="role" name="role"
                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                       required
                                       onChange={e => handleChangeInput('role', e.target.value)}
                                       placeholder="Lead Developer"/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="modality"
                                       className="block text-gray-700 font-bold mb-2"> Modality</label>
                                <select
                                    onChange={e => handleChangeInput('modality', e.target.value)}
                                    id="modality"
                                    name="modality"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    <option value="remote">Remote</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="office">Office</option>
                                </select>
                            </div>

                            <div className="mb-4 flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="min_salary" className="block text-gray-700 font-bold mb-2">Min.
                                        Salary</label>
                                    <select onChange={e => handleChangeInput('min_salary', e.target.value)}
                                            id="min_salary" name="min_salary"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {generateSalaryOptions()}
                                    </select>
                                </div>

                                <div className="w-1/2">
                                    <label htmlFor="max_salary" className="block text-gray-700 font-bold mb-2">Max.
                                        Salary</label>
                                    <select id="max_salary"
                                            onChange={e => handleChangeInput('max_salary', e.target.value)}
                                            name="max_salary"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        {generateSalaryOptions()}
                                    </select>
                                </div>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="apply_url" className="block text-gray-700 font-bold mb-2">Apply
                                    URL<span
                                        className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="apply_url"
                                    name="apply_url"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                    onChange={e => handleChangeInput('apply_ulr', e.target.value)}
                                />
                            </div>
                            <div className="mb-4 flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="company_name" className="block text-gray-700 font-bold mb-2">Company
                                        Name</label>
                                    <input
                                        type="text"
                                        id="company_name"
                                        name="company_name"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        required
                                        onChange={e => handleChangeInput('company_name', e.target.value)}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="logo" className="block text-gray-700 font-bold mb-2">Company
                                        Logo</label>
                                    <input type="file" id="logo" name="logo"
                                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit"
                                        onClick={onSubmit}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Post
                                    Job
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobPosting
