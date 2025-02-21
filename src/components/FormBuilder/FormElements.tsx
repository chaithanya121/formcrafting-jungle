
import React from 'react';
import { Input, TextArea, CheckSquare, ToggleLeft, Calendar, Upload, List } from 'lucide-react';

const FORM_ELEMENTS = [
  {
    category: 'Basic Fields',
    items: [
      { id: 'text', icon: Input, label: 'Text Input' },
      { id: 'textarea', icon: TextArea, label: 'Text Area' },
      { id: 'checkbox', icon: CheckSquare, label: 'Checkbox' },
      { id: 'toggle', icon: ToggleLeft, label: 'Toggle' },
      { id: 'date', icon: Calendar, label: 'Date Picker' },
      { id: 'file', icon: Upload, label: 'File Upload' },
      { id: 'select', icon: List, label: 'Select' },
    ],
  },
];

interface FormElementsProps {
  onSelectElement: (elementId: string) => void;
}

const FormElements: React.FC<FormElementsProps> = ({ onSelectElement }) => {
  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="sticky top-0 bg-white pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Form Elements</h2>
        <div className="mt-2">
          <input
            type="search"
            placeholder="Search elements..."
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {FORM_ELEMENTS.map((category) => (
        <div key={category.category} className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-3">{category.category}</h3>
          <div className="grid gap-2">
            {category.items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectElement(item.id)}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-primary/20 group"
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormElements;
