import React from "react";
import { Layout, Menu } from "@arco-design/web-react";
import HeaderBar from './HeaderBar'
import styles from './index.module.css'
import { useHistory } from "react-router-dom";
import * as H from 'history';

const { Sider, Content, Header } = Layout;
const { Item: MenuItem, SubMenu } = Menu;

export interface MenuItemProps {
  icon?: React.ReactNode;
  text: React.ReactNode;
  path: string;
  exact?: boolean;
  disabled?: boolean;
  children?: MenuItemProps[];
}

export function renderMenuItem(item: MenuItemProps, history: H.History) {
  if (item.children?.length) {
    return (
      <SubMenu
        key={item.path}
        title={
          <>
            {item.icon}
            <span>{item.text}</span>
          </>
        }
      >
        {item.children?.map((subItem) => {
          return renderMenuItem(subItem, history);
        })}
      </SubMenu>
    );
  }
  return (
    <MenuItem key={item.path} disabled={item.disabled} onClick={() => history.push(item.path)}>
      {item.icon}
      <span>{item.text}</span>
    </MenuItem>
  );
}

interface SideMenuLayoutProps {
  menus: MenuItemProps[];
}

const SideMenuLayout: React.FC<SideMenuLayoutProps> = ({
  menus,
  children,
}): React.ReactElement => {

  const history = useHistory()
  return (
    <Layout className={styles.layout}>
      <Header>
        <HeaderBar />
      </Header>

      <Layout className={styles.main}>
        <Sider className={styles.sider}>
          <Menu>{menus.map((item) => renderMenuItem(item, history))}</Menu>
        </Sider>

        <Layout>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SideMenuLayout;
