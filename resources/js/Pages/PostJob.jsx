import { Head, useForm } from "@inertiajs/react";
import JobCard from "@/Components/JobCard.jsx";
import Signup from "@/Pages/Signup.jsx";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer";
import TechnologySelector from "@/Components/TechnologySelector.jsx";

const JobPosting = ({ isLoggedIn, user, technologies }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        modality: "remote",
        salary_range: "",
        location: "",
        apply_url: "",
        company_name: "",
        company_logo: "",
        username: "",
        four_day_arrangement: "",
        email: "",
        password: "",
        password_confirmation: "",
        technologies: []
    });

    const handleChangeInput = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleTechnologyChange = (selectedIds) => {
        setData({ ...data, technologies: selectedIds });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        post(route("jobs.store"));
    };

    return (
        <>
            <Head>
                <title>Post a 4-Day Week Tech Job | Attract Top Talent | 4daystechjobs</title>
                <meta
                    name="description"
                    content="Advertise your 4-day work week tech jobs on 4daystechjobs. Reach skilled developers and IT professionals seeking better work-life balance. Post your job and find the perfect candidate today!"
                />

                {/* Open Graph tags for social media sharing */}
                <meta
                    property="og:title"
                    content="Post 4-Day Week Tech Jobs | Find Top Talent | 4daystechjobs"
                />
                <meta
                    property="og:description"
                    content="List your 4-day work week tech positions on the leading job board for work-life balance. Attract skilled developers and IT professionals to your innovative company."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://4daystechjobs.com/post-job" />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Post 4-Day Week Tech Jobs | Attract Innovators | 4daystechjobs"
                />
                <meta
                    name="twitter:description"
                    content="Find top tech talent for your 4-day week positions. Post your job on 4daystechjobs and reach professionals seeking work-life balance in tech."
                />
                <meta name="twitter:image" content="https://4daystechjobs.com/twitter-image.jpg" />

                {/* Additional meta tags */}
                <meta
                    name="keywords"
                    content="post tech jobs, 4-day work week, tech recruitment, software developer jobs, IT careers, work-life balance, remote tech jobs"
                />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href="https://4daystechjobs.com/post-job" />

                {/* Structured data for Job Posting */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Post a 4-Day Week Tech Job",
                        "description": "Advertise your 4-day work week tech jobs to attract top talent. Reach developers and tech professionals seeking work-life balance with our specialized job board.",
                        "url": "https://4daystechjobs.com/post-job",
                        "potentialAction": {
                            "@type": "CreateAction",
                            "target": "https://4daystechjobs.com/post-job",
                            "name": "Post a Job"
                        }
                    })}
                </script>
            </Head>
            <Header isLoggedIn={isLoggedIn} user={user} />
            <section className="pt-20 md:pt-28 lg:pt-32 bg-gray-100 min-h-screen pb-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-gray-800 text-center">
                        Post a Job
                    </h1>
                    <p className="text-lg mb-12 text-center text-gray-600">
                        Use the form below to post a new job opening at your
                        company. Please fill out all required fields and provide
                        as much detail as possible to attract the best
                        candidates.
                    </p>
                    <p className="text-lg mb-12 text-center text-gray-600">
                        Post and support will be available for 90 days from payment/posting.
                    </p>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form
                            encType="multipart/form-data"
                            method="post"
                            onSubmit={onSubmit}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField
                                    id="title"
                                    label="Job Title"
                                    required={true}
                                    placeholder="Frontend Developer with React"
                                    value={data.title}
                                    onChange={(e) =>
                                        handleChangeInput(
                                            "title",
                                            e.target.value
                                        )
                                    }
                                    error={errors.title}
                                />

                                <InputField
                                    id="apply_url"
                                    label="Apply URL"
                                    required={true}
                                    placeholder="https://apply.example.com"
                                    value={data.apply_url}
                                    onChange={(e) =>
                                        handleChangeInput(
                                            "apply_url",
                                            e.target.value
                                        )
                                    }
                                    error={errors.apply_url}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="four_day_week_type"
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        4-Day Week Arrangement{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="four_day_week_type"
                                        name="four_day_week_type"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        required
                                        onChange={(e) =>
                                            handleChangeInput(
                                                "four_day_arrangement",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select an option
                                        </option>
                                        <option value="standard">
                                            Standard 4-day week (32 hours, no
                                            salary reduction)
                                        </option>
                                        <option value="compressed">
                                            Compressed 4-day week (40 hours in 4
                                            days)
                                        </option>
                                        <option value="80_percent">
                                            80% time for 80% pay (32 hours,
                                            pro-rata salary)
                                        </option>
                                        <option value="9_day_fortnight">
                                            9-day fortnight (every other Friday
                                            off)
                                        </option>
                                        <option value="flexible">
                                            Flexible 4-day week (employee
                                            chooses their day off)
                                        </option>
                                        <option value="seasonal">
                                            Seasonal 4-day week (e.g., summer
                                            months only)
                                        </option>
                                        <option value="gradual">
                                            Gradual transition to 4-day week
                                        </option>
                                        <option value="trial">
                                            Trial 4-day week (company is testing
                                            the concept)
                                        </option>
                                    </select>
                                    {errors.four_day_arrangement && (
                                        <span className="text-red-600">
                                            {errors.four_day_arrangement}
                                        </span>
                                    )}
                                </div>

                                <InputField
                                    id="salary_range"
                                    label="Salary Range"
                                    placeholder="$100,000-$200,000, 50.000€-70.000€"
                                    value={data.salary_range}
                                    onChange={(e) =>
                                        handleChangeInput(
                                            "salary_range",
                                            e.target.value
                                        )
                                    }
                                    error={errors.salary_range}
                                />
                            </div>
                            <div>
                                <TechnologySelector
                                    value={data.technologies}
                                    technologies={technologies}
                                    onChange={handleTechnologyChange}
                                    error={errors.technologies} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField
                                    id="location"
                                    label="Location"
                                    placeholder="New York City, USA"
                                    value={data.location}
                                    onChange={(e) =>
                                        handleChangeInput(
                                            "location",
                                            e.target.value
                                        )
                                    }
                                    error={errors.location}
                                />

                                <div>
                                    <label
                                        htmlFor="modality"
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        Modality
                                    </label>
                                    <select
                                        id="modality"
                                        name="modality"
                                        value={data.modality}
                                        onChange={(e) =>
                                            handleChangeInput(
                                                "modality",
                                                e.target.value
                                            )
                                        }
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    >
                                        <option value="remote">Remote</option>
                                        <option value="hybrid">Hybrid</option>
                                        <option value="office">Office</option>
                                    </select>
                                    {errors.modality && (
                                        <span className="text-red-600 text-sm">
                                            {errors.modality}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField
                                    id="company_name"
                                    label="Company Name"
                                    required={true}
                                    placeholder="Your awesome company"
                                    value={data.company_name}
                                    onChange={(e) =>
                                        handleChangeInput(
                                            "company_name",
                                            e.target.value
                                        )
                                    }
                                    error={errors.company_name}
                                />

                                <div>
                                    <label
                                        htmlFor="company_logo"
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        Company Logo (will show once published)
                                    </label>
                                    <input
                                        type="file"
                                        id="company_logo"
                                        name="company_logo"
                                        onChange={(event) =>
                                            handleChangeInput(
                                                "company_logo",
                                                event.target.files[0]
                                            )
                                        }
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    {errors.company_logo && (
                                        <span className="text-red-600 text-sm">
                                            {errors.company_logo}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {!isLoggedIn && (
                                <Signup
                                    errors={errors}
                                    handleChangeInput={handleChangeInput}
                                />
                            )}

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-2">
                                    Preview:
                                </h3>
                                <JobCard post={data} technologies={technologies}/>
                            </div>

                            <div className="text-center mt-8">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-auto"
                                >
                                    {processing
                                        ? "Processing..."
                                        : "Checkout + Post Job"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const InputField = ({
    id,
    label,
    required,
    placeholder,
    value,
    onChange,
    error,
    className = "",
}) => (
    <div className={className}>
        <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required={required}
        />
        {error && <span className="text-red-600 text-sm">{error}</span>}
    </div>
);

export default JobPosting;
