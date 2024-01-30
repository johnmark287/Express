let p = new Promise((res, rej) => {
    let a = 1 + 1
    if (a == 3) {
        res('success')
    } else {
        rej('Fail')
    }
})

p.then((mes) => {
    console.log('This is in the then ' + mes);
}).catch((mes) => {
    console.log('This is in the catch ' + mes);
})
