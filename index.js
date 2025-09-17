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
    console.log(`This Monday, I will ${activity}`);
}

mondayWork("go home and sleep");