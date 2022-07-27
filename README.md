# Task

Given an array of length >= 0, and a positive integer N, 
return the contents of the array divided into N
equally sized arrays.
Where the size of the original array cannot be divided equally by N, 
the final part should have a length equal to the remainder.
Example pseudo-code:
groupArrayElements([1, 2, 3, 4, 5], 3); 
[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

# To install and run

`npm i`

`npm run start`

# Notes

## How and why it works

We need to treat the list differently depending on whether the list can be chunked equally or not, so making a conditional to check this first seems sensible.

If it is not easily chunked, then we take the average using the length of the array, round it up to the nearest integer, and use that to chunk instead.

## Code

If the team is not comfortable with the groupArrayElementsBySpacing() code 
or considers it less readable, we can use the below code instead.

```
// if list does not divide equally
if (listRemainder > 0) {
  // Gets the nearest viable chunk using the average
  const chunkBy = Math.ceil(list.length / spacing);

  return arrayChunker(list, chunkBy)
} else {
  // array can be split into equal parts, so chunk the array equally using spacing
  const chunkBy = list.length / spacing;

  return arrayChunker(list, chunkBy)
}
```