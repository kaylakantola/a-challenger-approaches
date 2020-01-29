## SOURCE

https://projecteuler.net/problem=1

## PROBLEM

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

## SOLUTION

First, get an array of numbers between 1-1000 (not including 1000).
Then, filter that array for values divisible by 3 or 5.
Then, take the result of that filter and find the sum.
