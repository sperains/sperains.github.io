


import { concatAll, delay, fromEvent, Observable, scan, share, switchMapTo, withLatestFrom } from 'rxjs'

const requestOne = of('first').pipe(delay(500))
const requestTwo = of('second').pipe(delay(800))
const requestThree = of('three').pipe(delay(1100))
const requestFour = of('fourth').pipe(delay(1400))
const requestFive = of('fifth').pipe(delay(1700))

const $ = (id) => document.getElementById(id)

const loadButton = $('load');
const progressBar = $('progress');
const content = $('data');

const updateProgress = progressRatio => {
  progressBar.style.width = 100 * progressRatio + '%'
  if(progressRatio === 1) {
    progressBar.className += ' finished';
  }else {
    progressBar.className = progressBar.className.replace(' finished', '')
  }
}

const updateContent = newContent => {
  content.innerHTML += newContent
}

const displayData = data => {
  updateContent(`<div class="content-item">${data}</div> `)
}


const obserables = [
  requestOne,
  requestTwo,
  requestThree,
  requestFour,
  requestFive
];

const array$ = from(obserables);
const requests$ = array$.pipe(concatAll());
const click$ = fromEvent(loadButton, 'click');

const progress$ = click$.pipe(switchMapTo(requests$), share());

const count$ = array$.pipe(count());

const ratio$ = progress$.pipe(
  scan(current => current + 1, 0),
  withLatestFrom(count$, (current, count) => current / count)
)

click$.pipe(switchMapTo(ratio$)).subscribe(updateProgress)


progress$.subscribe(displayData);

