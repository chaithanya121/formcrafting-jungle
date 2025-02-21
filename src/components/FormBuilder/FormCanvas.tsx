
import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { FormElementType } from './types';
import FormElementPreview from './FormElementPreview';

interface FormCanvasProps {
  selectedElement: string | null;
}

const FormCanvas: React.FC<FormCanvasProps> = ({ selectedElement }) => {
  const [elements, setElements] = useState<FormElementType[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    try {
      const elementData = JSON.parse(e.dataTransfer.getData('application/json'));
      const newElement: FormElementType = {
        id: `${elementData.id}-${Date.now()}`,
        type: elementData.id,
        label: elementData.label,
        placeholder: `Enter ${elementData.label.toLowerCase()}`,
        required: false,
      };
      setElements((prev) => [...prev, newElement]);
    } catch (error) {
      console.error('Error adding element:', error);
    }
  };

  return (
    <div className="h-full p-8">
      <div
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 min-h-[calc(100vh-4rem)] p-6"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col h-full">
          {elements.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="space-y-4">
                <div className="p-4 rounded-full bg-primary/5 inline-block">
                  <PlusCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Start Building Your Form</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Drag and drop elements from the left sidebar or click an element to add it to your form.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              {elements.map((element) => (
                <FormElementPreview key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCanvas;
