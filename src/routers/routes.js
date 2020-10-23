import { lazy } from 'react';

const routes = [
    {
        path: '/page1',
        name: 'path1',
        component: lazy(() => import('../components/Page1'))
    },
    {
        path: '/page2',
        name: 'path2',
        component: lazy(() => import('../components/Page2'))
    },
    {
        path: '/page3',
        name: 'path3',
        component: lazy(() => import('../components/Page3'))
    },
    {
        path: '/',
        name: '首页',
        exact: true,
        component: lazy(() => import('../components/Default'))
    }
]



export default routes;