import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@/Components/Dropdown.jsx";

const Header = ({ isLoggedIn, user }) => {
	const [showPostJobButton, setShowPostJobButton] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowPostJobButton(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="fixed w-full bg-gradient-to-r from-blue-500 to-blue-600 z-40 ">
			<div className="container mx-auto px-4 sm:px-6 flex justify-between items-center py-4">
				<Link
					href="/"
					className="text-xl sm:text-3xl font-bold text-white hover:text-gray-200 transition-colors"
				>
					4 Days Week Tech Jobs
				</Link>
				<div className="flex items-center space-x-4">
					<div
						className={`transition-opacity duration-500 ${
							showPostJobButton ? "opacity-100" : "opacity-0"
						} hidden sm:block`}
					>
						<Link
							href="/post-job"
							className="bg-white text-blue-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg transition-transform transform hover:scale-105 flex items-center space-x-2 font-semibold text-sm sm:text-base"
						>
							<FontAwesomeIcon icon={faBriefcase} />
							<span className="hidden sm:inline">Post a Job</span>
						</Link>
					</div>
					<div className="hidden sm:flex items-center space-x-4">
						{isLoggedIn ? (
							<Dropdown>
								<Dropdown.Trigger>
									<span className="inline-flex rounded-md">
										<button
											type="button"
											className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
										>
											{user.name}
											<svg
												className="ml-2 -mr-0.5 h-4 w-4"
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
									<Dropdown.Link href={route("dashboard")}>
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
						) : (
							<>
								<Link
									href="/login"
									className="text-white hover:text-gray-200 transition-colors"
								>
									Login
								</Link>
								<Link
									href="/register"
									className="text-white hover:text-gray-200 transition-colors"
								>
									Signup
								</Link>
							</>
						)}
					</div>
					<button
						aria-label="MobileMenuOpen"
						className="sm:hidden text-white"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<FontAwesomeIcon icon={faBars} size="lg" />
					</button>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className="sm:hidden bg-blue-600 py-2">
					<div className="container mx-auto px-4">
						<Link
							href="/post-job"
							className="block bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white text-center mb-2 transition-colors"
						>
							Post a Job
						</Link>
						{isLoggedIn ? (
							<>
								<Link
									href={route("profile.edit")}
									className="block text-white py-2 transition-colors hover:text-gray-200"
								>
									Profile
								</Link>
								<Link
									href={route("logout")}
									method="post"
									as="button"
									className="block text-white py-2 w-full text-left transition-colors hover:text-gray-200"
								>
									Log Out
								</Link>
							</>
						) : (
							<>
								<Link
									href="/login"
									className="block text-white py-2 transition-colors hover:text-gray-200"
								>
									Login
								</Link>
								<Link
									href="/register"
									className="block text-white py-2 transition-colors hover:text-gray-200"
								>
									Signup
								</Link>
							</>
						)}
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
