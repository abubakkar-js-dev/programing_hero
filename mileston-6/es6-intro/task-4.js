
const maxNumberOfTwoArr = (arr1,arr2) =>{
    const newArr = [...arr1,...arr2];
    return Math.max(...newArr);
}

console.log(maxNumberOfTwoArr([2,13,4],[7,5,3,9]));