import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Footer from "@/Components/Footer";
import { Transition } from "@headlessui/react";
import TechnologySelector from "@/Components/TechnologySelector.jsx";
import {getTechColor} from "@/getTechColor.js";

export default function JobDetails({ auth, job, technologies }) {
	const [isEditing, setIsEditing] = useState(false);

	const { data, setData, put, processing, errors, reset } = useForm({
		title: job.title,
		modality: job.modality,
		salary_range: job.salary_range,
		location: job.location,
		apply_url: job.apply_url,
		company_name: job.company.name,
		four_day_arrangement: job.four_day_arrangement,
		technologies: job.technologies
			? job.technologies.map((tech) => tech.id)
			: [],
        contract_type: job.contract_type,

    });

	const handleChangeInput = (field, value) => {
		setData({ ...data, [field]: value });
	};

	const handleTechnologyChange = (selectedIds) => {
		setData({ ...data, technologies: selectedIds });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		put(route("jobs.update", job.job_uuid), {
			preserveState: true,
			preserveScroll: true,
			onSuccess: () => {
				setIsEditing(false);
				reset();
			},
		});
	};

	const renderJobDetails = () => (
		<div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
			<h2 className="text-3xl font-bold mb-6 text-gray-800">{job.title}</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<InfoItem label="Company" value={job.company.name} />
				<InfoItem label="Modality" value={job.modality} />
				<InfoItem label="Location" value={job.location} />
				<InfoItem label="Salary Range" value={job.salary_range} />
				<InfoItem
					label="Apply URL"
					value={
						<a
							href={job.apply_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-800 underline"
						>
							{job.apply_url}
						</a>
					}
				/>
				<InfoItem label="4-Day Arrangement" value={job.four_day_arrangement} />
                <InfoItem label="Contract Type" value={job.contract_type} />
            </div>

			<div className="mt-6">
				{job.technologies && job.technologies.length ? (
					<div className="flex flex-wrap gap-2 mt-4">
						{job.technologies.map((tech) => {
							const { bg, text } = getTechColor(tech.name);
							return (
								<span
									key={job.id}
									className={`inline-flex items-center ${bg} ${text} text-xs px-2 py-1 rounded mr-2 mb-2`}
								>
									{tech.name}
								</span>
							);
						})}
					</div>
				) : (
					<p className="text-gray-500 mt-4">No technologies selected.</p>
				)}
			</div>

			<PrimaryButton onClick={() => setIsEditing(true)} className="mt-8">
				Edit Job
			</PrimaryButton>
		</div>
	);

	const renderEditForm = () => (
		<form
			onSubmit={onSubmit}
			className="bg-white p-8 rounded-lg shadow-lg space-y-6"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<InputField
					id="title"
					label="Job Title"
					required={true}
					value={data.title}
					onChange={(e) => handleChangeInput("title", e.target.value)}
					error={errors.title}
				/>

				<InputField
					id="company_name"
					label="Company Name"
					required={true}
					value={data.company_name}
					onChange={(e) => handleChangeInput("company_name", e.target.value)}
					error={errors.company_name}
				/>

				<SelectField
					id="modality"
					label="Modality"
					value={data.modality}
					onChange={(e) => handleChangeInput("modality", e.target.value)}
					error={errors.modality}
					options={[
						{ value: "Remote", label: "Remote" },
						{ value: "Hybrid", label: "Hybrid" },
						{ value: "Office", label: "Office" },
					]}
				/>

				<InputField
					id="location"
					label="Location"
					value={data.location}
					onChange={(e) => handleChangeInput("location", e.target.value)}
					error={errors.location}
				/>

				<InputField
					id="salary_range"
					label="Salary Range"
					value={data.salary_range}
					onChange={(e) => handleChangeInput("salary_range", e.target.value)}
					error={errors.salary_range}
				/>

				<InputField
					id="apply_url"
					label="Apply URL"
					required={true}
					value={data.apply_url}
					onChange={(e) => handleChangeInput("apply_url", e.target.value)}
					error={errors.apply_url}
				/>

				<SelectField
					id="four_day_arrangement"
					label="4-Day Week Arrangement"
					value={data.four_day_arrangement}
					onChange={(e) =>
						handleChangeInput("four_day_arrangement", e.target.value)
					}
					error={errors.four_day_arrangement}
					options={[
						{ value: "", label: "Select an option" },
						{
							value: "standard",
							label: "Standard 4-day week (32 hours, no salary reduction)",
						},
						{
							value: "compressed",
							label: "Compressed 4-day week (40 hours in 4 days)",
						},
						{
							value: "80_percent",
							label: "80% time for 80% pay (32 hours, pro-rata salary)",
						},
						{
							value: "9_day_fortnight",
							label: "9-day fortnight (every other Friday off)",
						},
						{
							value: "flexible",
							label: "Flexible 4-day week (employee chooses their day off)",
						},
						{
							value: "seasonal",
							label: "Seasonal 4-day week (e.g., summer months only)",
						},
						{ value: "gradual", label: "Gradual transition to 4-day week" },
						{
							value: "trial",
							label: "Trial 4-day week (company is testing the concept)",
						},
					]}
					required
				/>

                <SelectField
                    id="contract_type"
                    label="Contract Type"
                    value={data.contract_type}
                    onChange={(e) => handleChangeInput("contract_type", e.target.value)}
                    error={errors.contract_type}
                    options={[
                        { value: "full_time", label: "Full Time" },
                        { value: "part_time", label: "Part Time" },
                        { value: "contractor", label: "Contractor" },
                        { value: "temporary", label: "Temporary" },
                        { value: "other", label: "Other" },
                    ]}
                />
			</div>

			<div>
				<TechnologySelector
					value={data.technologies}
					technologies={technologies}
					onChange={handleTechnologyChange}
					error={errors.technologies}
					maxSelectable={4} // Permite seleccionar hasta 4 tecnologías
				/>
			</div>

			<div className="flex justify-end space-x-4 mt-8">
				<PrimaryButton
					type="button"
					onClick={() => setIsEditing(false)}
					className="bg-gray-500 hover:bg-gray-600"
				>
					Cancel
				</PrimaryButton>
				<PrimaryButton type="submit" disabled={processing}>
					{processing ? "Saving..." : "Save Changes"}
				</PrimaryButton>
			</div>
		</form>
	);

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-semibold text-xl text-gray-800 leading-tight">
					Job Details
				</h2>
			}
		>
			<Head title="Job Details" />
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<Transition
						show={true}
						enter="transition-opacity duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{isEditing ? renderEditForm() : renderJobDetails()}
					</Transition>
				</div>
			</div>
			<Footer />
		</AuthenticatedLayout>
	);
}

const InfoItem = ({ label, value }) => (
	<div className="mb-4">
		<span className="font-semibold text-gray-700">{label}:</span> {value}
	</div>
);

const InputField = ({ id, label, required, value, onChange, error }) => (
	<div>
		<label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
			{label} {required && <span className="text-red-500">*</span>}
		</label>
		<input
			type="text"
			id={id}
			name={id}
			value={value}
			onChange={onChange}
			className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
			required={required}
		/>
		{error && <span className="text-red-600 text-sm mt-1">{error}</span>}
	</div>
);

const SelectField = ({
	id,
	label,
	value,
	onChange,
	options,
	required,
	error,
}) => (
	<div>
		<label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
			{label} {required && <span className="text-red-500">*</span>}
		</label>
		<select
			id={id}
			name={id}
			value={value}
			onChange={onChange}
			className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
			required={required}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
		{error && <span className="text-red-600 text-sm mt-1">{error}</span>}
	</div>
);
