import React from 'react'
import { AiOutlineSelect } from 'react-icons/ai';

import { Tool, ToolBox } from '../../components/Tools';
import type { ToolModel } from '../../models';

export type HeaderProps = {};

const toolsMockData: Array<ToolModel> = [
  {
    id: '1',
    name: 'select',
    icon: (<AiOutlineSelect />)
  },
  {
    id: '2',
    name: 'plasticine',
    icon: (<AiOutlineSelect />)
  }
];

const Header: React.FC<HeaderProps> = ({  }) => {
  const toolClickHandler = (tool: ToolModel) => {
    console.log({ tool });
  };

  return (
    <header className="h-20 bg-gray-200 drop-shadow-md p-5 flex items-center">
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
