import { useState } from "react"

function compute(input: string) {
  const words = input.split(/\s+/g);

  type MemoType = undefined | number | [number, string] | string;

  // memo can be:
  // undefined - no input yet
  // number (including NaN)
  // [number, operator]
  // error message

  console.log(words);

  const result = words.reduce((memo: MemoType, word): MemoType => {
    console.log({memo, word});

    if (word == "") return memo;
    if (typeof memo == "string") 
      return memo;
    if (typeof memo == "number")
      return [memo, word];

    const value = parseFloat(word);

    if (isNaN(value))
      return "Could not parse " + word + " as a number";

    if (typeof memo == "undefined") return value;

    if (memo instanceof Array)  {
      switch (memo[1]) {
        case "+":
          return memo[0] + value;
        default:
          return "Unknown operator: " + memo[1] + " (" + memo.join(" ") + " " + word + ")";
      }
    }

    return `Invalid operation: memo: ${typeof memo}, word: ${word}`;
    
  }, undefined);

  if (typeof result == "undefined")
    return "Nothing";

  if (typeof result == "object" && result instanceof Array)
    return "Expected operand: "  + " (" + result.join(" ") + ")";

  return result;
}

export default function Calculator() {
  const [input, setInput] = useState("1 + 1");

  const result = compute(input);

  return <div>
    <input value={input} onChange={e => setInput(e.target.value)} />
    <pre>{result}</pre>
  </div>
}