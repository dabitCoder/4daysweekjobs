import React from "react";

const Signup = ({ handleChangeInput, errors }) => (
	<div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-blue-60 border  rounded-lg shadow-sm">
		<h3 className="text-2xl font-semibold text-blue-700 mb-4">Sign Up</h3>
		<p className="text-sm text-gray-600 mb-4">
			This is required to edit your posts, if necessary. We will not use your
			email to send you spam.
		</p>
		<div className="mb-4">
			<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
				Email<span className="text-red-500">*</span>
			</label>
			<input
				type="email"
				id="email"
				name="email"
				className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
				required
				onChange={(e) => handleChangeInput("email", e.target.value)}
				placeholder="Email"
			/>
			{errors.email ? (
				<span className="text-red-600">{errors.email}</span>
			) : null}
		</div>
		<div className="mb-4">
			<label htmlFor="username" className="block text-gray-700 font-bold mb-2">
				Username<span className="text-red-500">*</span>
			</label>
			<input
				type="text"
				id="username"
				name="username"
				className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
				required
				onChange={(e) => handleChangeInput("username", e.target.value)}
				placeholder="Username"
			/>
			{errors.username ? (
				<span className="text-red-600">{errors.username}</span>
			) : null}
		</div>
        <div className="flex !flex-row">
            <div className="mb-4 flex-1">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password<span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                    onChange={(e) => handleChangeInput("password", e.target.value)}
                    placeholder="Password"
                />
                {errors.password ? (
                    <span className="text-red-600">{errors.password}</span>
                ) : null}
            </div>
            <div className="mb-4 ml-3 flex-1">
                <label
                    htmlFor="password_confirmation"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Repeat password
                    <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                    onChange={(e) =>
                        handleChangeInput("password_confirmation", e.target.value)
                    }
                    placeholder="Password"
                />
                {errors.password ? (
                    <span className="text-red-600">{errors.password}</span>
                ) : null}
            </div>
        </div>
	</div>
);

export default Signup;
