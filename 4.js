// revert array
function swap(arr, i, j) {
    let n = arr[j];
    arr[j] = arr[i];
    arr[i] = n;
}


function revert(arr) {
    let halfLen = Math.floor(arr.length / 2);

    for(let i = 0; i < halfLen; ++i) {
        swap(arr, i, arr.length - i - 1);
    }

    return arr;
}


let arr = [1, 2, 3, 4, 5];
console.log(revert(arr));
