// search two elements in arr, which sum = k, using hashtable


// using map, O(n) time, O(n) space
function search(arr, k) {
    let map = new Map();
    arr.forEach(function (item, i, arr) {
        map.set(item, i);
    });

    let resultElements = [];
    for(let i = 0; i < arr.length; ++i) {
        let secondEl = k - arr[i];

        if (map.has(secondEl)) {
            if (map.get(secondEl) !== i) {
                resultElements.push(arr[i]);
                resultElements.push(secondEl);
                break;
            }
        }
    }

    return resultElements;
}


let arr = [1, 3, 8, 21];
let k = 24;
console.log(search(arr, k));
