import React from "react";
import Select from "react-select";

const TechnologySelector = ({
	technologies,
	onChange,
	error,
	value,
	maxSelection = 4,
}) => {
	const colorOptions = [
		"#FFA07A",
		"#98FB98",
		"#87CEFA",
		"#DDA0DD",
		"#F0E68C",
		"#FF6347",
		"#20B2AA",
		"#FF69B4",
		"#00CED1",
		"#9370DB",
	];

	const options = technologies.map((tech, index) => ({
		value: tech.id,
		label: tech.name,
		color: colorOptions[index % colorOptions.length],
	}));

	const selectedOptions = value
		.map((id) => {
			const tech = technologies.find((t) => t.id === id);
			return tech
				? {
						value: tech.id,
						label: tech.name,
						color: options.find((o) => o.value === tech.id).color,
					}
				: null;
		})
		.filter((option) => option !== null);

	const handleChange = (selectedOptions) => {
		const selectedIds = selectedOptions
			? selectedOptions.map((option) => option.value)
			: [];
		onChange(selectedIds);
	};

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none',

            padding: '0.5rem',
            borderRadius: '0.375rem',
            backgroundColor: 'white',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? state.data.color
                : state.isFocused
                    ? `${state.data.color}40`
                    : 'white',
            color: state.isSelected ? 'white' : '#374151',
            '&:active': {
                backgroundColor: state.data.color,
                color: 'white',
            },
            padding: '0.5rem 1rem',
        }),
        multiValue: (provided, { data }) => ({
            ...provided,
            backgroundColor: data.color,
            borderRadius: '0.375rem',
            margin: '0.25rem',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white',
            padding: '0.25rem',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                borderRadius: '0 0.375rem 0.375rem 0',
            },
            padding: '0.25rem',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#6b7280',
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0.375rem',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#3b82f6',
        }),
        clearIndicator: (provided) => ({
            ...provided,
            color: '#3b82f6',
        }),
    };

	return (
        <div className="mb-4 w-full">
            <label htmlFor="technologies" className="block text-gray-700 font-bold mb-2">
                Technologies (up to {maxSelection})
            </label>
            <Select
                id="technologies"
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                placeholder="Select technologies..."
                maxMenuHeight={200}
                noOptionsMessage={() =>
                    selectedOptions.length >= maxSelection
                        ? `Max ${maxSelection} technologies`
                        : "No technologies found"
                }
                styles={customStyles}
                className="w-full"
            />
            {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
        </div>
	);
};

export default TechnologySelector;
