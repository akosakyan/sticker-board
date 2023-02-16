import React from 'react';

export type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = (props, context) => {
  return (
    <aside className="w-72 fixed sidebar bg-zinc-900 border-r-1 border-zinc-700 z-40">
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">

      </div>
    </aside>
  );
};

export default Sidebar;
