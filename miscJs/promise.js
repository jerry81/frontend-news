const pr = new Promise((res, _) => {
    setTimeout(() => {
      console.log('promise success after 3 s')
      res()
    }, 3000)
  })
  pr.then(() => {
    console.log('after resolve')
  })
  console.log('immediately after')