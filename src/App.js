import React, { useEffect } from "react";

// Switch 限制只能匹配一个Route路由
// 把 path：/ 放到最后，否则匹配不到
import { Switch, Route, useHistory, useLocation, useParams } from 'react-router-dom';

// 引入antd-mobile
import { Button } from 'antd-mobile';

import routes from '../public/routes'

export default function App() {

    // useHistory钩子可以访问history导航实例
    const history = useHistory();

    let handleClick = (routePath) => {
        history.push(routePath);
    }

    // let routeChange = () => {
    //     // useLocation钩子返回location代表当前url的对象
    //     const location = useLocation();
    //     useEffect(() => {
    //         console.log('路由改变触发事件')
    //     }, [location]);
    // }

    // routeChange()

    function BlogPost() {
        // useParams返回path的参数
        let { name } = useParams();
        let com = routes.find(item => {
            return item.path === '/' + (name ? name : '');
        });
        return com.component();
    }

    return (
        <div>
            <ul>
                {routes.map(item => (
                    <li key={item.path}>
                        <Button type="primary" inline size="small" onClick={() => { handleClick(item.path) }}>{item.name}</Button>
                    </li>
                ))}
            </ul>
            <Switch>
                <Route path="/:name">
                    <BlogPost />
                </Route>
                <Route path='/'>
                    <BlogPost />
                </Route>
            </Switch>
        </div>
    )
}