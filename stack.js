const pop = (stack) => {
    const popped = stack[stack.length - 1];
    stack.length = stack.length - 1;

    return popped;
}

const push = (stack, item) => {
    stack[stack.length] = item;
    
    return stack;
}

const stack = [];

push(stack, 1);
push(stack, 2);
push(stack, 3);
push(stack, 4);
push(stack, 5);
console.log(stack)

pop(stack, 5);
console.log(stack)