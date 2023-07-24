const isPalindrome = (value) => {
    let reverse = value.split('').reverse().join('');

    return reverse === value;
}

console.log(isPalindrome('racecar'))