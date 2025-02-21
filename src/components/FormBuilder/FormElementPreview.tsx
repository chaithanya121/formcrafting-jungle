
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
      case 'hidden-input':
        return (
          <input
            type={element.type === 'hidden-input' ? 'text' : element.type}
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
      case 'multiselect':
        return (
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            multiple={element.type === 'multiselect'}
          >
            <option value="">Select an option</option>
            {element.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox-group':
      case 'checkbox-blocks':
      case 'checkbox-tabs':
        return (
          <div className={`space-y-2 ${element.type === 'checkbox-blocks' ? 'grid grid-cols-2 gap-2' : ''}`}>
            {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
              <div 
                key={index} 
                className={`flex items-center ${
                  element.type === 'checkbox-blocks' 
                    ? 'p-4 border rounded-lg hover:border-primary' 
                    : element.type === 'checkbox-tabs'
                    ? 'inline-block mr-2'
                    : 'space-x-2'
                }`}
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-primary"
                />
                <span className="text-sm text-gray-600">{option}</span>
              </div>
            ))}
          </div>
        );
      case 'radio':
      case 'radio-group':
      case 'radio-blocks':
      case 'radio-tabs':
        return (
          <div className={`space-y-2 ${element.type === 'radio-blocks' ? 'grid grid-cols-2 gap-2' : ''}`}>
            {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
              <div 
                key={index} 
                className={`flex items-center ${
                  element.type === 'radio-blocks' 
                    ? 'p-4 border rounded-lg hover:border-primary' 
                    : element.type === 'radio-tabs'
                    ? 'inline-block mr-2'
                    : 'space-x-2'
                }`}
              >
                <input
                  type="radio"
                  name={element.id}
                  className="w-4 h-4 border border-gray-300 focus:ring-2 focus:ring-primary"
                />
                <span className="text-sm text-gray-600">{option}</span>
              </div>
            ))}
          </div>
        );
      case 'toggle':
        return (
          <div className="flex items-center">
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4"></div>
            </div>
          </div>
        );
      case 'slider':
      case 'range-slider':
      case 'vertical-slider':
        return (
          <input 
            type="range"
            className={`w-full ${element.type === 'vertical-slider' ? 'h-32' : ''}`}
            orient={element.type === 'vertical-slider' ? 'vertical' : 'horizontal'}
          />
        );
      case 'file-upload':
      case 'multi-file-upload':
      case 'image-upload':
      case 'multi-image-upload':
      case 'gallery':
        return (
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF ({element.type.includes('multi') ? 'max 10 files' : 'max. 800x400px'})</p>
              </div>
              <input type="file" className="hidden" multiple={element.type.includes('multi')} />
            </label>
          </div>
        );
      case 'h1':
        return <h1 className="text-4xl font-bold">Heading 1</h1>;
      case 'h2':
        return <h2 className="text-3xl font-bold">Heading 2</h2>;
      case 'h3':
        return <h3 className="text-2xl font-bold">Heading 3</h3>;
      case 'h4':
        return <h4 className="text-xl font-bold">Heading 4</h4>;
      case 'paragraph':
        return <p className="text-gray-600">Sample paragraph text</p>;
      case 'quote':
        return <blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-600">Sample quote text</blockquote>;
      case 'divider':
        return <hr className="my-4 border-gray-200" />;
      case 'image':
        return (
          <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Image placeholder
          </div>
        );
      case 'link':
        return <a href="#" className="text-primary hover:underline">Sample link</a>;
      case 'danger-button':
        return (
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
            Danger Button
          </button>
        );
      case 'static-html':
        return <div className="p-4 border rounded bg-gray-50">Custom HTML content</div>;
      default:
        return (
          <div className="p-4 border rounded bg-gray-50">
            {element.type} - Preview not implemented
          </div>
        );
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
