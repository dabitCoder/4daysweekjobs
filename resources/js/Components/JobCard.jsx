import React from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const JobCard = ({ post }) => {
    const handleClickApply = () => {
        window.open(post.apply_url, '_blank')
    }

    return <div className="flex items-center bg-white p-6 rounded-lg hover:border-gray-300 mt-3 mb-3 border-2 border-gray-100">
        <img
            src="https://via.placeholder.com/50"
            alt="Company Logo"
            className="rounded-full w-12 h-12 mr-4"
        />
        <div className="flex-grow">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <p className="text-sm text-gray-600">{post.role}</p>
                    <h3 className="text-xl font-semibold text-gray-600">{post.title}</h3>
                    <p className="text-gray-600">{post?.salary_range}</p>
                </div>
                <div className="flex items-center text-gray-600 space-x-4">
                   <span className="flex items-center">
						<svg
                            className="w-5 h-5 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
							<path
                                d="M12 2C8.134 2 5 5.134 5 9c0 7.498 7 13 7 13s7-5.502 7-13c0-3.866-3.134-7-7-7zm0 11c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z"/>
						</svg>
                       {post.modality}
					</span>
                    <PrimaryButton onClick={handleClickApply}>Apply URL</PrimaryButton>
                </div>
            </div>
        </div>
    </div>
}

export default JobCard;
