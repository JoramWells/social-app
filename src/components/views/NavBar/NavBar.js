import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button,Menu } from "antd";
// import {AppstoreOutlined,CodeOutlined} from '@ant-design/icons'
import "./Sections/Navbar.css";

const {SubMenu} = Menu

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <nav className="menu" style={{ zIndex: 1, width: "100%", position:"sticky", top:"0px" }}>
        {/* <div className="menu__logo">
        <a href="/">Logo</a>
      </div> */}
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            {/* <Icon type="align-right" /> */}B
          </Button>
          <Drawer
            title="Menu"
            placement="left"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
      {/* <Menu mode="horizontal" style={{padding:"0 20px"}}>
        <Menu.Item>
          Tech News
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Video Tutorials
        </Menu.Item>
        <SubMenu title="Pure Code" icon={<CodeOutlined />}>
          <Menu.ItemGroup title="Javascript">
            <Menu.Item>
              NodeJs
            </Menu.Item>
            <Menu.Item>
             ReactJS
            </Menu.Item>
            <Menu.Item>
              VueJS
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Python">
            <Menu.Item>
              Django
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>




      </Menu> */}
     
    </>
  );
}

export default NavBar;
