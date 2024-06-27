import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const JobCard = ({ post }) => {
    const handleClickApply = () => {
        window.open(post.apply_url, "_blank");
    };
    console.log(post)
    const dateSincePosted = dayjs(post.created_at).fromNow();

    return (
        <div className="relative flex items-center bg-white p-6 rounded-lg hover:border-gray-300 mt-3 mb-3 border-2 border-gray-100">
            <span className="absolute top-2 right-8 text-gray-500 italic">{dateSincePosted}</span>
            <img
                src="https://via.placeholder.com/50"
                alt="Company Logo"
                className="rounded-full w-12 h-12 mr-4"
            />
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <p className="text-sm text-gray-600">{post.role}</p>
                        <h3 className="text-xl font-semibold text-gray-600">
                            {post.title}
                        </h3>
                        <p className="text-gray-600">{post?.salary_range}</p>
                        <div className="flex flex-row text-gray-600 text-sm">
                            <span className="flex items-center text-sm">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 2C8.134 2 5 5.134 5 9c0 7.498 7 13 7 13s7-5.502 7-13c0-3.866-3.134-7-7-7zm0 11c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z"
                                    />
                                </svg>
                                {post.modality}
                            </span>
                            <span className="ml-2">{post?.location}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-4">
                        <button
                            onClick={handleClickApply}
                            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Apply URL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
