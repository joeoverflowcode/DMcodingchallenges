let numArray = [1, 4, 11, 2, 37, -4];


let smallest = numArray[0];

let largest = numArray[0];

for (let i = 0; i <numArray.length; i++){
    //console.log(numArray[i])
    if(numArray[i] < smallest){
        smallest=numArray[i]
    }

    if(numArray[i] > largest){
        largest = numArray[i]
    }
}


console.log(`In this array [${numArray}], the smallest number is: ${smallest} and the largest number = ${largest}`)

