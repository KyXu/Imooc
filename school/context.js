/*pet = {
  words:'...',
  speak: function() {
    console.log(this.words)
    console.log(this === pet)
  }
}
pet.speak()


function pet(words) {

  this.words = words
  console.log(this.words)
  console.log(this)
}
pet('adsdfsfsf')
*/
/*
function Pet(words) {

  this.words= words
  this.speak = function() {console.log(this.words)
  console.log(this)
  }
}

var cat = new Pet('Miao')
cat.speak()
*/

function Pet(words){
  this.words = words
  this.speak = function() {
    console.log(this.words)
  }
}

function Dog(words){
  Pet.call(this,words)
}

var dog = new Dog('wang')
dog.speak()
