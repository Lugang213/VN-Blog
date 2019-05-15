var mongoose = require('../configs/db_config.js');
var articleSchema = new mongoose.Schema({
    itemId: {
        type: 'ObjectId',
        ref: 'item'
    },
    title: String, //	标题
    author: String, //	作者
    content: String, //	内容
    keywords: String, //	关键字
    description: String, //	描述
    imgurl: String, //	封面路径
    ctime: {
        type: Date, //  创建时间
        default: new Date()
    },
});

var articleModel = mongoose.model('article', articleSchema);

module.exports = articleModel;