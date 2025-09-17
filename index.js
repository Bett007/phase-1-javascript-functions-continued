function saturdayFun(activity = "roller-skate"){
    let result = `This Saturday, I want to ${activity}!`;
    return result;
    // console.log(result);
}

saturdayFun();

const fn = function() {
  console.log("Yet more razzling");
}

console.log(fn);
fn();

const mondayWork = function(activity = "go to the office") {
    let result =`This Monday, I will ${activity}.`;
    return result;
    console.log(`This Monday, I will ${activity}`);
}

mondayWork();

const g = (function (baseNumber) {
  let result = baseNumber + 3;
  return result;
})(2);

console.log(g);
console.log(typeof(baseNumber));

const array = (function (thingToAdd) {
  const base = 3;
  return [
    function () {
      return base + thingToAdd;
    },
    function () {
      return base;
    },
  ];
})(2);

console.log(array[0]());
console.log(array[1]());

const wrapAdjective = function (flair = "*"){
    return function (msg = "special"){
        return `You are ${flair}${msg}${flair}!`;
    };
}

wrapAdjective("||")("a dedicated programmer");
let result = wrapAdjective("||")("a dedicated programmer");
console.log(result);