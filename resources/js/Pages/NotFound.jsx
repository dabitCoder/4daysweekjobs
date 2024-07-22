import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function NotFound({ auth, isLoggedIn }) {
    const metaDescription = "Page not found. Explore 4-day work week tech jobs on our main page.";
    const canonicalUrl = "https://4daystechjobs.com/404";

    return (
        <>
            <Head>
                <title>404 - Page Not Found | 4-Day Work Week Tech Jobs</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="robots" content="noindex,follow" />
            </Head>
            <Header user={auth.user} isLoggedIn={isLoggedIn} />
            <main>
                <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white pb-20 pt-20">
                    <div className="container max-w-5xl px-6 text-center">
                        <h1 className="text-5xl font-bold mb-2">
                            404 - Page Not Found
                        </h1>
                        <p className="text-2xl mb-8">
                            Oops! The page you're looking for doesn't exist.
                        </p>
                        <Link
                            href="/"
                            className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white hover:shadow"
                            aria-label="Return to Home"
                        >
                            <FontAwesomeIcon icon={faHome} />
                            <span className="ml-3">Return to Home</span>
                        </Link>
                    </div>
                </section>
                <section className="py-12 bg-gray-50">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-700">
                            Looking for 4-Day Work Week Tech Jobs?
                        </h2>
                        <p className="text-xl mb-8 text-gray-600">
                            Explore our main page to find the latest opportunities in companies
                            pioneering the 4-day work week.
                        </p>
                        <Link
                            href="/"
                            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 hover:shadow"
                        >
                            Explore Jobs
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
