const TechnologySelector = ({ technologies, onChange, error }) => {
    return (
        <div>
            <label
                htmlFor="technologies"
                className="block text-gray-700 font-bold mb-2"
            >
                Technologies (up to 4)
            </label>
            <select
                id="technologies"
                multiple
                value={technologies}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                <option value="nodejs">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="ruby">Ruby</option>
                <option value="php">PHP</option>
            </select>
            {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
    );
};

export default TechnologySelector;
