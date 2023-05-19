import {TeamOutlined, ThunderboltOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {Layout, Menu,} from 'antd';
import {useEffect, useState} from 'react';
import {ListWrapper, LogoImgWrapper, SiderWrapper, LayoutWrapper, ChildrenWrapper} from "./style"

const {Content} = Layout;

const items = [{
    icon: <TeamOutlined/>,
    title: "Trainings",
    key: "/trainings"
}, {
    icon: <ThunderboltOutlined/>,
    title: "People",
    key: "/people"
}]
const LayoutAfterLogin = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeRout, setActiveRout] = useState("")
    const pathName = window.location.pathname
    useEffect(() => {
        const active = items.find(item => item.key === window.location.pathname)
        setActiveRout(active?.key)
    }, [pathName, items])

    const handleClick = ({_, key}) => {
        setActiveRout(key)
    }

    return (
        <LayoutWrapper>
            <SiderWrapper collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                          theme="light">
                <LogoImgWrapper>
                    <img
                        src="training-logo.png"
                        alt="img"/>
                    <span>Training</span>
                </LogoImgWrapper>
                <ListWrapper>
                    <Menu selectedKeys={activeRout} mode="inline" onClick={handleClick}>
                        {
                            items.map((item) => (
                                <Menu.Item key={item.key}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    <Link to={item.title.toLowerCase()}/>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </ListWrapper>
            </SiderWrapper>
            <Layout className="site-layout">
                <Content>
                    <ChildrenWrapper>
                        {children}
                    </ChildrenWrapper>
                </Content>
            </Layout>
        </LayoutWrapper>
    );
};
export default LayoutAfterLogin;