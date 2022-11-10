
import { map, concatAll, interval, of, concat, from, take } from "rxjs";



const samplePromise = (val: any) => new Promise(reslove => reslove(val));

// const source = interval(2000)

// const example = source.pipe(
//   map(val => samplePromise(val)),
//   concatAll()
// ).subscribe(console.log)




const obj1 = interval(1000).pipe(take(5))
const obj2 = interval(500).pipe(take(2))
const obj3 = interval(2000).pipe(take(1))

const source = of(obj1, obj2, obj3);

const example = source.pipe(concatAll());

example.subscribe(console.log)

