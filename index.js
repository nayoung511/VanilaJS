const calculator = {
  plus: function(a, b){
    return a+b;
  },
  sub: function (a, b){
    return a-b;
  },
  mul: function (a, b){
    return a*b;
  },
  div: function (a, b){
    return a/b;
  },
  pow: function (a, b){
    return a**b;
  }
}

const plus = calculator.plus(5, 6);
const sub = calculator.sub(10,4);
const mul = calculator.mul(3,4);
const div = calculator.div(6,2);
const pow = calculator.pow(2,3);

console.log(plus)
console.log(sub)
console.log(mul)
console.log(div)
console.log(pow)
