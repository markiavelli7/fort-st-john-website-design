/** @jsx jsx */
import { jsx } from "theme-ui";

export default function FormInput({
  id = "someId",
  inputLabel = "Input Label",
  value = "",
  onChange = () => {},
  onBlur = () => {},
  rows = "5",
  cols = "33",
  inputTouched,
  inputError,
}) {
  return (
    <div sx={styles.textareaContainer}>
      <label sx={styles.textareaLabel} htmlFor={id}>
        {inputLabel}
      </label>
      <div
        sx={styles.inputError}
        css={inputTouched && inputError && styles.showInputError}
      >
        {inputError}
      </div>
      <textarea
        sx={styles.textareaInput}
        css={[
          inputTouched && inputError && styles.textareaInputError,
          inputTouched && !inputError && styles.textareaInputValid,
        ]}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        cols={cols}
        spellCheck="false"
        autoCorrect="false"
      />
    </div>
  );
}

var styles = {
  textareaContainer: {
    width: "100%",
    mb: ["1rem", null, "1.35rem"],
  },

  textareaLabel: {
    fontWeight: 600,
    fontSize: ["1.3rem", "1.4rem"],
    display: "block",
    mb: ["2.5px", null, "4px"],
    ml: "5px",
  },

  textareaInput: {
    width: "100%",
    fontSize: "1.25rem",
    fontFamily: "body",
    p: "7.5px 5px",
    bg: "lightAccent",
    borderWidth: "1px",
    borderRadius: "5px",
    borderColor: "darkAccent",
    transition: "border-color 0.3s ease-in-out, border-width 0.3s ease-in-out",

    "&:focus": {
      outlineColor: "lighterBlue",
    },
  },

  textareaInputError: {
    borderWidth: "1.5px",
    borderColor: "#DF1129",
  },

  textareaInputValid: {
    borderWidth: "1.5px",
    borderColor: "#0F7344",
  },

  inputError: {
    fontSize: "1rem",
    ml: "5px",
    fontWeight: "500",
    color: "denotiveError",
    height: "0",
    transition: "all 0.25s ease-in-out",
  },

  showInputError: {
    height: "1.1rem",
    mt: "-1px",
    mb: "4px",
  },
};
