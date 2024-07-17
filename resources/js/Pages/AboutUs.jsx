import { Head } from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

export default function AboutUs({ auth, isLoggedIn }) {
    const metaDescription =
        "Learn about 4-Day Work Week Tech Jobs. Discover our mission to revolutionize the tech industry with better work-life balance through 4-day work weeks.";
    const canonicalUrl = "https://4daystechjobs.com/about";
    const siteUrl = "https://4daystechjobs.com";

    return (
        <>
            <Head>
                <title>
                    About 4-Day Work Week Tech Jobs | Our Mission and Vision
                </title>
                <meta name="description" content={metaDescription} />
                <meta
                    name="keywords"
                    content="4-day work week, tech jobs, work-life balance, company mission, tech industry revolution"
                />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph tags */}
                <meta
                    property="og:title"
                    content="About 4-Day Work Week Tech Jobs | Our Mission and Vision"
                />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta
                    property="og:image"
                    content={`${siteUrl}/og-image-about.jpg`}
                />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="About 4-Day Work Week Tech Jobs | Our Mission and Vision"
                />
                <meta name="twitter:description" content={metaDescription} />
                <meta
                    name="twitter:image"
                    content={`${siteUrl}/twitter-image-about.jpg`}
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
                <meta name="author" content="4 Days Tech Jobs" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "4-Day Work Week Tech Jobs",
                        url: siteUrl,
                        logo: `${siteUrl}/logo.png`,
                        description: metaDescription,
                    })}
                </script>
            </Head>
            <Header user={auth.user} isLoggedIn={isLoggedIn} />
            <main className="bg-gray-50 py-24">
                <div className="container max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        About 4-Day Work Week Tech Jobs
                    </h1>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 mb-4">
                            At 4-Day Work Week Tech Jobs, we're on a mission to
                            revolutionize the tech industry by promoting a
                            healthier work-life balance. We believe that a 4-day
                            work week can lead to increased productivity,
                            improved employee satisfaction, and better overall
                            quality of life.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Our platform connects forward-thinking tech
                            companies offering 4-day work weeks with talented
                            professionals seeking a better balance between their
                            careers and personal lives.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Why 4-Day Work Weeks?
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Improved work-life balance</li>
                            <li>Increased productivity and focus</li>
                            <li>Reduced burnout and stress</li>
                            <li>Greater job satisfaction</li>
                            <li>More time for personal growth and family</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Our Story
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2023, 4-Day Work Week Tech Jobs was born
                            from the realization that the traditional 5-day work
                            week was no longer serving the best interests of
                            tech professionals or companies. We saw an
                            opportunity to create a platform that would champion
                            a new way of working.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Join the Movement
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Whether you're a job seeker looking for a better
                            work-life balance or a company ready to embrace the
                            future of work, we invite you to join our growing
                            community. Together, we can reshape the tech
                            industry and create a more balanced, productive, and
                            fulfilling work environment for all.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
