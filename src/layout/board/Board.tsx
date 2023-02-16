import React from 'react'

export type BoardProps = React.PropsWithChildren<{}>;

const Board: React.FC<BoardProps> = ({ children }) => {
  return (
    <main className="absolute bg-zinc-900 min-h-screen ml-72 mt-20 z-30">
      <div className="p-10 overflow-y-auto">
        {children}
      </div>
    </main>
  );
};

export default Board;
