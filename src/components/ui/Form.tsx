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
  const texts = formTextsByLang[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('s');
    if (s) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white/80 text-black p-6 rounded-xl shadow-lg md:col-span-3">
      <h1 className="text-center text-3xl font-bold text-blue-950">
        {texts.title[0]}
        <b>{texts.title[1]}</b>
        {texts.title[2]}
      </h1>
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
        {/* Service field */}
        <div className="flex items-center gap-2 ">
          <p className="text-sm font-medium text-gray-700">
            {texts.service}
          </p>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value=""> {texts.service_placeholder} </option>
            <option value="pool-remodeling"> {texts.service_1} </option>
            <option value="replastering"> {texts.service_2} </option>
            <option value="coping-tile"> {texts.service_3} </option>
            <option value="pool-deck"> {texts.service_4} </option>
            <option value="deco-features"> {texts.service_5} </option>
            <option value="new-pools"> {texts.service_6} </option>
            <option value="maintenance"> {texts.service_7} </option>
          </select>
        </div>
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
        {/* Message field */}
        <textarea
          name="message"
          placeholder={texts.message}
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {/* Submit button */}
        <button type="submit" className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-600">
          {texts.submit_button}
        </button>
      </form>
    </div>
  );

}


export default FormSlice;