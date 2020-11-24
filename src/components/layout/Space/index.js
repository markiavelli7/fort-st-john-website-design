/** @jsx jsx */
import { jsx } from "theme-ui";

export function One({ style }) {
  var styles = {
    spacer: {
      py: ["0.15rem"],
      ...style,
    },
  };

  return <div sx={styles.spacer} />;
}

export function Two({ style }) {
  var styles = {
    spacer: {
      py: ["0.5rem"],
      ...style,
    },
  };

  return <div sx={styles.spacer} />;
}

export function Three({ style }) {
  var styles = {
    spacer: {
      py: ["0.75rem"],
      ...style,
    },
  };

  return <div sx={styles.spacer} />;
}

export function Four({ style }) {
  var styles = {
    spacer: {
      py: ["1rem"],
      ...style,
    },
  };

  return <div sx={styles.spacer} />;
}

export function Five({ style }) {
  var styles = {
    spacer: {
      py: ["1.25rem"],
      ...style,
    },
  };

  return <div sx={styles.spacer} />;
}
