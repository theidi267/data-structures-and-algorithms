

let binarySearch = function(arr, key) {

    let start = 0;

    let end = arr.length - 1;

    while (start <= end) {
        
        const mid = start + Math.floor(arr.length/2);
        
        if (arr[mid] === key) {
            return mid;
        }
        if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

// module.exports = binarySearch;
