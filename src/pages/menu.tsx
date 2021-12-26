import React from 'react'
import { MenuItemProps } from "../layout/SideMenuLayout";
import {
  IconHome,
  IconUserGroup,
} from "@arco-design/web-react/icon";

const menus: MenuItemProps[] = [
  {
    text: "首页",
    path: "/",
    icon: <IconHome />,
  },

  {
    text: "上报点管理",
    path: "/reporter",
    icon: <IconUserGroup />,
  }
];
export default menus;
