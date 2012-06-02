var fs = require('fs');

fs.readFile('index.html', function(err, content) {
    console.log(content);
});
