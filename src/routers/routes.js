import { lazy } from 'react';

import Defalut from '../components/Default';

const routes = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: Defalut,
        children: [
            {
                path: '/page1',
                name: 'path1',
                component: lazy(() => import('../components/SideMenu'))
            },
            {
                path: '/page2',
                name: 'path2',
                component: lazy(() => import('../components/Content'))
            },
            {
                path: '/page3',
                name: 'path3',
                component: lazy(() => import('../components/Page3'))
            },
        ]
    },
]



export default routes;