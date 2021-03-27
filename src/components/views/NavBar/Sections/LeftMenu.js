import React from 'react';
import { Menu } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons'


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    {/* <Menu.Item key="blog">
      <a href="/blog">Blog</a>
    </Menu.Item> */}
    <Menu.Item key="create" icon={<PlusCircleOutlined />}>
      <a href="/blog/create">Add</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu