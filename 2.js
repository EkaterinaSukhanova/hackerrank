// search two elements in arr, which sum = k


// with searching, O(nlogn) time, O(1) space
function search(arr, k) {
    arr.sort();
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];

        if (sum === k) {
            return [arr[i], arr[j]];
        } else if (sum < k) {
            i++;
        } else {
            j--;
        }
    }

    return [];
}


let arr = [1, 3, 8, 21];
let k = 24;
console.log(search(arr, k));
