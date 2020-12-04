const removeFromArray = function(array, arg) {
    combined = [...array, ...arg];
    removed = combined.length((array.length + arg.length) - arg.length);
    newArray.length = removed;
    return newArray;
}

module.exports = removeFromArray


