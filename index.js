// 主文件（启动文件）
const analyza = require('./analyze');
const config = require('./config');
const request = require('request');
const fs = require('fs');
const path = require('path');

function start () {
    request(config.url, (err, res, body) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!err && res) {
            analyza.findImg(body, downLoadImg) 
        }
    })
};

function downLoadImg (imgSrc, index) {
    let ext = imgSrc.split('.').pop();
    let imgName = path.join(config.imgDir,`${index}.${ext}`);
    console.log(imgName);
    console.log(imgSrc);
    request(imgSrc).pipe(fs.createWriteStream(imgName),{
        'encoding': 'utf8'
    })
};


start();