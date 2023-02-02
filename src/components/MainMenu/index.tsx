import { useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import {  Menu } from "antd";

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
  } from "@ant-design/icons";
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];


const items: MenuItem[] =[
    {
        label:'栏目1',
        key:'/page1',
        icon:<PieChartOutlined />
    },
    {
        label:'栏目2',
        key:'/page2',
        icon:<DesktopOutlined />
    },
    {
        label:'栏目3',
        key:'page301',
        icon:<UserOutlined />,
        children:[
            {
                label:'栏目301',
                key:'/page3/page301',
            },
            {
                label:'栏目302',
                key:'/page3/page302',
            }
        ]
    },
]

const Comp: React.FC = () => {
    const menuClick = (e:{key:string})=>{
         navigateTo(e.key)
      }
     
      
    const navigateTo = useNavigate()
    const currentRoute = useLocation()
    let firstOpenKey:string = ''
    items.forEach((e:any)=>{
        if (e!.children) {
            e.children.find((_e:any)=>{
                if (_e?.key === currentRoute.pathname) {
                    firstOpenKey = e?.key as string
                }
              }) 
        }
    })
    
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleChange = (keys:string[])=>{
        setOpenKeys([keys[keys.length-1]])
      }

    return (
        <Menu
        theme="dark"
        defaultSelectedKeys={[currentRoute.pathname]}
        mode="inline"
        items={items}
        onClick={menuClick}
        onOpenChange={handleChange}
        openKeys={openKeys}
      />
    )
}

export default Comp