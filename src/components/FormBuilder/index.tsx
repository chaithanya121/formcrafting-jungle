
import React, { useState } from 'react';
import FormElements from './FormElements';
import FormCanvas from './FormCanvas';
import FormProperties from './FormProperties';

const FormBuilder = () => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar - Form Elements */}
        <div className="w-64 bg-white border-r border-gray-200 shadow-lg animate-slideIn">
          <FormElements onSelectElement={setSelectedElement} />
        </div>

        {/* Main Canvas */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <FormCanvas selectedElement={selectedElement} />
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-white border-l border-gray-200 shadow-lg animate-slideIn">
          <FormProperties selectedElement={selectedElement} />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
