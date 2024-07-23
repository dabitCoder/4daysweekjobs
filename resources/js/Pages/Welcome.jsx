import { Head, Link } from "@inertiajs/react";
import JobCard from "@/Components/JobCard.jsx";
import Header from "@/Components/Header.jsx";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "@/Components/Footer";

export default function Index({ auth, posts, isLoggedIn }) {
    return (
        <>
            <Head>
                <title>4-Day Work Week Tech Jobs | Find Your Dream Tech Career</title>
                <meta name="description" content="Discover high-paying 4-day work week tech jobs. Browse software engineering, data science, and IT positions offering full salary for 32-hour weeks. Apply now!" />
                <meta name="keywords" content="4-day work week jobs, tech careers, software engineering, data science, IT jobs, work-life balance, remote work" />
                <link rel="canonical" href="https://4daystechjobs.com" />

                {/* Open Graph tags */}
                <meta property="og:title" content="4-Day Work Week Tech Jobs | Top Opportunities in Tech" />
                <meta property="og:description" content="Explore top-tier tech positions with 4-day work weeks. Full salary, better work-life balance, and exciting career growth. Find your next role today!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://4daystechjobs.com" />
                <meta property="og:image" content="https://4daystechjobs.com/og-image.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="4-Day Work Week Tech Jobs | Innovative Careers in Tech" />
                <meta name="twitter:description" content="Land a high-paying tech job with a 4-day work week. Browse opportunities in software development, AI, cybersecurity, and more. Apply now!" />
                <meta name="twitter:image" content="https://4daystechjobs.com/twitter-image.jpg" />

                {/* Additional SEO tags */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <meta name="application-name" content="4 Days Tech Jobs" />
                <meta name="apple-mobile-web-app-title" content="4 Days Tech Jobs" />
                <meta name="author" content="4 Days Tech Jobs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        "name": "4-Day Work Week Tech Jobs",
                        "description": "Discover high-paying tech jobs with 4-day work weeks. Browse software engineering, data science, and IT positions offering full salary for 32-hour weeks.",
                        "url": "https://4daystechjobs.com",
                        "datePosted": new Date().toISOString(),
                        "jobBenefits": "4-day work week, competitive salary, remote work options",
                        "industry": "Information Technology"
                    })}
                </script>
            </Head>
            <Header user={auth.user} isLoggedIn={isLoggedIn} />
            <main>
                <section
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white pb-20 pt-20"
                    role="banner"
                >
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
                            aria-label="Post a Job"
                        >
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span className="ml-3">Post a Job</span>
                        </Link>
                    </div>
                </section>
                <section id="jobs" className="py-12 bg-gray-50">
                    <div className="container max-w-4xl">
                        <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">
                            {posts.data.length ? "Latest Jobs" : <div className="text-center py-12">
                                <img src="/bg-15.png" alt="No jobs available"
                                     className="mx-auto mb-6 w-48"/>
                                <h2 className="text-3xl font-bold mb-4 text-gray-700">No Jobs Posted Yet</h2>
                                <p className="text-xl text-gray-600 mb-6">
                                    We're working hard to bring you the best 4-day work week tech jobs.
                                    Check back soon for exciting opportunities!
                                </p>
                                <p className="text-lg text-gray-600">
                                    Are you an employer offering 4-day work week positions?
                                    <Link href="/post-job" className="text-blue-500 hover:underline ml-2">
                                        Post a job now
                                    </Link>
                                </p>
                            </div>}
                        </h2>
                        <div className="flex flex-col min-h-screen">
                            {posts.data.map((post) => (
                                <JobCard key={post.id} post={post}/>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
