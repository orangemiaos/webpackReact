import _ from 'lodash';
// 需要配置loader才可以导入css后缀名的文件
import './style.css';
import myPic from '../image/pig.jpg';
import Data from './data.xml';

console.log(loadXML());
let component = function () {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // let icon = new Image;
    // icon.src= myPic;
    // element.appendChild(icon);
    return element;
}

function loadXML() {
    var xmlDoc;
    try { //IE
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    } catch (e) { //firefox,opera
        xmlDoc = document.implementation.createDocument("", "", null);
    }
    try {
        xmlDoc.asyc = false; //是否异步调用
        xmlDoc.load("./data.xml"); //文件路径
    } catch (e) { //chrome
        var xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET", "./data.xml", false); //创建一个新的http请求，并指定此请求的方法、URL以及验证信息
        xmlDoc = xmlhttp.responseXML;
    }
    return xmlDoc;
}

document.body.appendChild(component());