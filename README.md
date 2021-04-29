# frontend-news

repository to practice js techniques and libs

### generators 

syntax:
function *functionName() {
    yield console.log('done')
}

usage:
const x = functionName()
x.next()

iterators from generators must be iterated with for of ... not for in

### for in vs for of 

for in iterates through properties of object
for of (new to es6) loops through iterable