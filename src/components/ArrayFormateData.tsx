import { useState } from "react";

const ArrayFormData = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState<"array" | "string">("string");
  const [parsedValue, setParsedValue] = useState<any>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    try {
      let parsed;
      if (inputType === "array") {
        parsed = JSON.parse(inputValue); // Expecting array-like string
        if (!Array.isArray(parsed)) throw new Error("Not an array");
      } else {
        parsed = inputValue; // Keep the string as is
      }
      setParsedValue(parsed);
    } catch {
      setParsedValue("Invalid input");
    }
  };

  return (
    <div className="p-4">
      <text>Select Input Type</text>
      <button
        onClick={() => setInputType(inputType === "array" ? "string" : "array")}
      >
        Toggle Input Type (Current: {inputType})
      </button>

      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={
          inputType === "array" ? "Enter array in JSON format" : "Enter string"
        }
      />
      <button onClick={handleSubmit}>Submit</button>

      <text className="mt-10">Parsed Value: {JSON.stringify(parsedValue)}</text>
    </div>
  );
};

export default ArrayFormData;
