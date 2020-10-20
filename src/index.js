// import _ from 'lodash';
// 需要配置loader才可以导入css后缀名的文件
// import './style.css';
// import myPic from '../image/pig.jpg';
// import Data from './data.xml';
// import  './print.js';


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

let component = function () {
    let element = document.createElement('input');
    element.type = 'button';
    element.value = '点击我哈哈哈哈';
    // 懒加载引入
    element.onclick = e => import('./print').then(module => {
        let print = module.default;
        print();
    });
    return element;
}



document.body.appendChild(component());