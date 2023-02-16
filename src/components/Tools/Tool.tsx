import React from 'react';

export type ToolProps = React.PropsWithChildren<{
  name: string;
  clickHandler: () => void;
}>;

const Tool: React.FC<ToolProps> = ({ children, name, clickHandler }) => {
  return (
    <button
      className="w-8 h-8 flex justify-center items-center text-zinc-900
                 bg-lime-200 border-lime-300 border-1 rounded hover:bg-lime-300 hover:border-lime-400"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Tool;
