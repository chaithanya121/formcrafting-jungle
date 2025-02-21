
import React from 'react';
import { Settings2 } from 'lucide-react';

interface FormPropertiesProps {
  selectedElement: string | null;
}

const FormProperties: React.FC<FormPropertiesProps> = ({ selectedElement }) => {
  return (
    <div className="h-full p-4 overflow-y-auto">
      <div className="sticky top-0 bg-white pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Properties</h2>
      </div>

      {!selectedElement ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] text-center">
          <Settings2 className="w-8 h-8 text-gray-400 mb-3" />
          <p className="text-gray-500">Select an element to edit its properties</p>
        </div>
      ) : (
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Label</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Element label"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Placeholder</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Element placeholder"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Required</label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-primary"
                />
                <span className="text-sm text-gray-600">Make this field required</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Validation</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                <option value="">None</option>
                <option value="required">Required</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="regex">Custom Pattern</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Custom Classes</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Add custom CSS classes"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormProperties;
