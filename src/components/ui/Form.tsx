import React, { useEffect, useState } from 'react';

// i18n
import type { LangTypes } from '../../i18n/utils/types';
import { formTexts as enFormTexts } from '../../i18n/en/form';
import { formTexts as esFormTexts } from '../../i18n/es/form';

interface FormSliceProps {
  lang: string;
}

const formTextsByLang: Record<string, LangTypes> = {
  en: enFormTexts,
  es: esFormTexts,
};

const FormSlice = ( { lang }: FormSliceProps ) => {
  const [service, setService] = useState('');
  const texts = formTextsByLang[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('s');
    if (s) {
      setService(s);
      setFormData(prev => ({ ...prev, service: s }));
    }
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('phone');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white/80 text-black p-6 rounded-xl shadow-lg md:col-span-3">
      <h1 className="text-center text-3xl font-bold text-blue-950">
        {texts.title}
      </h1>
      <h2 className="text-center text-3xl font-bold text-blue-950">
        {texts.subtitle}
      </h2>
      {/* Formulario */}
      <form className="flex flex-col gap-4 mt-6">
        <input
          name="name"
          type="text"
          placeholder={texts.name}
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Contact method toggle field */}
        <div className="flex items-center gap-2 ">
          <p className="text-sm font-medium text-gray-700">
            {texts.contact_method}
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
                {texts.email}
            </button>
            <button
            type="button"
            onClick={() => setContactMethod('phone')}
            className={`px-4 py-2 transition ${
                contactMethod === 'phone' ? 'bg-blue-400/50 text-gray-800' : 'text-gray-400'
            }`}
            >
                {texts.phone}
            </button>
          </div>
        </div>
        {/* Contact Method - Conditional Fields */}
        {contactMethod === 'email' ? (
          <input
            name="email"
            type="email"
            placeholder={texts.email}
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        ) : (
          <input
            name="phone"
            type="tel"
            placeholder={texts.phone}
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        )}

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value=""> {texts.service} </option>
          <option value="option 1"> Option 1 </option>
          <option value="renovation"> Renovation </option>
          <option value="option 3"> Option 3 </option>
        </select>

      </form>
      <p className="text-lg">Selected Service: {service}</p>
    </div>
  );

}


export default FormSlice;