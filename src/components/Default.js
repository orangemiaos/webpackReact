import React from 'react';
// 引入antd-mobile
import { Button } from 'antd-mobile';

import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
function Default() {

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
        let match = useRouteMatch("/:slug");
        console.log('match', match);
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
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Default;