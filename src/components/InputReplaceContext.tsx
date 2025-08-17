import React, { createContext, useContext, useState } from 'react';

type InputValues = { [target: string]: string };
type ContextType = {
  values: InputValues;
  setValue: (target: string, value: string) => void;
};

const InputReplaceContext = createContext<ContextType | undefined>(undefined);

export const InputReplaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [values, setValues] = useState<InputValues>({});
  const setValue = (target: string, value: string) => {
    setValues((prev) => ({ ...prev, [target]: value }));
  };
  return (
    <InputReplaceContext.Provider value={{ values, setValue }}>
      {children}
    </InputReplaceContext.Provider>
  );
};

export const useInputReplace = () => {
  const ctx = useContext(InputReplaceContext);
  if (!ctx) throw new Error('useInputReplace must be used within InputReplaceProvider');
  return ctx;
};
