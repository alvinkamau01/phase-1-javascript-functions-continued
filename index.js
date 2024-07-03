// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(part1="*"){
    return function part2(value="special"){
        return `You are ${part1}${value}${part1}!`
    }
}