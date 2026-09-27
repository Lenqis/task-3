let numbers = [1, 3, 5, 3, 1, 2, 0, -3, 4, 5, 5, 5, 5]
function getUniqueSorted(numbers) {
    numbers = Array.from(new Set(numbers));
    return numbers.sort((a, b) => a - b)
    
}
const result = getUniqueSorted(numbers)
console.log(result)