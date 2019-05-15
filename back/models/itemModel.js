var mongoose = require('../configs/db_config.js');
var itemSchema = new mongoose.Schema({
    name: String, // 栏目名称
    info: String, // 栏目简介
    itemRouter: String, //栏目路由
    ctime: { //  创建时间
        type: Date,
        default: new Date()
    },
    order: Number // 排序
});

var itemModel = mongoose.model('item', itemSchema);

module.exports = itemModel;