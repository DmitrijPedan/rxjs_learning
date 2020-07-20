import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs';


// Subject (вначале подписка потом next)
// document.addEventListener('click', () => {
//
//     const stream$ = new Subject();
//
//     stream$.subscribe(val => console.log(val))
//
//     stream$.next('first value');
//     stream$.next('second value');
//     stream$.next('third value');
// })

// BehaviorSubject (можно вначале подписку потом next, можно next потом подписку)
// document.addEventListener('click', () => {
//
//     const stream$ = new BehaviorSubject('Initial value');
//
//     // получаем только 'second value'
//     // stream$.next('first value');
//     // stream$.next('second value');
//     // stream$.next('third value');
//
//     stream$.subscribe(val => console.log(val))
//
//     //// получаем по порядку  'Initial value', 'first value', 'second value'
//     stream$.next('first value');
//     stream$.next('second value');
//     stream$.next('third value');
// })


// ReplaySubject (можно подписку потом некст
//                  а можно сначала некст а потом подписку(в тоаком случае запоминается количесво изменений переданных в параметре bufferSize))
 document.addEventListener('click', () => {

     const stream$ = new ReplaySubject(2);

     stream$.next('first value');
     stream$.next('second value');
     stream$.next('third value');

     stream$.subscribe(val => console.log(val))
})