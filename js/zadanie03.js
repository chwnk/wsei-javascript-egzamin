function bigestSumOfTwoElements(array) {
let highest;
let secondHighest;
let sortedArray = array.sort();

    if(array.length == 0){
    return false;
}else if(array.length == 1){
    return array[0];
}else{
    return (sortedArray[sortedArray.length-1]+sortedArray[sortedArray.length-2]);
}
}

console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));