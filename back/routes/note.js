var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/getNote', (req, res, next) => {
    res.send('this is getNote')
});

router.get('/getNoteList', (req, res, next) => {
    let files = fileNoteList('./note')
    res.json(files);
});

function fileNoteList(path) {
    let result = [];
    let files = fs.readdirSync(path);
    files.forEach(val=>{
        if(val.endsWith('.md')){
            result.push(val.split('.md')[0])
        }
    })
    return result;
}
module.exports = router;
