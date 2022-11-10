
import { defer, fromEvent, interval  } from "rxjs";


const clickOrInterval = defer(function() {
  return Math.random() > 0.5 ? fromEvent(document, 'click'): interval(1000)
})

clickOrInterval.subscribe(x => console.log(x))