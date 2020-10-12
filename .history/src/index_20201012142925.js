import _ from 'lodash';
// 需要配置loader才可以导入css后缀名的文件
import './style.css';
import myPic from '../image/pig.jpg';

let component = function () {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let icon = new Image;
    return element;
}

document.body.appendChild(component());