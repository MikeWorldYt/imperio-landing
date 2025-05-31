import React, { useState } from 'react';
import { homeTexts as enHomeTexts } from '../../../i18n/en/home';
import { homeTexts as esHomeTexts } from '../../../i18n/es/home';
import type { LangTypes } from '../../../i18n/utils/types';

interface HeroFormProps {
    lang: string;
}

const homeTextsByLang: Record<string, LangTypes> = {
    en: enHomeTexts,
    es: esHomeTexts,
};

const HeroForm = ({ lang }: HeroFormProps) => {
    const text = homeTextsByLang[lang].hero.form_content;

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
            {/* Name field */}
            <input
                name="name"
                type="text"
                placeholder={text.name}
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Contact method toggle field */}
            <div className="flex items-center gap-2 ">
                <p className="text-sm font-medium text-gray-700">
                    {text.contact_method}
                </p>
                {/* Toggle switch */}
                <div className="flex w-fit bg-gray-300 text-white rounded-md overflow-hidden">
                    
                    <button
                    type="button"
                    onClick={() => setContactMethod('email')}
                    className={`px-4 py-2 transition ${
                        contactMethod === 'email' ? 'bg-blue-400/50 text-gray-800' : 'text-gray-400'
                    }`}
                    >
                        {text.email}
                    </button>
                    <button
                    type="button"
                    onClick={() => setContactMethod('phone')}
                    className={`px-4 py-2 transition ${
                        contactMethod === 'phone' ? 'bg-blue-400/50 text-gray-800' : 'text-gray-400'
                    }`}
                    >
                        {text.phone}
                    </button>
                </div>
            </div>
            {/* Contact Method - Conditional Fields */}
            {contactMethod === 'email' ? (
                <input
                    name="email"
                    type="email"
                    placeholder={text.email}
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            ) : (
                <input
                    name="phone"
                    type="tel"
                    placeholder={text.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            )}
            {/* Message field */}
            <textarea
                name="message"    
                placeholder={text.message}
                value={formData.message}
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Submit button */}
            <button type="submit" className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-600">
                {text.submit_button}
            </button>
        </form>
    );
};

export default HeroForm;