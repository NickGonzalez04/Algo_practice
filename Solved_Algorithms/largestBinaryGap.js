// TASK:
// binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // Convert our N to its binary sequence (Ex. 15 === 1111);
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = N.toString(2);
    var startIndexFromEnd = binStr.length-1;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
        if (binStr.charAt(startIndexFromEnd) != '0') {
            break;
        }
    }
    for (var i = startIndexFromEnd - 1; i >= 0; i--) {
        if (binStr.charAt(i) == '0') {
            curMaxGap = curMaxGap+1;
        } else {
            if (curMaxGap > maxGap) {
                maxGap = curMaxGap;
            }
            curMaxGap = 0;
        }
    }
    return maxGap;
}


console.log(solution(23));
