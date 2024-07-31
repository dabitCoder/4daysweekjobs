import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "@/Components/Header.jsx";

const PaymentSuccess = ({ isLoggedIn, user }) => (
	<>
		<Head title="4 days week tech jobs - Success!" />
		<Header isLoggedIn={isLoggedIn} user={user} />
		<section className="py-12 bg-gray-50 min-h-screen flex items-center justify-center">
			<div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
				<FontAwesomeIcon
					icon={faCheckCircle}
					className="text-green-500 text-6xl mb-4"
				/>
				<h2 className="text-5xl font-bold mb-4 text-gray-800">Success!</h2>
				<p className="text-xl text-gray-600 mb-8">
					Your job has been added to the system and we will proceed with the review.
                    We will let you know when the post is available or if some information has to be changed.
                    Thank you!
				</p>
				<Link
					href="/post-job"
					className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
				>
					Post Another Job
				</Link>
			</div>
		</section>
	</>
);

export default PaymentSuccess;
