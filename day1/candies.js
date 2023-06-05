// returns true if the totalCandies is greater than or equal to all the other kid's candies except the index i
// and false otherwise
// var checkIsGreater = function(totalCandies, candies, i){
//     // assume that the totalCandies is greater than all the other kid's candies
//     let assumption = true;

//     // iterate/loop over the candies array <- index except the index i
//     for(let index=0; index<candies.length; index++){
//         // except the index i
//         if(index != i){
//             // for every candies[index]
//             // check if the totalCandies < candies[index]
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 assumption = false;
//             }
//         }
//     }
    
//     // return the assumption
//     return assumption;
// }

// var checkIsGreater = function(totalCandies, candies, i){
//     // assume that the totalCandies is greater than all the other kid's candies
//     let assumption = true;

//     // iterate/loop over the candies array <- index except the index i
//     for(let index=0; index<candies.length; index++){
//         // except the index i
//         if(index != i){
//             // for every candies[index]
//             // check if the totalCandies < candies[index]
//             if(totalCandies < candies[index]){
//                 // if true => update the assumption
//                 assumption = false;
//                 break;
//             }
//         }
//     }
    
//     // return the assumption
//     return assumption;
// }

// var checkIsGreater = function(totalCandies, candies, i){
//     // iterate/loop over the candies array <- index except the index i
//     for(let index=0; index<candies.length; index++){
//         // except the index i
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// var checkIsGreater = function(totalCandies, candies){
//     // iterate/loop over the candies array <- index except the index i
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// Time Complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // intiailize an empty boolean array <- result
//     let result = [];

//     // loop over candies array <- i: 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every kid @ candies[i] 
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         //  check if the totalCandies is greater than or equal to all the other kid's candies
//         if(checkIsGreater(totalCandies, candies)){
//             // if true => push 'true' to the result array
//             result.push(true);
//         } else{
//             // else => push 'false' to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result boolean array
//     return result;

// };

// time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // intiailize an empty boolean array <- result
//     let result = [];

//     // loop over candies array <- i: 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every kid @ candies[i] 
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // find the greatest candy
//         let greatestCandy = Math.max(...candies);

//         //  check if the totalCandies is greater than or equal to all the other kid's candies
//         if(totalCandies >= greatestCandy){
//             // if true => push 'true' to the result array
//             result.push(true);
//         } else{
//             // else => push 'false' to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result boolean array
//     return result;

// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => {
//         return (candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => {
//         return (candy + extraCandies >= greatestCandy);
//     });
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};

/*
    1. Problem Understanding

    n kids with candies
    how many candies each kid has ? candies

    candies = [2, 3, 5, 1, 3]
           i  [0][1][2][3][4]
    
    extraCandies = 3

    result = [true, true, true, false, true] -> length: n
            i [0]    [1]    [2] [3]     [4]

    kid @ i = 0
        totalCandies = candies[i] + extraCandies
                     = candies[0] + extraCandies
                     = 2 + 3
                     = 5 >= [3, 5, 1, 3]
                            [1][2][3][4]
        5 >= 3 [true]
        5 >= 5 [true]
        5 >= 1 [true]
        5 >= 3 [true]
    
    kid @ i = 1
        totalCandies = 3 + 3
                     = 6 >= [2, 5, 1, 3]
                            [0][2][3][4]
        true, true, true, true => true
    
     kid @ i = 2
        totalCandies = 5 + 3
                     = 8 >= [2, 3, 1, 3]
                            [0][1][3][4]
        true, true, true, true => true

    kid @ i = 3
        totalCandies = 1 + 3 = 4 >= [2, 3, 5, 3]
                                    [0][1][2][4]
    
    kid @ i = 4
        totalCandies = 3 + 3 = 6 >= [2, 3, 5, 1]
                                    [0][1][2][3]

    2. Algorithm
        Brute Force

        a. intiailize an empty boolean array <- result

        b. loop over candies array <- i: 0 to candies.length - 1

            c. for every kid @ candies[i] 
            d. find the totalCandies = candies[i] + extraCandies

            e. check if the totalCandies is greater than or equal to all the other kid's candies
                f. if true => push 'true' to the result array
                g. else => push 'false' to the result array
        
        h. return the result boolean array
*/