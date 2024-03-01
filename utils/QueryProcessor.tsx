export default function QueryProcessor(query: string): string {
  function sumNumbersFromString(text: string): number {
    const numbers: number[] = text.match(/\d+/g)?.map(Number) || []; // Extract and convert numbers
    return numbers.reduce((acc, cur) => acc + cur, 0); // Sum up the numbers
  }

  function findLargestNumber(text: string): number {
    const numbers: number[] = text.match(/\d+/g)?.map(Number) || []; // Extract and convert numbers
    if (numbers.length === 0) {
        return NaN; // If no numbers found, return NaN
    }
    return Math.max(...numbers); // Find the maximum value among the numbers
  }

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "jesse"
    );
  }

  if (query.toLowerCase().includes("largest")) {
    return (
      findLargestNumber(query).toString()
    );
  }

  if (query.toLowerCase().includes("plus")) {
    return (
      sumNumbersFromString(query).toString()
    );
  }

  return "";
}
