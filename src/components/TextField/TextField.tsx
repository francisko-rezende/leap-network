import { Dispatch, SetStateAction } from "react";
import TextareaAutosize from "react-textarea-autosize";

type TextFieldProps = {
  placeholder?: string;
  label: string;
  id: string;
  tag: "input" | "textarea";
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const TextField = ({
  label,
  id,
  tag,
  placeholder,
  value,
  setValue,
}: TextFieldProps) => {
  const classes = "rounded-lg border border-leap-gray-700 px-3 py-2";
  const isTextInput = tag === "input";

  return (
    <div className="grid gap-2">
      <label htmlFor={id}>{label}</label>
      {isTextInput ? (
        <input
          placeholder={placeholder}
          type="text"
          id={id}
          name={id}
          className={classes}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <TextareaAutosize
          placeholder={placeholder}
          id={id}
          name={id}
          className={classes}
          minRows={3}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></TextareaAutosize>
      )}
    </div>
  );
};
