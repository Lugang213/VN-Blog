var adminController = {};
var itemModel = require('../models/itemModel.js');

// 管理员的首页
adminController.index = function (req, res) {
    //判断用户有没有登录
    // if (!req.session.user) res.redirect('/admin/login');
    // 响应模版
    res.render('admin/index');
}

// 添加栏目 页面
adminController.itemAdd = function (req, res) {
    res.send('respond with a resource');
    console.log('添加栏目')
}


// 暴露 控制
module.exports = adminController;