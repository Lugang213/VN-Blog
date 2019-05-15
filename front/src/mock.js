const Mock = require('mockjs');
const Random = Mock.Random;

const produceNewsData = function () {
  let articles = [];
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 20),
      info: Random.csentence(40, 60),
      thumbnail_pic_s: Random.dataImage('200x100', 'Hello Mock.js!'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}

Mock.mock('/news/index', 'post', produceNewsData);
