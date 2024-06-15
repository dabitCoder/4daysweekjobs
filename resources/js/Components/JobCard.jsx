import React from "react";

const JobCard = ({ job }) => (
	<div className="flex items-center bg-orange-500 p-6 rounded-lg shadow-lg mt-3 mb-3">
		<img
			src="https://via.placeholder.com/50"
			alt="Company Logo"
			className="rounded-full w-12 h-12 mr-4"
		/>
		<div className="flex-grow">
			<div className="flex justify-between items-center mb-2">
				<div>
					<h3 className="text-xl font-bold text-white">
						Interaction Design Foundation (IxDF)
					</h3>
					<p className="text-lg font-semibold text-white">
						Senior PHP Developer (Laravel)
					</p>
					<p className="text-white">30,000 - 70,000 USD</p>
				</div>
				<div className="flex items-center text-white space-x-4">
					<span className="flex items-center">
						<svg
							className="w-5 h-5 mr-1"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 2C8.134 2 5 5.134 5 9c0 7.498 7 13 7 13s7-5.502 7-13c0-3.866-3.134-7-7-7zm0 11c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z" />
						</svg>
						Remote
					</span>
				</div>
			</div>
		</div>
	</div>
);

export default JobCard;
