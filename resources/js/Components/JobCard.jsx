import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faMoneyBillWave, faMapMarkerAlt, faLaptopHouse, faBuilding } from '@fortawesome/free-solid-svg-icons';

dayjs.extend(relativeTime);

const JobCard = ({ post }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClickApply = () => {
        window.open(post.apply_url, "_blank");
    };

    const daysSincePosted = dayjs().to(dayjs(post.created_at));

    return (
        <div
            className="relative flex items-center bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 mt-3 mb-3 border border-gray-200 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {post.imageBase64 ? (
                <img
                    src={`data:image/jpeg;base64,${post.imageBase64}`}
                    alt="Company Logo"
                    className="rounded-full w-16 h-16 mr-4 object-cover"
                    title={`${post.company.name} logo`}
                />
            ) : (
                <div className="rounded-full w-16 h-16 mr-4 bg-gray-300 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBuilding} className="text-gray-600 text-2xl" title="No Company Logo" />
                </div>
            )}
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <p className="text-sm text-gray-600">{post?.company?.name}</p>
                        <h3 className="text-xl font-semibold text-gray-800">
                            {post.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row mt-2 space-y-2 sm:space-y-0 sm:space-x-2">
                            {post.salary_range && (
                                <div>
                                    <span className="inline-block bg-[#14B8A6] text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                                        <FontAwesomeIcon icon={faMoneyBillWave} />
                                        <span>{post.salary_range}</span>
                                    </span>
                                </div>
                            )}
                            {post.location && (
                                <div>
                                    <span className="inline-block bg-[#EAB308] text-gray-800 text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <span>{post.location}</span>
                                    </span>
                                </div>
                            )}
                            {post.modality && (
                                <div>
                                    <span className="inline-block bg-[#EC4899] text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                                        <FontAwesomeIcon icon={faLaptopHouse} />
                                        <span>{post.modality}</span>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-4">
                        {isHovered ? (
                            <button
                                onClick={handleClickApply}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-opacity duration-300 flex items-center space-x-2"
                            >
                                <span>Apply</span>
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </button>
                        ) : (
                            <p className="text-sm text-gray-500">{daysSincePosted}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
