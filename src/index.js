import _ from 'lodash';
// 需要配置loader才可以导入css后缀名的文件
import './style.css';
// import myPic from '../image/pig.jpg';
// import Data from './data.xml';
import  './another-module.js';


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

let component = function () {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}



document.body.appendChild(component());