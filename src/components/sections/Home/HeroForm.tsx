import React, { useState } from 'react';

const HeroForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('phone');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form className='flex flex-col gap-4'>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center gap-2 ">
                <p className="text-sm font-medium text-gray-700">How would you like to be contacted?</p>

            {/* Toggle switch */}
                <div className="flex w-fit bg-gray-300 text-white rounded-md overflow-hidden">
                    
                    <button
                    type="button"
                    onClick={() => setContactMethod('email')}
                    className={`px-4 py-2 transition ${
                        contactMethod === 'email' ? 'bg-blue-400/50 text-gray-800' : 'text-gray-400'
                    }`}
                    >
                        Email
                    </button>
                    <button
                    type="button"
                    onClick={() => setContactMethod('phone')}
                    className={`px-4 py-2 transition ${
                        contactMethod === 'phone' ? 'bg-blue-400/50 text-gray-800' : 'text-gray-400'
                    }`}
                    >
                        Phone
                    </button>
                </div>
            </div>

            {/* Conditional Fields */}
            {contactMethod === 'email' ? (
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            ) : (
                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            )}


            <textarea
                name="message"    
                placeholder="Message"
                value={formData.message}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button type="submit" className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-600">
                Submit
            </button>

        </form>
    );
};

export default HeroForm;