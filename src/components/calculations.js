const add = (x, y) => {
    var result = '';

    if (Number.isInteger(x) && Number.isInteger(y)) {
        result = x + y;
    } else {
        result = 'Please enter integers';
    }
    return result;
};

const divide = (x, y) => {
    var result = '';

    if (Number.isInteger(x) && Number.isInteger(y)) {
        result = Math.round(x / y);
    } else {
        result = 'Please enter integers';
    }
    return result;
};
  

export {
    add, divide
}