import { useEffect, useState } from "react";

export function useToggle(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [newValue, setNewValue] = useState();
  const [index, setIndex] = useState(-1);
  const [value, setValue] = useState(() => {
    if (!values) return true;
    if (Array.isArray(values)) {
      return values[0];
    } else {
      return true;
    }
  });
  useEffect(() => {
    if (newValue) {
      setValues((p) => [...p, newValue]);
    }
  }, [newValue]);
  useEffect(() => {
    if (Array.isArray(values)) {
      if (index === values.length - 1) {
        setIndex((p) => (p = 0));
      } else {
        setIndex((p) => (p = p + 1));
      }
    }
  }, [value]);
  function toggle(value) {
    if (value) {
      setNewValue(value);
    }
    if (!values) {
      setValue((prevState) => {
        if (prevState) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      if (Array.isArray(values)) {
        setValue((p) => (p = values[index]));
      }
    }
  }

  return [value, toggle];
}
