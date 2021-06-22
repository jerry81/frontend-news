try { 
    console.log('funct as obj', asObj())
} catch (e) {
    console.error('error has occured', e)
}

console.log('with decl', withDecl())

const asObj = function () {
    console.log('i am in asObj')
}

function withDecl() {
    console.log('i am in withDecl')
}