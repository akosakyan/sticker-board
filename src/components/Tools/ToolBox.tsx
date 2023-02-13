import React from 'react';

export type ToolBoxProps = React.PropsWithChildren<{}>;

const ToolBox: React.FC<ToolBoxProps> = ({ children }) => {
  return (
    <div className="flex flex-nowrap items-center gap-4">
      {children}
    </div>
  );
};

export default ToolBox;
