import React from "react";
import { Head, Link } from "@inertiajs/react";
import JobCard from "@/Components/JobCard.jsx";
import Header from "@/Components/Header.jsx";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/Components/Footer";

export default function Index({ auth, posts, isLoggedIn }) {
    const metaDescription =
        "Discover 4-day work week tech jobs. Explore career opportunities with extended weekends at innovative companies. Find work-life balance in the tech industry.";
    const canonicalUrl = "https://4daystechjobs.com";
    const description =
        "Elevate your work-life balance with a 4-day work week in tech. Find remote jobs worldwide offering full pay for 32-hour weeks. Join the future of work today!";
    const siteUrl = canonicalUrl;

    return (
        <>
            <Head>
                <title>
                    4-Day Work Week Tech Jobs | Find Balance in Your Career
                </title>
                <meta name="description" content={metaDescription} />
                <meta
                    name="keywords"
                    content="4-day work week, tech jobs, work-life balance, software engineering, IT careers, flexible work, 32-hour week"
                />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph tags */}
                <meta
                    property="og:title"
                    content="4-Day Work Week Tech Jobs | Find Balance in Your Career"
                />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta
                    property="og:image"
                    content={`${canonicalUrl}/og-image.jpg`}
                />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="4-Day Work Week Tech Jobs | Find Balance in Your Career"
                />
                <meta name="twitter:description" content={metaDescription} />
                <meta
                    name="twitter:image"
                    content={`${canonicalUrl}/twitter-image.jpg`}
                />

                {/* Additional SEO tags */}
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <meta name="application-name" content="4-Day Week Tech Jobs" />
                <meta
                    name="apple-mobile-web-app-title"
                    content="4-Day Week Tech Jobs"
                />
                <meta name="author" content="Your Company Name" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        name: "4 Day Work Week Tech Jobs",
                        description: description,
                        datePosted: new Date().toISOString(),
                        employmentType: "FULL_TIME",
                        jobLocationType: "TELECOMMUTE",
                        hiringOrganization: {
                            "@type": "Organization",
                            name: "YourSite.io",
                            sameAs: siteUrl,
                        },
                        jobBenefits: "4 day work week, Full pay for 32 hours",
                        workHours: "32 hours per week",
                    })}
                </script>
            </Head>
            <Header user={auth.user} isLoggedIn={isLoggedIn} />
            <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white pb-20 pt-20">
                <div className="container max-w-5xl px-6 text-center">
                    <h1 className="text-5xl font-bold mb-2">
                        Tech Careers with 3-Day Weekends
                </h1>
                    <p className="text-2xl mb-8">
                        Explore Jobs at Companies Pioneering the 4-Day Work Week
                    </p>
                    <Link
                        href="/post-job"
                        className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white hover:shadow"
                    >
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span className="ml-3">Post a Job</span>
                    </Link>
                </div>
            </section>
            <section id="jobs" className="py-12 bg-gray-50">
                <div className="container max-w-4xl ">
                    <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">
                        {posts.data.length ? "Latest Jobs" : "No jobs found"}
                    </h2>
                    <div className="flex flex-col min-h-screen">
                        {posts.data.map((post) => (
                            <JobCard key={post.id} post={post} />
                        ))}
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <span>
                            Showing page {posts.current_page} of{" "}
                            {posts.last_page}
                        </span>
                        <div className="flex space-x-4">
                            {posts.prev_page_url && (
                                <button
                                    className="px-4 py-2 rounded bg-white text-blue-500"
                                    onClick={() =>
                                        (window.location.href =
                                            posts.prev_page_url)
                                    }
                                >
                                    Previous page
                                </button>
                            )}
                            {posts.next_page_url && (
                                <button
                                    className="px-4 py-2 rounded bg-white text-blue-500"
                                    onClick={() =>
                                        (window.location.href =
                                            posts.next_page_url)
                                    }
                                >
                                    Next page
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
