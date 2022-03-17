// Remove an unlimited amount of elements from a given array

const removeFromArray = function(array, ...removedElements) {
    for (let i = 0; i <= removedElements.length -1; i++) {
        let element = removedElements[i];
        if (array.includes(element)) {
            let removeIndex = array.indexOf(element);
            array.splice(removeIndex, 1);
        }
    }
    return array;
};

