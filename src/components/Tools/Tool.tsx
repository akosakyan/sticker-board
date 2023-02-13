import React from 'react';

export type ToolProps = React.PropsWithChildren<{
  name: string;
  clickHandler: () => void;
}>;

const Tool: React.FC<ToolProps> = ({ children, name, clickHandler }) => {
  return (
    <button
      className="w-8 h-8 text-gray-900 flex justify-center items-center border-gray-400 border-1 rounded hover:bg-gray-400"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Tool;
