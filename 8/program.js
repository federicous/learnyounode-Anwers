

var http = require('http');
var url = process.argv[2];

var dat = [];

http.get(url,function(res){
        
        res.pipe(process.stdin);
        /**
        res.setEncoding('utf8');
        res.on('error',function(err){
                console.log(err);
        });
        res.on('data',function(data){
        	//console.log('data event.....');
        	dat.push(data);
        });

        res.on('end',function(){
        	console.log(dat.join('').length);
        	console.log(dat.join(''));
        });
        **/
});
