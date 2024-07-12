import React from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-700 py-8">
            <div className="container max-w-5xl mx-auto px-6">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">
                            4-Day Week Tech Jobs
                        </h3>
                        <p className="text-sm">
                            Find your perfect work-life balance in tech.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">
                            Quick Links
                        </h3>
                        <ul className="text-sm">
                            <li className="mb-1">
                                <Link href="/" className="hover:text-blue-500">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link
                                    href="/about"
                                    className="hover:text-blue-500"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link
                                    href="/post-job"
                                    className="hover:text-blue-500"
                                >
                                    Post a Job
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-2">
                            Contact Us
                        </h3>
                        <ul className="text-sm">
                            <li className="mb-1">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="mr-2"
                                />
                                <a
                                    href="mailto:4daystechjobs@gmail.com"
                                    className="hover:text-blue-500"
                                >
                                    4daystechjobs@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-300 flex flex-wrap justify-between items-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} 4-Day Week Tech Jobs.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
