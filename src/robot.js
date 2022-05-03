function robot(x, y) {
    // lanza error si x o y están fuera de los límites (0 a 10)
    let result = ''
    let moveDown = -1
    let moveLeft = -1
    y += moveDown
    x += moveLeft
    if( x < 0 || x > 10 || y < 0 || y > 0){
        result = 'Error'
    } else {
        result = 'Cool'
    }
    return (result)
  }

  module.exports = robot

