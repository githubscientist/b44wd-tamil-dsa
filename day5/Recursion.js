/*
    Recursion: Algorithm

    Recursion is a function that calls itself!
*/

// ordinary function / non-recursive function
// function sayHello(){
//     console.log('hello');
// }

// sayHello();

// recursive function
// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*
    Recursion Tree

    sayHello()
        - console.log('hello')
        - sayHello()
            - console.log('hello')
            - sayHello()
                - console.log('hello')
                - sayHello()
                    - console.log('hello')
                    - sayHello()
                        ...
                        ...
*/

// function sayHello(times) {
//     if (times == 0) return;
//     console.log('hello');
//     sayHello(times-1);
// }

// sayHello(3);

/*
    Recursion Tree

    sayHello(3)
        - times = 3
        - console.log('hello')
        - sayHello(2)
            - times = 2
            - console.log('hello')
            - sayHello(1)
                - times = 1
                - console.log('hello')
                - sayHello(0)
                    - times = 0; 0 == 0; true; return
*/

// /*
//     Exercise: Write a recursion function to print the values from N to 1
// */

// function print(N) {
//     if (N == 0) return;
//     console.log(N);
//     print(N-1);
// }

// print(5);

/*
    print(5)
        - N = 5; 5 == 0; false;
        - log(5) #5
        - print(4)
            - N = 4; 4 == 0; false;
            - log(4) #4
            - print(3)
                - N = 3; 3 == 0; false;
                - log(3) #3
                - print(2)
                    - N = 2; 2 == 0; false;
                    - log(2) #2
                    - print(1)
                        - N = 1; 1 == 0; false;
                        - log(1) #1
                        - print(0)
                            - N = 0; 0 == 0; true; return
    
    print(5)
*/

/*
    Exercise: Write a recursion function to print the values from 1 to N
*/

// function print(N) {
//     if (N == 0) return;

//     print(N - 1);
    
//     console.log(N);
// }

// print(5);

/*
    print(5)
        - N = 5; 5 == 0; false ❌
        - print(4) ✅
            - N = 4; 4 == 0; false ❌
            - print(3) ✅
                - N = 3; 3 == 0; false ❌
                - print(2) ✅
                    - N = 2; 2 == 0; false ❌
                    - print(1) ✅
                        - N = 1; 1 == 0; false ❌
                        - print(0) ✅
                            - N = 0; 0 == 0; true; return ✅
                        - log(1) 🕒
                    - log(2) 🕒
                - log(3) 🕒
            - log(4) 🕒
        - log(5) 🕒

    
    
    print(5)
*/

/*
    Problem: Write a recursion function to calculate and print the sum of first N natural numbers.

    Input: 5
    Output: 15

    Explanation: 1 + 2 + 3 + 4 + 5 = 15

    Input: 3
    Output: 6

    Explanation: 1 + 2 + 3 = 6
*/

// Recurrence Relation
/*
    Let S(N) = ?

    For N = 1, S(1) = 1
    For N = 2, S(2) = 1 + 2 = 3
    For N = 3, S(3) = 1 + 2 + 3 = 6
    For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    backward substitution:

    Base Case:

    For N = 1, S(1) = 1

    Case N>1:

    For N = 2, S(2) = S(1) + 2 = 3
    For N = 3, S(3) = S(2) + 3 = 6
    For N = 4, S(4) = S(3) + 4 = 10
    For N = 5, S(5) = S(4) + 5 = 15

    Generalize:
    For N = 1, S(N) = 1
    For N > 1, S(N) = S(N-1) + N

    S(5) = 1 + 2 + 3 + 4 + 5 = 15

*/

function S(N) {
    // For N = 1, S(N) = 1
    if (N == 1) return 1;
    // For N > 1, S(N) = S(N-1) + N
    return S(N - 1) + N;
}

console.log(S(10));

/*
    Recursion Tree: S(N)

    S(4)
        - N = 4; 4 == 1; false
        - return S(3) + 4
                  |__ N = 3; 3 == 1; false
                    - return S(2) + 3
                              |__ N = 2; 2 == 1; false
                                - return S(1) + 2
                                          |_ N = 1; 1 == 1; true; return 1
*/

/*
    Write a recursive function to find the factorial of a number.

    5! = 5 * 4 * 3 * 2 * 1 = 120

    F(N) = ?

    For N = 0, F(0) = 1
    For N = 1, F(1) = 1

    For N = 2, F(2) = 2 * 1 = 2
    For N = 3, F(3) = 3 * 2 * 1 = 6
    For N = 4, F(4) = 4 * 3 * 2 * 1 = 24
    For N = 5, F(5) = 5 * 4 * 3 * 2 * 1 = 120


    BS:

    For N = 0, F(0) = 1
    For N = 1, F(1) = 1

    For N = 2, F(2) = 2 * F(1) = 2
    For N = 3, F(3) = 3 * F(2) = 6
    For N = 4, F(4) = 4 * F(3) = 24
    For N = 5, F(5) = 5 * F(4) = 120

    For 0>=N<=1, F(N) = 1
    For N>1, F(N) = N * F(N-1)
*/

function F(N) {
    // For 0>=N<=1, F(N) = 1
    if (N == 0 || N == 1) return 1;
    // For N>1, F(N) = N * F(N-1)
    return N * F(N - 1);
}

console.log(F(5));

/*

    Recursion Tree: F(N)

    F(5)
        - return 5 * F(4)
                      |__ return 4 * F(3)
                                      |__ return 3 * F(2)
                                                      |__ return 2 * F(1)
                                                                      |__ return 1
*/