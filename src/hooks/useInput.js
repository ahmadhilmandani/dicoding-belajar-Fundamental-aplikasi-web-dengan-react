import { useState } from "react";
export function useInput(defaultValue) {

  const [value, setValue] = useState(defaultValue);
  const handleValueChange = (event) => setValue(event.target.value);
  return [value, handleValueChange];
}