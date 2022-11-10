

import { concat, concatAll, of } from 'rxjs';

/**
 * 按照顺序, 前一个observable完成了再订阅下一个observable并发出值
 * 
 * 如果生产量是首要考虑的, 而不需要关心和生值的顺序, 那么试试用merge来代替
 */

const one = of(1, 2, 3);
const two = of(4, 5, 6);
const three = of(7, 8, 9);



concat(one, two, three).subscribe(console.log)