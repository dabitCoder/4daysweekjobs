import { Head, useForm, Link, usePage } from "@inertiajs/react";
const JobPosting = ({isLoggedIn}) => {
    console.log(isLoggedIn)
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    modality: 'remote',
    role: '',
    salary_range: '0$',
    apply_url: '',
    company_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChangeInput = (field, value) => {
    setData({ ...data, [field]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    post(route('jobs.store'))
  };

  return (
    <>
      <Head title="4 days week jobs - Post job" />
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
                <form encType="multipart/form-data" method="post" onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title <span className="text-red-500">*</span></label>
                        <input type="text"
                            id="title" name="title"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                            onChange={e => handleChangeInput('title', e.target.value)}
                            placeholder="Frontend Developer with React" />
                        {errors.title ? <span className="text-red-600">{errors.title}</span> : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="apply_url" className="block text-gray-700 font-bold mb-2">Apply URL<span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="apply_url"
                            name="apply_url"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                            onChange={e => handleChangeInput('apply_url', e.target.value)}
                        />
                        {errors.apply_url ? <span className="text-red-600">{errors.apply_url}</span> : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role<span className="text-red-500">*</span></label>
                        <input type="text"
                            id="role" name="role"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            required
                            onChange={e => handleChangeInput('role', e.target.value)}
                            placeholder="Lead Developer" />
                        {errors.role ? <span className="text-red-600">{errors.role}</span> : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="modality" className="block text-gray-700 font-bold mb-2"> Modality</label>
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
                        {errors.modality ? <span className="text-red-600">{errors.modality}</span> : null}
                    </div>

                    <div className="mb-4">
                            <label htmlFor="salary_range" className="block text-gray-700 font-bold mb-2">Salary Range</label>
                            <input type="text"
                                   id="salary_range"
                                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                   placeholder="$100.000-$200.000, 50.000€-70.000€"
                                   onChange={e => handleChangeInput('salary_range', e.target.value)}/>
                    </div>
                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="company_name" className="block text-gray-700 font-bold mb-2">Company Name</label>
                            <input
                                type="text"
                                id="company_name"
                                name="company_name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                                onChange={e => handleChangeInput('company_name', e.target.value)}
                            />
                            {errors.company_name ? <span className="text-red-600">{errors.company_name}</span> : null}
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="logo" className="block text-gray-700 font-bold mb-2">Company Logo</label>
                            <input type="file" id="logo" name="logo"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>
                    {!isLoggedIn ?
                        <div className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Register Your Profile</h3>
                            <p className="text-sm text-gray-600 mb-4">This is required to edit your posts. We will not use your email to send you spam.</p>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email<span className="text-red-500">*</span></label>
                                <input type="email"
                                       id="email" name="email"
                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                       required
                                       onChange={e => handleChangeInput('email', e.target.value)}
                                       placeholder="Email" />
                                       {errors.email ? <span className="text-red-600">{errors.email}</span> : null}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username<span className="text-red-500">*</span></label>
                                <input type="text"
                                       id="username" name="username"
                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                       required
                                       onChange={e => handleChangeInput('username', e.target.value)}
                                       placeholder="Username" />
                                       {errors.username ? <span className="text-red-600">{errors.username}</span> : null}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password<span className="text-red-500">*</span></label>
                                <input type="password"
                                       id="password" name="password"
                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                       required
                                       onChange={e => handleChangeInput('password', e.target.value)}
                                       placeholder="Password" />
                                       {errors.password ? <span className="text-red-600">{errors.password}</span> : null}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password_confirmation" className="block text-gray-700 font-bold mb-2">Password<span className="text-red-500">*</span></label>
                                <input type="password"
                                       id="password_confirmation" name="password_confirmation"
                                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                       required
                                       onChange={e => handleChangeInput('password_confirmation', e.target.value)}
                                       placeholder="Repeat your password   " />
                                       {errors.password ? <span className="text-red-600">{errors.password}</span> : null}
                            </div>
                        </div> : null}

                    <div className="text-center">
                        <button
                            type="submit"
                            onClick={onSubmit}
                            disabled={processing}
                            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Post Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</>
);
}

export default JobPosting;
