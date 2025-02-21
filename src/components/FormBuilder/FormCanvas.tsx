
import React from 'react';
import { PlusCircle } from 'lucide-react';

interface FormCanvasProps {
  selectedElement: string | null;
}

const FormCanvas: React.FC<FormCanvasProps> = ({ selectedElement }) => {
  return (
    <div className="h-full p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 min-h-[calc(100vh-4rem)] p-6">
        <div className="flex flex-col items-center justify-center h-full text-center">
          {!selectedElement ? (
            <div className="space-y-4">
              <div className="p-4 rounded-full bg-primary/5 inline-block">
                <PlusCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Start Building Your Form</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Drag and drop elements from the left sidebar or click an element to add it to your form.
              </p>
            </div>
          ) : (
            <div className="w-full animate-fadeIn">
              {/* Form preview will be rendered here */}
              <div className="space-y-6">
                {/* Example form fields */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCanvas;
