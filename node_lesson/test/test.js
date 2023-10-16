new Promise(resolve => {
    resolve()
})
.then(() => Promise.resolve())
.then(()=>{
  console.log( 4 )
})


new Promise(resolve => {
  resolve()
})
.then(() => {
  console.log( 1 )
})
.then(()=>{
  console.log( 2 )
})
.then(()=>{
  console.log( 3 )
})
.then(()=>{
  console.log( 5 )
})