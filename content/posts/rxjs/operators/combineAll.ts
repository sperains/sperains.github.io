import { combineLatest, combineLatestAll, interval, map, take, timer } from 'rxjs';


// // 每秒发出值, 只取前两个
// const source = interval(1000).pipe(take(2));

// // 从source发起的每个值映射成取前5个值
// const example = source.pipe(
//   map(val => interval(1000).pipe(
//     map(i => `Result (${val}): ${i}`), take(5)
//   ))
// )



// example.pipe(combineLatestAll()).subscribe(console.log)


const timerOne = timer(1000, 4000);
const timeTwo = timer(2000, 4000);
const timeThree = timer(3000, 4000);

const combined = combineLatest([timerOne, timeTwo, timeThree], (one, two, three) => {
  return `Timer One Latest: ${one} ,
          Timer Two Latest: ${two} ,
          Timer Three Latest: ${three}
  `
}).subscribe(console.log)



