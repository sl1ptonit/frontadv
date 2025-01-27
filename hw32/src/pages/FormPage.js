import {useState} from "react";


export default function FormPage() {

    const [formData, setFormData] = useState({
        firstname: '',
        phone: '',
        age: '',
        category: '',
        preferences: {
            sports: false,
            music: false,
            reading: false
        },
        gender: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submited', formData);


    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(name, value, type, checked);

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                preferences: {
                    ...formData.preferences,
                    [name]: checked
                }
            });
        } else {
            setFormData({...formData, [name]: value});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstname"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
            <div>
                <label>
                    Category:
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        >
                        <option value="">
                            Choose a category
                        </option>
                        <option value="studeent">Student</option>
                        <option value="professional">Professional</option>
                        <option value="retired">Retired</option>
                    </select>
                </label>
            </div>
            <button disabled={!formData.firstname} type="submit">Submit</button>
        </form>
    );
}