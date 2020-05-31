import { Layout, Menu, Breadcrumb  } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DesktopOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
import './BasicLayout.less'

const { SubMenu } = Menu;

class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {}

    changeMenu = (item) => {
        let path = ''
        switch (item.key) {
            case '1-1':
                path = '/manage/blog/add'
                break;
            case '1-2':
                path = '/manage/blog/manage'
                break;
        }
        console.log(item)
        path && this.props.history.push(path)
    }

    render() {
        const { collapsed } = this.state
        const { children } = this.props;
        return (
            <Layout className="basiclayout">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo">吴振吉</div>
                    <Menu onClick={this.changeMenu} theme="dark" mode="inline" defaultSelectedKeys={['1-1']} defaultOpenKeys={['1']}>
                        <SubMenu key="1" icon={<DesktopOutlined />} title="博客">
                            <Menu.Item key="1-1">添加博客</Menu.Item>
                            <Menu.Item key="1-2">管理博客</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background topbar" style={{ padding: 0 }}>
                        {collapsed ? <MenuUnfoldOutlined onClick={this.toggle} className="triggericon" /> :
                            <MenuFoldOutlined onClick={this.toggle} className="triggericon" />}
                    </Header>
                    <Breadcrumb className="navigation">
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className="site-layout-background content">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout