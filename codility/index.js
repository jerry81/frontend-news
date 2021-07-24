
const el1 = document.querySelector('#output1')
const el2 = document.querySelector('#output2')
const el3 = document.querySelector('#output3')

function s1() {
  el1.innerHTML = 'output1'
}

function s2() {
  el2.innerHTML = 'output2'
}

function s3() {
  el3.innerHTML = 'output3'
}


s1()
s2()
s3()

/* DEMO 
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
let lookup = {}

function setup (A) {
    lookup = {}
    for (let i = 0; i < A.length; i++) {
      lookup[Number(A[i])] = true
    }
}
function solution(A) {
    setup(A)
    let cur = 1
    while (true) {
      if (lookup[cur] !== true) {
        return cur
      }
      cur++
    }
}

const demoTest1 = [1, 3, 6, 4, 1, 2]

const demoTest2 = [1, 2, 3]

const demoTest3 = [-1, -3]

const testSet = [demoTest1, demoTest2, demoTest3]

testSet.forEach((x) => {
  console.log('x is ', x)
  console.log('solution is ', solution(x))
})



/**
 * 
 * Task 1:
 * 
 * 
Example test:   'We test coders. Give us a try?'
Output:
split period  [ 'We test coders', ' Give us a try?' ]
flatened is  [ 'We test coders', ' Give us a try', '' ]
splitPeriod and Q [ [ 'We test coders' ], [ ' Give us a try', '' ] ]
splitE  [ [ 'We test coders' ], [ ' Give us a try' ], [ '' ] ]
flattened2 is  [ 'We test coders', ' Give us a try', '' ]
bySpaces [ [ 'We', 'test', 'coders' ],
  [ '', 'Give', 'us', 'a', 'try' ],
  [ '' ] ]
filtered  [ [ 'We', 'test', 'coders' ], [ 'Give', 'us', 'a', 'try' ], [] ]
OK

Example test:   'Forget  CVs..Save time . x x'
Output:
split period  [ 'Forget  CVs', '', 'Save time ', ' x x' ]
flatened is  [ 'Forget  CVs', '', 'Save time ', ' x x' ]
splitPeriod and Q [ [ 'Forget  CVs' ], [ '' ], [ 'Save time ' ], [ ' x x' ] ]
splitE  [ [ 'Forget  CVs' ], [ '' ], [ 'Save time ' ], [ ' x x' ] ]
flattened2 is  [ 'Forget  CVs', '', 'Save time ', ' x x' ]
bySpaces [ [ 'Forget', '', 'CVs' ],
  [ '' ],
  [ 'Save', 'time', '' ],
  [ '', 'x', 'x' ] ]
filtered  [ [ 'Forget', 'CVs' ], [], [ 'Save', 'time' ], [ 'x', 'x' ] ]
OK

Your test case: ['a a. b b? d d! c  c.?!']
Output:
split period  [ 'a a', ' b b? d d! c  c', '?!' ]
flatened is  [ 'a a', ' b b', ' d d! c  c', '', '!' ]
splitPeriod and Q [ [ 'a a' ], [ ' b b', ' d d! c  c' ], [ '', '!' ] ]
splitE  [ [ 'a a' ], [ ' b b' ], [ ' d d', ' c  c' ], [ '' ], [ '', '' ] ]
flattened2 is  [ 'a a', ' b b', ' d d', ' c  c', '', '', '' ]
bySpaces [ [ 'a', 'a' ],
  [ '', 'b', 'b' ],
  [ '', 'd', 'd' ],
  [ '', 'c', '', 'c' ],
  [ '' ],
  [ '' ],
  [ '' ] ]
filtered  [ [ 'a', 'a' ],
  [ 'b', 'b' ],
  [ 'd', 'd' ],
  [ 'c', 'c' ],
  [],
  [],
  [] ]
Returned value: 2

 * 
 */

function flatten(A) {
  return A.reduce((accum, cur) => {
      return [...accum, ...cur]
  }, [])
}
function solutionTask1(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const splitPeriod = S.split('.')
  const splitPeriodAndQ = splitPeriod.map((item) => {
      return item.split('?')
  })
  const flattened = flatten(splitPeriodAndQ)

  const splitE = flattened.map((item) => {
      return item.split('!')
  })
  const flattened2 = flatten(splitE)
  const bySpaces = flattened2.map(item => item.split(' '))
  const emptyFiltered = bySpaces.map(item => {
      return item.filter((x) => x.length > 0)
  })
  // final reduce
  const max = emptyFiltered.reduce((accum, cur) => {
    const curlen = cur.length
    if (curlen > accum) {
        return curlen
    } else {
        return accum
    }
  }, 0)
  return max
}

/**
 * Task 2
 * 
 * Compilation successful.
 * 
 * 5 fee  applies every month unless three payments totalling more than 100 that month
 *

Example test:   ([100, 100, 100], ['2020-12-31', '2020-12-22', '2020-12-03'])
OK

Example test:   ([180, -50, -25, -25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'])
OK

Example test:   ([1, -1, 0, -105, 1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12'])
OK

Example test:   ([100, 100, -10, -20, -30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08'])
OK

Your code is syntactically correct and works properly on the example test.
Note that the example tests are not part of your score. On submission at least 8 test cases not shown here will assess your solution.
 * 
 */

 // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutionTask2(A, D) {
  const monthStrings = ['01','02','03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  const monthInfo = {} 
  monthStrings.forEach(item => {
      monthInfo[item] = {
          total: 0,
          count: 0
      }
  })
  let total = 0
  for (let i = 0; i < A.length; i++) {
      const curAmt = A[i]
      total+=curAmt
      const curDate = D[i]
      const isPayment = curAmt < 0
      const monthStr = curDate.split('-')[1]
      if (isPayment) {
          monthInfo[monthStr].count++
          monthInfo[monthStr].total+=curAmt
      }
  }
  const v = Object.values(monthInfo)
  const filtered = v.filter(x => {
      return x.total <= -100 && x.count >= 3
  })
  const feeCount = 12 - filtered.length
  const fee = 5 * feeCount
  return total - fee
  // write your code in JavaScript (Node.js 8.9.4)

  // A - amounts
  // D - dates

  // monthly fee 5

  // full year

  // > three payments (<0) in month && total < -100 
}


/**
 * 
 * Task 3 
 * 
 * didn't finish on time
 * 
 */


 // you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function customSort(a,b) {
  const datea = a.date
  const dateb = b.date 
  const dateASplit = datea.split(' ')
  const dateBSplit = dateb.split(' ')
  const dateADate = dateASplit[0].split('-')
  const dateBDate = dateBSplit[0].split('-')
  const dateATime = dateASplit[1].split(':')
  const dateBTime = dateBSplit[1].split(':')
  const [ay, aM, ad] = dateADate
  const [by, bM, bd] = dateBDate
  const [ah, am, asec] = dateATime
  const [bh, bm, bs] = dateBTime
  if (+ay > +by) return 1
  if (+by > +ay) return -1
  if (+aM > +bM) return 1
  if (+bM > +aM) return -1
  if (+ad > +bd) return 1
  if (+bd > +ad) return -1
  if (+ah > +bh) return 1
  if (+bh > +ah) return -1
  if (+am > +bm) return 1
  if (+bm > +am) return -1
  if (+asec > +bs) return 1
  if (+bs > +asec) return -1
}


function sortByIndex(a,b) {
  return a.idx - b.idx
}

function solution3(S) {
  const cities = {}
  const splitNL = S.split(`\n`)
  const splitComma = splitNL.map(x => x.split(','))
  const origAsObjects = splitComma.map((arr, idx) => {
      return {
          loc: arr[1].trim(),
          idx,
          date: arr[2].trim(),
          ext: arr[0].split('.')[1]
      }
  })
  console.log('origAsObjects', origAsObjects)
  origAsObjects.forEach(photo => {
    if (cities[photo.loc] == undefined) {
        cities[photo.loc] = [photo]
    } else {
        cities[photo.loc].push(photo)
    }
  })
  const vals = Object.values(cities)
  vals.forEach(x => {
    x.sort(customSort)
  })
  vals.forEach(loc => {
      const digits = Math.floor(loc.length / 10)
      console.log('loc is ', loc)
      for (let i = 0; i < loc.length; i++) {
        let curFile = loc[i]
        let index = (i+1).toString()
        let newIndex = index
        console.log('index is ', index)

        curFile.name = `${curFile.loc}${newIndex}.${curFile.ext}`
      }
  })
  let final = []
  vals.forEach(loc => {
    final.push(...loc)
  })
  final.sort(sortByIndex)
  console.log('final is ', final)
  // write your code in JavaScript (Node.js 8.9.4)
}

const sortInput1 = `asshole.png, Hamburg, 2012-06-28 12:00:00
bunghole.jpg, Hamburg, 2021-01-01, 13:00:00
third.jpg, London, 2020-01-01, 12:00:00
ham4.png, Hamburg, 2012-06-28 12:00:01
ham5.png, Hamburg, 2012-06-28 12:00:01`

solution3(sortInput1)