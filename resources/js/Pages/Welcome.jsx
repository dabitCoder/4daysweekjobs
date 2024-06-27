import React from "react";
import { Head, Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown.jsx";
import JobCard from "@/Components/JobCard.jsx";

export default function Index({ auth, posts }) {
	return (
		<>
			<Head title="4 days week jobs" />
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-6 flex justify-between items-center py-4">
					<Link href="/" className="text-3xl font-bold text-blue-600">
						4 Days Week Jobs
					</Link>
					<div className="space-x-4">
						{auth?.user ? (
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
											<Dropdown.Link href={route("profile.edit")}>
												Profile
											</Dropdown.Link>
											<Dropdown.Link
												href={route("logout")}
												method="post"
												as="button"
											>
												Log Out
											</Dropdown.Link>
										</Dropdown.Content>
									</Dropdown>
								</div>
							</div>
						) : (
							<Link href="/login" className="text-gray-700 hover:text-blue-600">
								Login
							</Link>
						)}
					</div>
				</div>
			</header>
			<section className="bg-blue-600 text-white py-20">
				<div className="container max-w-5xl px-6 text-center">
					<h1 className="text-5xl font-bold mb-2">Find Your Dream Job</h1>
					<p className="text-2xl mb-8">
						Discover Companies Offering More Free Time and a Better Work-Life
						Balance
					</p>
					<Link
						href="/post-job"
						className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white hover:shadow"
					>
						Post a Job
					</Link>
				</div>
			</section>
			<section id="jobs" className="py-12 bg-gray-50">
				<div className="container max-w-4xl px-6">
					<h2 className="text-3xl font-bold mb-6 text-gray-700">{posts.length ? "Latest Jobs" : 'No jobs were found'} </h2>
					<div className="flex flex-col min-h-screen">
						{posts.map((post) => (
							<JobCard post={post} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
