const asyncTaskResolved = (taskName, delay) => {
    return new Promise((res) => {
        setTimeout(()=>res(`${taskName} resolved with delay of ${delay}ms.`), delay)
    })
}

const asyncTaskRejected = (taskName, delay) => {
    return new Promise((res, rej) => {
        setTimeout(()=>rej(`${taskName} rejected with delay of ${delay}ms.`), delay)
    })
}

function promiseAll() {
    Promise.all([
        asyncTaskResolved('Task 1', 1000),
        asyncTaskResolved('Task 2', 2000),
        asyncTaskRejected('Task 3', 3000)
    ]).then((res) => res.map((res) => console.log('Promise All', res))).catch((error)=>console.log('Promise All', error))
}

function promiseAllSettled() {
    Promise.allSettled([
        asyncTaskResolved('Task 1', 1000),
        asyncTaskResolved('Task 2', 2000),
        asyncTaskRejected('Task 3', 3000)
    ]).then((res) => res.map((res) => console.log('Promise All Settled', res))).catch((error)=>console.log('Promise All Settled', error))
}

function promiseRace() {
    Promise.race([
        asyncTaskResolved('Task 1', 1000),
        asyncTaskResolved('Task 2', 2000),
        asyncTaskRejected('Task 3', 500)
    ]).then((res) => console.log('Promise Race', res)).catch((error)=>console.log('Promise Race', error))
}

function promiseAny() {
    Promise.any([
        asyncTaskResolved('Task 1', 1000),
        asyncTaskResolved('Task 2', 2000),
        asyncTaskRejected('Task 3', 500)
    ]).then((res) => console.log('Promise Any', res)).catch((error)=>console.log('Promise Any', error))
}


promiseAll();
promiseAllSettled();
promiseRace();
promiseAny();