
import React, { useState } from 'react';
import { 
  Type, 
  AlignLeft, 
  CheckSquare, 
  ToggleLeft, 
  Calendar, 
  Upload, 
  List,
  Mail,
  Lock,
  Hash,
  Radio,
  Link2,
  Phone,
  Map,
  Globe,
  Rows,
  Table2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Quote,
  Image,
  SeparatorHorizontal,
  Code,
  Grid,
  Columns2,
  Columns3,
  Columns4,
  LayoutGrid,
  Container,
  ListTree,
  Sliders,
  Gallery,
  FileWarning,
  AlertTriangle
} from 'lucide-react';

const FORM_ELEMENTS = [
  {
    category: 'Fields',
    items: [
      { id: 'checkbox-group', icon: CheckSquare, label: 'Checkbox group', description: 'Plain checkbox options' },
      { id: 'checkbox-blocks', icon: CheckSquare, label: 'Checkbox blocks', description: 'Checkbox options as blocks' },
      { id: 'checkbox-tabs', icon: CheckSquare, label: 'Checkbox tabs', description: 'Checkbox options masked as tabs' },
      { id: 'radio', icon: Radio, label: 'Radio', description: 'Plain radio input' },
      { id: 'radio-group', icon: Radio, label: 'Radio group', description: 'Plain radio options' },
      { id: 'radio-blocks', icon: Radio, label: 'Radio blocks', description: 'Radio options as blocks' },
      { id: 'radio-tabs', icon: Radio, label: 'Radio tabs', description: 'Radio options masked as tabs' },
      { id: 'matrix', icon: Grid, label: 'Matrix', description: 'A matrix of input fields' },
      { id: 'matrix-table', icon: Table2, label: 'Matrix table', description: 'Spreadsheet like table of text inputs' },
      { id: 'toggle', icon: ToggleLeft, label: 'Toggle', description: 'Toggle / switch button' },
      { id: 'select', icon: List, label: 'Select', description: 'Select input' },
      { id: 'multiselect', icon: List, label: 'Multiselect', description: 'Multiple select input' },
      { id: 'date-range', icon: Calendar, label: 'Date range', description: 'Date picker that allows date range' },
      { id: 'slider', icon: Sliders, label: 'Slider', description: 'Horizontal slider' },
      { id: 'range-slider', icon: Sliders, label: 'Range slider', description: 'Horizontal slider with range' },
      { id: 'vertical-slider', icon: Sliders, label: 'Vertical slider', description: 'Vertical slider' },
      { id: 'file-upload', icon: Upload, label: 'File upload', description: 'File upload input' },
      { id: 'multi-file-upload', icon: Upload, label: 'Multi-file upload', description: 'Multi-file upload input' },
      { id: 'image-upload', icon: Image, label: 'Image upload', description: 'File upload with image only' },
      { id: 'multi-image-upload', icon: Gallery, label: 'Multi-image upload', description: 'Multi-file upload with images only' },
      { id: 'gallery', icon: Gallery, label: 'Gallery', description: 'Multi-image upload with gallery view' },
      { id: 'captcha', icon: FileWarning, label: 'Captcha', description: 'Prevents submission by robots' },
      { id: 'hidden-input', icon: Lock, label: 'Hidden input', description: 'Single line or multiline text area' },
    ],
  },
  {
    category: 'Static',
    items: [
      { id: 'danger-button', icon: AlertTriangle, label: 'Danger button', description: 'Button with danger color' },
      { id: 'h1', icon: Heading1, label: 'H1 header', description: 'HTML <h1> tag' },
      { id: 'h2', icon: Heading2, label: 'H2 header', description: 'HTML <h2> tag' },
      { id: 'h3', icon: Heading3, label: 'H3 header', description: 'HTML <h3> tag' },
      { id: 'h4', icon: Heading4, label: 'H4 header', description: 'HTML <h4> tag' },
      { id: 'paragraph', icon: AlignLeft, label: 'Paragraph', description: 'HTML <p> tag' },
      { id: 'quote', icon: Quote, label: 'Quote', description: 'HTML <quote> tag' },
      { id: 'image', icon: Image, label: 'Image', description: 'HTML <img> tag' },
      { id: 'link', icon: Link2, label: 'Link', description: 'HTML <a> tag' },
      { id: 'divider', icon: SeparatorHorizontal, label: 'Divider', description: 'HTML <hr> tag' },
      { id: 'static-html', icon: Code, label: 'Static HTML', description: 'Plain HTML element' },
    ],
  },
  {
    category: 'Structure',
    items: [
      { id: 'tabs', icon: Rows, label: 'Tabs', description: 'Break forms into tabs' },
      { id: 'steps', icon: List, label: 'Steps', description: 'Break forms into steps' },
      { id: 'grid', icon: LayoutGrid, label: 'Grid', description: 'Create complex layouts' },
      { id: 'table', icon: Table2, label: 'Table', description: 'Organize data in rows and columns' },
      { id: 'container', icon: Container, label: 'Container', description: 'A container to group elements' },
      { id: '2-columns', icon: Columns2, label: '2 columns', description: 'Two columns next to each other' },
      { id: '3-columns', icon: Columns3, label: '3 columns', description: 'Three columns next to each other' },
      { id: '4-columns', icon: Columns4, label: '4 columns', description: 'Four columns next to each other' },
      { id: 'list', icon: List, label: 'List', description: 'Repeatable single element' },
      { id: 'nested-list', icon: ListTree, label: 'Nested list', description: 'Repeatable elements in an object' },
    ],
  },
];

interface FormElementsProps {
  onSelectElement: (elementId: string) => void;
}

const FormElements: React.FC<FormElementsProps> = ({ onSelectElement }) => {
  const [activeTab, setActiveTab] = useState('Fields');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredElements = FORM_ELEMENTS.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="sticky top-0 bg-white pb-4 z-10 p-4 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Form Elements</h2>
        <input
          type="search"
          placeholder="Search elements..."
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex space-x-2 border-b border-gray-200">
          {['Fields', 'Static', 'Structure'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-primary border-b-2 border-primary -mb-px'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-y-auto flex-1 p-4">
        {filteredElements
          .filter(category => category.category === activeTab)
          .map((category) => (
            <div key={category.category} className="space-y-2">
              {category.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectElement(item.id)}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-primary/20 group"
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('application/json', JSON.stringify(item));
                  }}
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  <div className="text-left">
                    <span className="text-sm text-gray-900 group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FormElements;
