var globalVariable = 'G1'

function golbalFunction() {
  var localVariable = 'V1'

  console.log('aaaaaaaaaaaaaaaaaaaa')
  console.log(globalVariable)
  console.log(localVariable)

  globalVariable = 'G2'

  console.log(globalVariable)

  function localFunction() {
    var innerLocalVariable = 'L1'

    console.log('bbbbbbbbbbbbbbbbbbb')
    console.log(globalVariable)
    console.log(localVariable)
    console.log(innerLocalVariable)
  }

  localFunction()
}
golbalFunction()
console.log('ccccccccccccccccccccc')
console.log(globalVariable)
console.log(localVariable)
console.log(innerLocalVariable)
