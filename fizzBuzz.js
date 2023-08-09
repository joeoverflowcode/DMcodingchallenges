for (let i = 1; i <= 50; i++ ){ // This instantiates i, sets it to 1 and goes to 50, and counts up 
    if(i%3 ==0 && i %5==0)console.log('Fizzbuzz'); // This was moved from bottom row because program did not read FizzBuzz because of order of operations
    else if(i%3 ==0) console.log('Fizz'); // %  operator with 3
    else if(i%5 == 0) console.log('Buzz'); // % modulo operator with 5
    console.log(i); //console log runs through i with else if conditions
}