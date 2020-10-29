// Suspense 页面载入前等待页面
import React, { Suspense } from "react";

// Switch 限制只能匹配一个Route路由
// 把 path：/ 放到最后，否则匹配不到
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes'


const App = () => (
    <Router>
        <Switch>
            {routes.map((route, index) => {
                if (route.redirect) {
                    return (<div>redirect</div>);
                }
                return (
                    <Route
                        key={route.path || index}
                        path={route.path}
                        render={() => {
                            return (
                                <Suspense fallback={<h1>加载中...</h1>}>
                                    <route.component route={route}>{route.children}</route.component>
                                </Suspense>
                            )
                        }}
                    />
                )
            })}
        </Switch>
    </Router>
)

export default App;