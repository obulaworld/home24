import React from 'react';

import './SideBar.css';

interface ISideBarMenuProps {
  urlPath: string;
  name: string;
}

const SideBarMenu = ({ urlPath, name }: ISideBarMenuProps) => {
  return (
    <li className={`sidebarMenu ${window.location.pathname.includes(name.toLowerCase()) ? 'sidebarMenuActive' : ''}`}>
      <a href={`/${urlPath}`}>{name}</a>
    </li>
  );
};

export default SideBarMenu;
