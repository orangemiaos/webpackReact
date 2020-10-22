import Page1 from '../src/components/Page1';
import Page2 from '../src/components/Page2';
import Page3 from '../src/components/Page3';
import Default from '../src/components/Default';

const routes = [
    { path: '/page1', component: Page1, name: 'path1' },
    { path: '/page2', component: Page2, name: 'path2' },
    { path: '/page3', component: Page3, name: 'path3' },
    { path: '/', component: Default, name: 'default' },
]



export default routes;