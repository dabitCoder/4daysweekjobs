import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const JobCard = ({ post }) => {
	const handleClickApply = () => {
		window.open(post.apply_url, "_blank");
	};


	return (
		<div className="relative flex items-center bg-white p-6 rounded-lg hover:border-gray-300 mt-3 mb-3 border-2 border-gray-100 group">
			{post.imageBase64 ? (
				<img
					src={`data:image/jpeg;base64,${post.imageBase64}`}
					alt="Company Logo"
					className="rounded-full w-20 h-20 mr-4 object-cover"
				/>
			) : null}
			<div className="flex-grow">
				<div className="flex justify-between items-center mb-2">
					<div>
						<p className="text-sm text-gray-600">{post?.company?.name}</p>
						<h3 className="text-xl font-semibold text-gray-600">
							{post.title}
						</h3>
						<div className="inline-flex">
							<div className="mt-2">
									<span className="inline-block bg-indigo-50 text-gray-800 text-xs px-2 py-1 rounded-full">
										{post?.salary_range}
									</span>

							</div>
                            {post?.location ?
                            <div className="mt-2 ml-2">
								<span className="inline-block bg-[#00416A]/10 text-gray-800 text-xs px-2 py-1 rounded-full">
									<span>{post?.location}</span>
								</span>
							</div> : null }
                            {post.modality ?
                            <div className="mt-2 ml-2">
                                <span
                                    className="inline-block bg-[#00416A]/20 text-gray-800 text-xs px-2 py-1 rounded-full">
                                    <span>{post.modality}</span>
                                </span>
                            </div> : null}
                        </div>
                    </div>
                    <div className="flex items-center text-gray-600 space-x-4 ">
                        <button
							onClick={handleClickApply}
							className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
