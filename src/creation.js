import {of, from, Observable, fromEvent, range, timer, interval} from 'rxjs';
import {scan, map} from 'rxjs/operators'


// создание стрима с помощью операторов

// const stream$ = of(1,2,3,4,5);
// stream$.subscribe(val => {
//     console.log(val)
// });

// const array$ = from([1,2,3,4,56,0,78]).pipe(
//     scan((acc, value) => acc.concat(value), [])
// );
// array$.subscribe(val => {
//     console.log(val);
// })





// создание стрима вручную с класса Observable

// const stream$ = new Observable(obs => {
//
//     obs.next('First value')
//
//     setTimeout(() => obs.next('After 1000 ms'), 1000)
//
//     setTimeout(() => obs.complete(), 1500)
//
//     setTimeout(() => obs.error('My error'), 2000)
//
//     setTimeout(() => obs.next('After 3000 ms'), 3000)
//
// });

// основной вид записи
// stream$.subscribe(
//     val => console.log(val),
//     (err) => console.log(err),
//     () => console.log('complete')
// )

// альтернативный вид записи
// stream$.subscribe({
//     next(val) {
//         console.log(val)
//     },
//     error(err) {
//         console.log(err)
//     },
//     complete() {
//         console.log('complete')
//     }
// })


// canvas rxjs
// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(event => {
//         event.ctx.fillRect(event.x, event.y, 2, 2)
//     })
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas');
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })


//interval
// const subs = interval(500).subscribe(val => console.log(val));
// setTimeout(() => {
//     subs.unsubscribe()
// }, 5000)

//timer
// timer(2500).subscribe(v => console.log(v))

//range
// range(42, 10).subscribe(val => console.log(val));

