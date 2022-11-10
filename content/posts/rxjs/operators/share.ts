import { mapTo, share, tap, timer } from "rxjs";



const source = timer(1000)

const example = source.pipe(
  tap(() => console.log('***SIDE EFFECT***')),
  mapTo('***RESULT***')
)


const sharedExample = example.pipe(share())

sharedExample.subscribe(console.log)
sharedExample.subscribe(console.log)