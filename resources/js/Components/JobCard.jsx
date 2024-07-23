import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faLaptopHouse,
	faCalendarAlt,
	faExternalLinkAlt,
	faMoneyBillWave,
    faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const getTechColor = (techName) => {
    const colors = {
        default: { bg: "bg-gray-100", text: "text-gray-700" },
        PHP: { bg: "bg-purple-100", text: "text-purple-700" },
        Laravel: { bg: "bg-indigo-100", text: "text-indigo-700" },
        Codeigniter: { bg: "bg-red-100", text: "text-red-700" },
        "Node.js": { bg: "bg-green-100", text: "text-green-700" },
        "Nest.js": { bg: "bg-teal-100", text: "text-teal-700" },
        "Next.js": { bg: "bg-black", text: "text-white" },
        Angular: { bg: "bg-red-100", text: "text-red-700" },
        React: { bg: "bg-blue-100", text: "text-blue-700" },
        Vue: { bg: "bg-green-100", text: "text-green-700" },
        Go: { bg: "bg-blue-100", text: "text-blue-700" },
        "ASP.Net": { bg: "bg-purple-100", text: "text-purple-700" },
        Python: { bg: "bg-green-100", text: "text-green-700" },
        Django: { bg: "bg-green-100", text: "text-green-700" },
        Symphony: { bg: "bg-blue-100", text: "text-blue-700" },
        C: { bg: "bg-gray-100", text: "text-gray-700" },
        "C++": { bg: "bg-blue-100", text: "text-blue-700" },
        "C#": { bg: "bg-green-100", text: "text-green-700" },
        HTML: { bg: "bg-orange-100", text: "text-orange-700" },
        CSS: { bg: "bg-blue-100", text: "text-blue-700" },
        "Vanilla JS": { bg: "bg-yellow-100", text: "text-yellow-700" },
        Java: { bg: "bg-red-100", text: "text-red-700" },
        Kotlin: { bg: "bg-purple-100", text: "text-purple-700" },
        Elixir: { bg: "bg-purple-100", text: "text-purple-700" },
        Rust: { bg: "bg-orange-100", text: "text-orange-700" },
        Swift: { bg: "bg-orange-100", text: "text-orange-700" },
        "React Native": { bg: "bg-blue-100", text: "text-blue-700" },
        TypeScript: { bg: "bg-blue-100", text: "text-blue-700" },
        Scala: { bg: "bg-red-100", text: "text-red-700" },
        Perl: { bg: "bg-purple-100", text: "text-purple-700" },
        Ruby: { bg: "bg-red-100", text: "text-red-700" },
        "Spring Boot": { bg: "bg-green-100", text: "text-green-700" },
        "Ruby on Rails": { bg: "bg-red-100", text: "text-red-700" },
        Flask: { bg: "bg-black-100", text: "text-black-700" },
        FastAPI: { bg: "bg-blue-100", text: "text-blue-700" },
        Svelte: { bg: "bg-orange-100", text: "text-orange-700" },
        Flutter: { bg: "bg-blue-100", text: "text-blue-700" },
        Bootstrap: { bg: "bg-purple-100", text: "text-purple-700" },
        Tailwind: { bg: "bg-teal-100", text: "text-teal-700" },
        Electron: { bg: "bg-gray-100", text: "text-gray-700" },
        MySQL: { bg: "bg-blue-100", text: "text-blue-700" },
        PostgreSQL: { bg: "bg-blue-100", text: "text-blue-700" },
        MongoDB: { bg: "bg-green-100", text: "text-green-700" },
        Redis: { bg: "bg-red-100", text: "text-red-700" },
        Elasticsearch: { bg: "bg-yellow-100", text: "text-yellow-700" },
        WebAssembly: { bg: "bg-blue-100", text: "text-blue-700" },
        Docker: { bg: "bg-blue-100", text: "text-blue-700" },
        Kubernetes: { bg: "bg-blue-200", text: "text-blue-800" },
    };
    return colors[techName] || colors.default;
};

const JobCard = ({ post, technologies = [] }) => {
    const daysSincePosted = dayjs().to(dayjs(post.created_at));

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: post.title,
        description: post.description,
        datePosted: post.created_at,
        hiringOrganization: {
            "@type": "Organization",
            name: post?.company?.name || post?.company_name,
            sameAs: post.company?.website,
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressCountry: post.location,
            },
        },
        applicantLocationRequirements: {
            "@type": "Country",
            name: post.location || "Remote",
        },
        baseSalary: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: {
                "@type": "QuantitativeValue",
                value: post.salary_range || 0,
                unitText: "YEAR",
            },
        },
        employmentType: post.contract_type,
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 mb-4 hover:-translate-y-1">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                        {post.imageBase64 ? (
                            <img
                                src={`data:image/jpeg;base64,${post.imageBase64}`}
                                alt="Company Logo"
                                className="w-12 h-12 object-cover rounded"
                            />
                        ) : (
                            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded">
                                <span className="text-gray-500 text-xl font-bold">
                                    {post.company?.name?.charAt(0) || "C"}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm text-gray-600">
                            {post.company?.name || post.company_name}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-800">
                            {post.title}
                        </h3>
                        <div className="flex flex-wrap items-center mt-1 text-xs text-gray-500">
                            {post.location && (
                                <span className="mr-3 flex items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                                    {post.location}
                                </span>
                            )}
                            {post.modality && (
                                <span className="mr-3 flex items-center">
                                    <FontAwesomeIcon icon={faLaptopHouse} className="mr-1" />
                                    {post.modality}
                                </span>
                            )}
                            {post.salary_range && (
                                <span className="mr-3 flex items-center">
                                    <FontAwesomeIcon icon={faMoneyBillWave} className="mr-1" />
                                    {post.salary_range}
                                </span>
                            )}
                            {post.contract_type && (
                                <span className="mr-3 flex items-center">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-1" />
                                    {post.contract_type.replace('_', ' ')}
                                </span>
                            )}
                            <span className="flex items-center">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                {daysSincePosted}
                            </span>
                        </div>
                    </div>
                    <div className="ml-4">
                        <button
                            onClick={() => window.open(post.apply_url, "_blank")}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition-colors duration-300 flex items-center"
                        >
                            Apply
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                        </button>
                    </div>
                </div>
                {post.technologies && post.technologies.length > 0 && (
                    <div className="mt-3">
                        {post.technologies.map((tech, index) => {
                            if (tech.id) {
                                const { bg, text } = getTechColor(tech.name);
                                return (
                                    <span
                                        key={index}
                                        className={`inline-flex items-center ${bg} ${text} text-xs px-2 py-1 rounded mr-2 mb-2`}
                                    >
                                        {tech.name}
                                    </span>
                                );
                            } else if (Number(tech)) {
                                const selectedTech = technologies.find(
                                    (technology) => tech === technology.id,
                                );
                                const { bg, text } = getTechColor(selectedTech.name);
                                return (
                                    <span
                                        key={index}
                                        className={`inline-flex items-center ${bg} ${text} text-xs px-2 py-1 rounded mr-2 mb-2`}
                                    >
                                        {selectedTech.name}
                                    </span>
                                );
                            } else return null;
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default JobCard;
