// check anagram

function anagram(s) {
    let i = 0;
    let j = s.length - 1;

    let halfLen = Math.floor(s.length / 2);
    while (i < halfLen) {
        if (s[i] !== s[j]) {
            return false;
        }

        ++i;
        --j;
    }
    return true;
}


let s = "abcdcba";
console.log(anagram(s));
