
import * as crypto from 'crypto'


let str = 'abcd';
let password = 'hello'

let data1 = crypto.createHash('md5').update(str).digest('hex')

console.log(data1)