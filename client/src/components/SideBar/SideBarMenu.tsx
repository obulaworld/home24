import React from 'react';

interface ISideBarMenuProps {
  urlPath: string;
  name: string;
}

const SideBarMenu = ({ urlPath, name }: ISideBarMenuProps) => {
  return (
    <li>
      <a href={`/${urlPath}`}>{name}</a>
    </li>
  );
};

export default SideBarMenu;
