

import { copyFile, cp } from "fs/promises";
import { createReadStream, createWriteStream } from 'fs'
import * as readline from 'readline'


let rs =  createReadStream('./tsconfig.json')
let ws = createWriteStream('./test.json')

readline.createInterface({
  input: rs,
  output: ws
})

