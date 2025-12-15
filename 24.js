
const some = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
    }

    return sum;
};

console.log(some([11, 22, 33, 44, 55]));

