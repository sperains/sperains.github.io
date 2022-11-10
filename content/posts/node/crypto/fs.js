import { createReadStream, createWriteStream } from 'fs';
import * as readline from 'readline';
var rs = createReadStream('./tsconfig.json');
var ws = createWriteStream('./test.json');
readline.createInterface({
    input: rs,
    output: ws
});
