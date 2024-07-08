import { Head, Link } from "@inertiajs/react";

const PaymentError = () => {
	return (
		<>
			<Head title="4 days week tech jobs - Error listing your job" />
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-6 flex justify-between items-center py-4">
					<Link href="/" className="text-3xl font-bold text-blue-600">
						4 Days Week Tech Jobs
					</Link>
					<nav className="space-x-4"></nav>
					<div className="space-x-4">
						<Link href="/login" className="text-gray-700 hover:text-blue-600">
							Login
						</Link>
					</div>
				</div>
			</header>
			<section className="py-12 bg-gray-50 min-h-screen">
				<div class="container mx-auto px-6">
					<div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
						<h2 class="text-5xl font-bold mb-4 text-gray-800">Oops!</h2>
						<p class="text-xl text-gray-600 mb-8">
							Something went wrong while trying to post your job.
						</p>
						<p class="text-lg text-gray-700 mb-4">
							Please check your information and try again.
						</p>
						<Link
							href="/post-job"
							class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
						>
							Try Again
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default PaymentError;
