import React from 'react'
import { MdReplyAll, MdReply, MdMenuOpen, MdRefresh } from 'react-icons/md';

import { Tool, ToolBox } from '../../components/Tools';
import type { ToolModel } from '../../models';

export type HeaderProps = {};

const toolsMockData: Array<ToolModel> = [
  {
    id: '1',
    name: 'select',
    icon: (<MdReplyAll />)
  },
  {
    id: '2',
    name: 'plasticine',
    icon: (<MdReply />)
  },
  {
    id: '3',
    name: 'plasticine',
    icon: (<MdMenuOpen />)
  },
  {
    id: '4',
    name: 'plasticine',
    icon: (<MdRefresh />)
  },
];

const Header: React.FC<HeaderProps> = ({  }) => {
  const toolClickHandler = (tool: ToolModel) => {
    console.log({ tool });
  };

  return (
    <header className="h-20 fixed w-full bg-zinc-900 border-b-1 border-zinc-700 p-5 flex items-center z-50">
      <ToolBox>
        {toolsMockData.map((tool) =>
          <Tool name={tool.name} key={tool.id} clickHandler={() => toolClickHandler(tool)}>
            <span>{tool.icon}</span>
          </Tool>
        )}
      </ToolBox>
    </header>
  );
};

export default Header;
