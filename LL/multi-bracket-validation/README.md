# Matching Brackets
## Challenge

  Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

  Round Brackets : ()
  Square Brackets : []
  Curly Brackets : {}

### Examples

    Input	Output
    {}	TRUE
    {}(){}	TRUE
    ()[[Extra Characters]]	TRUE
    (){}[[]]	TRUE
    {}{Code}[Fellows](())	TRUE
    [({}]	FALSE
    (](	FALSE


## Solution

  ![whiteboard13](whiteboard13.jpg)

### Explanation

- line 2: declare our stack and initialize it to an empty array
- line 3: declare our open parentheses map and intialize it to an object with open parentheses as keys and closed parentheses as values
- line 4: declare our closed parentheses map and intialize it to an object with closed parentheses as keys and true as the values
- lines 6 - 13: loop through the input string
- line 7: declare a temporary chr variable and initialize it to the character in the input string at the index of the iteration counter
- line 8: check if the chr is an open parenthesis symbol
- line 9: if an open chr, push the chr onto the stack and keep looping through the string
- line 10: check if the chr is a closed parenthesis symbol
- line 11: if a closed chr, check if the matching closed parenthesis of the last element that is popped off the stack (the last open parenthesis symbol found in the string) is not equal to the current chr
if the chr isn’t the matching closed parenthesis for the last open parenthesis from the stack, then we return false because we have an imbalanced input
- line 15: return a coerced boolean value — the result of evaluating the expression stack.length === 0 — which will return true if the stack has been emptied with no imbalanced parentheses, and false otherwise

## Collaboration

  On this lab, we worked with Jen

## Acknowledgement

  Inspired by Clark Feusier