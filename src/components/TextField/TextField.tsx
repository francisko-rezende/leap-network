import TextareaAutosize from "react-textarea-autosize";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  tag: "input" | "textarea";
}

export const TextField = ({ label, id, tag, placeholder }: TextFieldProps) => {
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
        />
      ) : (
        <TextareaAutosize
          placeholder={placeholder}
          id={id}
          name={id}
          className={classes}
          minRows={3}
        ></TextareaAutosize>
      )}
    </div>
  );
};
