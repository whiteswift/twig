/* 
  This will split an array into equal pieces based on the spacing parameter
  Anything left placed into the last array position
  e.g. groupArrayElements([1, 2, 3, 4, 5], 3); 
  result: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
  
  More examples: 
  groupArrayElements([1, 2, 3, 4, 5, 6], 3);
  [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

  groupArrayElements([1, 2, 3, 4, 5, 6, 7], 2);
  [ [ 1, 2, 3, 4 ], [ 5, 6, 7 ] ]

  groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3);
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
*/

type TList = number[];
type TOutput = number[][];

export const groupArrayElementsBySpacing = (list: TList, spacing: number): TOutput => {
  const listRemainder = list.length % spacing;

  return listRemainder > 0
    ? arrayChunker(list, Math.ceil(list.length / spacing)) // chunk by nearest sensible number using the average
    : arrayChunker(list, list.length / spacing); // list can be chunked equally
}

export const arrayChunker = (list: TList, chunkBy: number) => {
  // Splits an array into chunkBy number given
  const output: TOutput = [];

  for (let i = 0; i < list.length; i += chunkBy) {
    output.push(list.slice(i, chunkBy + i))
  }

  return output;
}
