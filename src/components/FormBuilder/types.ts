
export type FormElementType = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  validation?: {
    type: 'required' | 'email' | 'number' | 'regex';
    message?: string;
    pattern?: string;
  }[];
  conditions?: {
    field: string;
    operator: 'equals' | 'notEquals' | 'contains' | 'notContains';
    value: string;
  }[];
  className?: string;
};

export type FormConfig = {
  id: string;
  name: string;
  description?: string;
  elements: FormElementType[];
  theme?: {
    primaryColor: string;
    borderRadius: string;
    fontSize: string;
  };
};
