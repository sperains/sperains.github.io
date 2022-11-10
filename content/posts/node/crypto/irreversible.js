import * as crypto from 'crypto';
var str = 'abcd';
var password = 'hello';
var data1 = crypto.createHash('md5').update(str).digest('hex');
console.log(data1);
