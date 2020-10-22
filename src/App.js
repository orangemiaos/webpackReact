import React from "react";

// Switch 限制只能匹配一个Route路由
// 把 path：/ 放到最后，否则匹配不到
import { Switch, Route, Link } from 'react-router-dom';

// 引入antd-mobile
import { Button } from 'antd-mobile';

import routes from '../public/routes'

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Default from './components/Default';



export default function App() {
    return (
        <div>
            <ul>
                <li>
                    <Button type="primary" inline size="small" >page1</Button>
                </li>
                <li>
                    <Link to='/page2'>page2</Link>
                </li>
                <li>
                    <Link to='/page3'>page3</Link>
                </li>
                <li>
                    <Link to='/Default'>Default</Link>
                </li>
            </ul>
            <Switch>
                {/* {routes.map(item => {
                <Route path='/page1' ></Route>
            })} */}
                <Route path='/page1'>
                    <Page1 />
                </Route>
                <Route path='/page2'>
                    <Page2 />
                </Route>
                <Route path='/page3'>
                    <Page3 />
                </Route>
                <Route path='/'>
                    <Default />
                </Route>
            </Switch>
        </div>
    )
}