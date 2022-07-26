module.exports = function reverse (n) {    
    c=String(Math.abs(n))
    let b=''    
    for (let i=c.length-1; i>=0; i--) {
      console.log(c[i])
      b=b+c[i]
    }
    return Number(b)
}
