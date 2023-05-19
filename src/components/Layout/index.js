import { InboxOutlined, TeamOutlined, ThunderboltOutlined} from '@ant-design/icons';
import { Link} from "react-router-dom";

import {Layout, Menu,} from 'antd';
import {useEffect, useState} from 'react';
import {ListWrapper, LogoImgWrapper, SiderWrapper} from "./style"

const {Content} = Layout;

// function getItem(label, key, icon, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     };
// }
//
// const items = [
//     getItem('People', '9',  <TeamOutlined/>),
//     getItem('Files', '95', <FileOutlined/>),
//     getItem('Files', '98', <FileOutlined/>),
// ];

const items = [{
    icon:  <TeamOutlined/>,
    title: "Dialogues",
    key: "/dialogues"
}, {
    icon:  <ThunderboltOutlined/>,
    title: "People",
    key: "/training"
}, {
    icon:  <InboxOutlined/>,
    title: "Inbox",
    key: "/inbox"
}]
const LayoutAfterLogin = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeRout, setActiveRout] = useState("")
    const pathName = window.location.pathname
    useEffect(() => {
        const active = items.find(item => item.key === window.location.pathname )
        setActiveRout(active?.key)
    }, [pathName, items])

    const handleClick = ({_,key}) => {
        setActiveRout(key)
    }

    return (
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <SiderWrapper collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                              theme="light">
                    <LogoImgWrapper >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYHC8NKunewoijtbJEyQL5_biS35DHxQm3g&usqp=CAU"
                            alt="img"/>
                        <span >Hoory</span>
                    </LogoImgWrapper>
                    <ListWrapper>
                        <Menu  selectedKeys={activeRout} mode="inline" onClick={handleClick}>
                            {
                                items.map((item) => (
                                    <Menu.Item key = {item.key}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                        <Link to={item.title.toLowerCase()} />
                                    </Menu.Item>
                                ))
                            }
                            </Menu>
                    </ListWrapper>
                </SiderWrapper>
                <Layout className="site-layout">
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div
                            style={{
                                borderRadius: 20,
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
    );
};
export default LayoutAfterLogin;