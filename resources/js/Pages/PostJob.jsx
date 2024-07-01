import { Head, useForm } from "@inertiajs/react";
import React from "react";
import JobCard from "@/Components/JobCard.jsx";
import Signup from "@/Pages/Signup.jsx";
import Header from "@/Components/Header.jsx";
const JobPosting = ({ isLoggedIn, user }) => {
	const { data, setData, post, processing, errors } = useForm({
		title: "",
		modality: "remote",
		salary_range: "",
		location: "",
		apply_url: "",
		company_name: "",
		company_logo: "",
		username: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	const handleChangeInput = (field, value) => {
		setData({ ...data, [field]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		post(route("jobs.store"));
	};

    console.log(errors)

	return (
		<>
			<Head title="4 days week jobs - Post job" />
			<Header isLoggedIn={isLoggedIn} user={user} />
			<section className="py-12 bg-gray-100 min-h-screen">
				<div className="container mx-auto px-6">
					<h2 className="text-5xl font-bold mb-6 text-gray-800 text-center">
						Post a Job
					</h2>
					<div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
						<form
							encType="multipart/form-data"
							method="post"
							onSubmit={onSubmit}
						>
							<div className="mb-4">
								<label
									htmlFor="title"
									className="block text-gray-700 font-bold mb-2"
								>
									Title <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="title"
									name="title"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
									required
									onChange={(e) => handleChangeInput("title", e.target.value)}
									placeholder="Frontend Developer with React"
								/>
								{errors.title ? (
									<span className="text-red-600">{errors.title}</span>
								) : null}
							</div>
							<div className="mb-4">
								<label
									htmlFor="apply_url"
									className="block text-gray-700 font-bold mb-2"
								>
									Apply URL<span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									id="apply_url"
									name="apply_url"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
									required
									onChange={(e) =>
										handleChangeInput("apply_url", e.target.value)
									}
								/>
								{errors.apply_url ? (
									<span className="text-red-600">{errors.apply_url}</span>
								) : null}
							</div>
							<div className="mb-4">
								<label
									htmlFor="modality"
									className="block text-gray-700 font-bold mb-2"
								>
									{" "}
									Modality
								</label>
								<select
									onChange={(e) =>
										handleChangeInput("modality", e.target.value)
									}
									id="modality"
									name="modality"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
								>
									<option value="remote">Remote</option>
									<option value="hybrid">Hybrid</option>
									<option value="office">Office</option>
								</select>
								{errors.modality ? (
									<span className="text-red-600">{errors.modality}</span>
								) : null}
							</div>
							<div className="mb-4">
								<label
									htmlFor="location"
									className="block text-gray-700 font-bold mb-2"
								>
									Location
								</label>
								<input
									type="text"
									id="location"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
									placeholder="New York City, USA"
									onChange={(e) =>
										handleChangeInput("location", e.target.value)
									}
								/>
								{errors.location ? (
									<span className="text-red-600">{errors.location}</span>
								) : null}
							</div>

							<div className="mb-4">
								<label
									htmlFor="salary_range"
									className="block text-gray-700 font-bold mb-2"
								>
									Salary Range
								</label>
								<input
									type="text"
									id="salary_range"
									className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
									placeholder="$100.000-$200.000, 50.000€-70.000€"
									onChange={(e) =>
										handleChangeInput("salary_range", e.target.value)
									}
								/>
							</div>
							<div className="mb-4 flex space-x-4">
								<div className="w-1/2">
									<label
										htmlFor="company_name"
										className="block text-gray-700 font-bold mb-2"
									>
										Company Name
									</label>
									<input
										type="text"
										id="company_name"
										name="company_name"
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
										required
										onChange={(e) =>
											handleChangeInput("company_name", e.target.value)
										}
									/>
									{errors.company_name ? (
										<span className="text-red-600">{errors.company_name}</span>
									) : null}
								</div>
								<div className="w-1/2">
									<label
										htmlFor="company_logo"
										className="block text-gray-700 font-bold mb-2"
									>
										Company Logo
									</label>
									<input
										type="file"
										id="company_logo"
										name="company_logo"
										onChange={(event) =>
											handleChangeInput("company_logo", event.target.files[0])
										}
										className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
									/>
									{errors.company_logo ? (
										<span className="text-red-600">{errors.company_logo}</span>
									) : null}
								</div>
							</div>
							{!isLoggedIn ? (
								<Signup errors={errors} handleChangeInput={handleChangeInput} />
							) : null}
							<div>
								<span>Here's how your post is going to look</span>
								<JobCard post={data} />
							</div>
							<div className="text-center">
								<button
									type="submit"
									onClick={onSubmit}
									disabled={processing}
									className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
								>
									Checkout + Post Job
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default JobPosting;
