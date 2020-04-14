import { Dispatch, SetStateAction, ChangeEvent } from "react";

export const handleChange = (setter: Dispatch<SetStateAction<string>>) => (
  event: ChangeEvent<HTMLInputElement>
) => {
  const value = event.target?.value;
  if (typeof value === "string") {
    setter(value);
  }
};
