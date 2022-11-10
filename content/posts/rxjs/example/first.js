import { range, filter, map, fromEvent } from 'rxjs';
range(1, 200).pipe(filter(function (x) { return x % 2 === 1; }), map(function (x) { return x + x; })).subscribe(function (x) { return console.log(x); });
fromEvent(document, 'click').subscribe(function () { return console.log('Clicked'); });
