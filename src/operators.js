import {interval, fromEvent} from 'rxjs';
import {map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap} from 'rxjs/operators'


// операторы
// const stream$ = interval(1000)
//     .pipe(
//         tap( (v) => console.log('tap', v)),  // выводим все значения
//         // map((v) => v * 3),  // преобразуем значение в значение*3
//         // filter((v) => v % 2 === 0),  // фильтруем значения которые попадут в next
//         // takeWhile( v => v < 7), // получать значения до тех пор пока значения < 7
//         take(5), // ограничить выполнения стрима 5 значениями
//         // takeLast(3)   // получить последних 3 значения (в next) после завершения
//         // scan((acc, val) => acc + val, 0), // суммируются все значения
//         reduce((acc, val) => acc + val, 0), // работает только с завершенным стримом
//     )
//
// stream$.subscribe({
//     next: val => console.log('next', val),
//     complete: () => console.log('complete')
// })



// комбинирование стримов (ивент и интервал)
// fromEvent(document, 'click')
//     .subscribe(() => {
//         const stream$ = interval(1000)
//             .pipe(
//                 tap( (v) => console.log('tap', v)),  // выводим все значения
//                 take(5), // ограничить выполнения стрима 5 значениями
//                 reduce((acc, val) => acc + val, 0), // работает только с завершенным стримом
//             )
//
//         stream$.subscribe({
//             next: val => console.log('next', val),
//             complete: () => console.log('complete')
//         })
//     })

// переключение стримов (ивент и интервал) switchMap

fromEvent(document, 'click')
    .pipe(
        switchMap(event => {   // изменяем стрим ивент на интервал
            return interval(1000)
            .pipe(
                tap( (v) => console.log('tap', v)),
                take(5),
                reduce((acc, val) => acc + val, 0),
            )
        })
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    })
