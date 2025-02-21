
import React from 'react';
import { FormElementType } from './types';

interface FormElementPreviewProps {
  element: FormElementType;
}

const FormElementPreview: React.FC<FormElementPreviewProps> = ({ element }) => {
  const renderElement = () => {
    switch (element.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'url':
      case 'phone':
        return (
          <input
            type={element.type}
            placeholder={element.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        );
      case 'textarea':
        return (
          <textarea
            placeholder={element.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[100px]"
          />
        );
      case 'select':
        return (
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
            <option value="">Select an option</option>
            {element.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-primary"
            />
            <span className="text-sm text-gray-600">{element.label}</span>
          </div>
        );
      case 'radio':
        return (
          <div className="space-y-2">
            {element.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={element.id}
                  value={option.value}
                  className="w-4 h-4 border border-gray-300 focus:ring-2 focus:ring-primary"
                />
                <span className="text-sm text-gray-600">{option.label}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        {element.label}
        {element.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderElement()}
    </div>
  );
};

export default FormElementPreview;
