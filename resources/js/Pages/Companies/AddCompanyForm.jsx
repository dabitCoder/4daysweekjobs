import {useForm} from "@inertiajs/react";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

const AddCompanyForm = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('companies.store'), { onSuccess: () => reset() });
    };
    
    return <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form onSubmit={submit}>
            <input onChange={e => setData('name', e.target.value)} placeholder="title">
            </input>
            <textarea
                value={data.description}
                placeholder="What's on your mind?"
                className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                onChange={e => setData('description', e.target.value)}
            ></textarea>
            <input onChange={e => setData('location', e.target.value)}></input>

            <InputError message={errors.message} className="mt-2" />
            <PrimaryButton className="mt-4" disabled={processing}>Chirp</PrimaryButton>
        </form>
    </div>
}
