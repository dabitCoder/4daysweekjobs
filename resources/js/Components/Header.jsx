import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown.jsx";
import React from "react";

const Header = ({ isLoggedIn, user }) => (
	<header className="bg-white shadow-md">
		<div className="container mx-auto px-6 flex justify-between items-center py-4">
			<Link href="/" className="text-3xl font-bold text-blue-600">
				4 Days Week Jobs
			</Link>
			<nav className="space-x-4"></nav>
			<div className="space-x-4">
				{isLoggedIn ? (
					<div className="hidden sm:flex sm:items-center sm:ms-6">
						<div className="ms-3 relative">
							<Dropdown>
								<Dropdown.Trigger>
									<span className="inline-flex rounded-md">
										<button
											type="button"
											className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
										>
											{user.name}

											<svg
												className="ms-2 -me-0.5 h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										</button>
									</span>
								</Dropdown.Trigger>

								<Dropdown.Content>
									<Dropdown.Link href={route("profile.edit")}>
										Profile
									</Dropdown.Link>
									<Dropdown.Link
										href={route("logout")}
										method="post"
										as="button"
									>
										Log Out
									</Dropdown.Link>
								</Dropdown.Content>
							</Dropdown>
						</div>
					</div>
				) : (
					<Link href="/login" className="text-gray-700 hover:text-blue-600">
						Login
					</Link>
				)}
			</div>
		</div>
	</header>
);

export default Header;
