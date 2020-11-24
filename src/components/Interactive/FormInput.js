/** @jsx jsx */
import { jsx } from "theme-ui";

export default function FormInput({
  id = "someId",
  inputLabel = "Input Label",
  value = "",
  onChange = () => {},
  onBlur = () => {},
  inputTouched,
  inputError,
}) {
  return (
    <div sx={styles.formInputContainer}>
      <label sx={styles.formInputLabel} htmlFor={id}>
        {inputLabel}
      </label>
      <div
        sx={styles.inputError}
        css={inputTouched && inputError && styles.showInputError}
      >
        {inputError}
      </div>
      <input
        sx={styles.formInput}
        css={[
          inputTouched && inputError && styles.formInputError,
          inputTouched && !inputError && styles.formInputValid,
        ]}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        spellCheck="false"
        autoCorrect="false"
      />
    </div>
  );
}

var styles = {
  formInputContainer: {
    width: "100%",
    mb: ["1.35rem", "1.35rem"],
  },

  formInputLabel: {
    fontWeight: 600,
    fontSize: ["1.3rem", "1.4rem"],
    display: "block",
    mb: "2.5px",
    ml: ["5px", null, "4px"],
  },

  formInput: {
    width: "100%",
    fontFamily: "body",
    fontSize: "1.3rem",
    p: "6.5px 5px",
    bg: "lightAccent",
    borderWidth: "1px",
    borderRadius: "5px",
    borderColor: "darkAccent",
    transition: "border-color 0.3s ease-in-out, border-width 0.3s ease-in-out",
    boxShadow: "2px 1.5px 2px rgba(0, 0, 0, 0.2)",

    "&:focus": {
      outlineColor: "lighterBlue",
    },
  },

  formInputError: {
    borderWidth: "1.5px",
    borderColor: "#DF1129",
  },

  formInputValid: {
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
