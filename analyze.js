// 分析文件
const cheerio = require('cheerio');
function findImg (dom, callback) {
    let $ = cheerio.load(dom);
    $('img').each(function(index, element) {
        let imgSrc;
        var str = new RegExp("http");
        const imgBehind = $(this).attr('src');
        if (str.test(imgBehind)) {
            imgSrc = imgBehind;
        } else {
            const ingFront = 'http:';
            imgSrc = `${ingFront}${imgBehind}`
        }
        callback(imgSrc, index);
    })
};

module.exports = {
    findImg
};