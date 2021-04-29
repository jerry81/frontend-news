function *hello() {
    yield console.log('done')
    yield console.log('second yield')
}

const x = hello()
x.next()
setTimeout(() => {
    x.next()
}, 1000)
