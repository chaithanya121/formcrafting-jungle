import React from 'react';
import { FormElementType } from './types';

interface FormElementPreviewProps {
  element: FormElementType;
}

const FormElementPreview: React.FC<FormElementPreviewProps> = ({ element }) => {
  const renderElement = () => {
    switch (element.type) {
      case 'matrix':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  {['Option 1', 'Option 2', 'Option 3'].map((header, i) => (
                    <th key={i} className="px-4 py-2 text-sm text-gray-600">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {['Row 1', 'Row 2', 'Row 3'].map((row, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 text-sm text-gray-600">{row}</td>
                    {[1, 2, 3].map((_, j) => (
                      <td key={j} className="px-4 py-2">
                        <input type="radio" name={`matrix-${i}`} className="w-4 h-4" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'matrix-table':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2"></th>
                  {['Column 1', 'Column 2', 'Column 3'].map((header, i) => (
                    <th key={i} className="px-4 py-2 text-sm text-gray-600">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {['Row 1', 'Row 2', 'Row 3'].map((row, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 text-sm text-gray-600">{row}</td>
                    {[1, 2, 3].map((_, j) => (
                      <td key={j} className="px-4 py-2">
                        <input type="text" className="w-full px-2 py-1 border rounded" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'tabs':
        return (
          <div className="space-y-4">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['Tab 1', 'Tab 2', 'Tab 3'].map((tab, i) => (
                  <button
                    key={i}
                    className={`py-2 px-1 border-b-2 ${
                      i === 0 ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-4 border rounded-lg">Tab content area</div>
          </div>
        );

      case 'steps':
        return (
          <div className="space-y-4">
            <div className="flex justify-between">
              {['Step 1', 'Step 2', 'Step 3'].map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i === 0 ? 'bg-primary text-white' : 'bg-gray-200'
                  }`}>
                    {i + 1}
                  </div>
                  {i < 2 && (
                    <div className="w-full h-1 bg-gray-200 mx-2">
                      <div className={`h-full ${i === 0 ? 'bg-primary' : ''}`} style={{ width: '0%' }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-4 border rounded-lg">Step content area</div>
          </div>
        );

      case 'grid':
      case '2-columns':
      case '3-columns':
      case '4-columns':
        const columns = {
          'grid': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          '2-columns': 'grid-cols-2',
          '3-columns': 'grid-cols-3',
          '4-columns': 'grid-cols-4'
        }[element.type];
        
        return (
          <div className={`grid ${columns} gap-4`}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg bg-gray-50">
                Column {i + 1}
              </div>
            ))}
          </div>
        );

      case 'table':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {['Header 1', 'Header 2', 'Header 3'].map((header, i) => (
                    <th key={i} className="px-4 py-2 text-sm text-gray-600">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Array.from({ length: 3 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 3 }).map((_, j) => (
                      <td key={j} className="px-4 py-2 text-sm text-gray-600">
                        Cell {i + 1}-{j + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'container':
        return (
          <div className="p-6 border rounded-lg bg-gray-50">
            <div className="text-sm text-gray-500">Container Content Area</div>
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg flex items-center justify-between">
                <span className="text-sm text-gray-600">List Item {i + 1}</span>
                <button className="text-red-500 hover:text-red-600">×</button>
              </div>
            ))}
            <button className="w-full p-2 border border-dashed rounded-lg text-gray-500 hover:text-gray-600 hover:border-gray-400">
              + Add Item
            </button>
          </div>
        );

      case 'nested-list':
        return (
          <div className="space-y-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="border rounded-lg">
                <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
                  <span className="font-medium">Group {i + 1}</span>
                  <button className="text-red-500 hover:text-red-600">×</button>
                </div>
                <div className="p-4 space-y-2">
                  {Array.from({ length: 2 }).map((_, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Item {j + 1}</span>
                      <button className="text-red-500 hover:text-red-600">×</button>
                    </div>
                  ))}
                  <button className="w-full p-2 border border-dashed rounded-lg text-gray-500 hover:text-gray-600 hover:border-gray-400">
                    + Add Item
                  </button>
                </div>
              </div>
            ))}
            <button className="w-full p-2 border border-dashed rounded-lg text-gray-500 hover:text-gray-600 hover:border-gray-400">
              + Add Group
            </button>
          </div>
        );

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
          <div className={element.type === 'vertical-slider' ? 'h-32 w-full flex items-center justify-center' : 'w-full'}>
            <input 
              type="range"
              className={`
                ${element.type === 'vertical-slider' 
                  ? 'rotate-270 origin-center w-32 -translate-y-4' 
                  : 'w-full'
                }
              `}
            />
          </div>
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
