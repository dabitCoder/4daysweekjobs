import React from "react";
import { Head, Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown.jsx";
import JobCard from "@/Components/JobCard.jsx";
import Header from "@/Components/Header.jsx";

export default function Index({ auth, posts, isLoggedIn }) {
	return (
		<>
			<Head title="4 days week jobs" />
			<Header user={auth.user} isLoggedIn={isLoggedIn} />
			<section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white pb-20 pt-20">
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
					<h2 className="text-3xl font-bold mb-6 text-gray-700">
						{posts.data.length ? "Latest Jobs" : "No jobs were found"}
					</h2>
					<div className="flex flex-col min-h-screen">
						{posts.data.map((post) => (
							<JobCard key={post.id} post={post} />
						))}
					</div>
					<div className="flex items-center justify-between mt-6">
						<span>
							Showing page {posts.current_page} of {posts.last_page}
						</span>
						<div className="flex space-x-4">
							{posts.prev_page_url && (
								<button
									className="px-4 py-2 rounded bg-white text-blue-500"
									onClick={() => (window.location.href = posts.prev_page_url)}
								>
									Previous page
								</button>
							)}
							{posts.next_page_url && (
								<button
									className="px-4 py-2 rounded bg-white text-blue-500"
									onClick={() => (window.location.href = posts.next_page_url)}
								>
									Next page
								</button>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
