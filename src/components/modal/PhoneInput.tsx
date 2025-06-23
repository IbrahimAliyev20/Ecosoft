"use client";

import React from "react";

interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PhoneInput({
  value,
  onChange,
  ...props
}: PhoneInputProps) {
  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "");

    let formatted = "";
    if (digits.startsWith("994")) {
      let rest = digits.substring(3);
      formatted = "+994";

      if (rest.length > 0) {
        formatted += " ";
      }

      if (rest.length > 0) {
        // (XX)
        formatted += `(${rest.substring(0, 2)}`;
        if (rest.length > 2) {
          formatted += ")";
        }
      }

      if (rest.length > 2) {
        formatted += ` ${rest.substring(2, 5)}`;
      }
      if (rest.length > 5) {
        formatted += ` ${rest.substring(5, 7)}`;
      }
      if (rest.length > 7) {
        formatted += ` ${rest.substring(7, 9)}`;
      }
    } else {
      formatted = "+" + digits;
      if (digits.length > 0) {
        formatted = "+" + digits.substring(0, 3) + (digits.length > 3 ? ` (${digits.substring(3,5)})` : '') + (digits.length > 5 ? ` ${digits.substring(5,8)}` : '') + (digits.length > 8 ? ` ${digits.substring(8,10)}` : '') + (digits.length > 10 ? ` ${digits.substring(10,12)}` : '');
      }

      if (!input.startsWith('+') && formatted.length > 0) {
        formatted = '+' + formatted.replace(/^\+/, '');
      }
    }
    return formatted.trim();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cursorPosition = e.target.selectionStart;

    let cleanedValue = inputValue.replace(/[^0-9+]/g, "");

    if (cleanedValue.indexOf("+") > 0) {
      cleanedValue = cleanedValue.replace(/\+/g, "");
      cleanedValue = "+" + cleanedValue;
    }

    if (!cleanedValue.startsWith("+")) {
      cleanedValue = "+" + cleanedValue;
    }

    const formattedValue = formatPhoneNumber(cleanedValue);

    let newCursorPosition = cursorPosition;
    if (cursorPosition !== null) {
      const oldLength = value.length;
      const newLength = formattedValue.length;
      const lengthDiff = newLength - oldLength;
      newCursorPosition = cursorPosition + lengthDiff;
    }

    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: formattedValue,
        name: props.name || "phone", 
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);

    requestAnimationFrame(() => {
        if (e.target && newCursorPosition !== null) {
            e.target.setSelectionRange(newCursorPosition, newCursorPosition);
        }
    });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: "+994",
          name: props.name || "phone",
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && e.currentTarget.selectionStart === 1 && e.currentTarget.value.startsWith("+")) {
      e.preventDefault();
    }
  };

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      placeholder={props.placeholder || "+994 (XX) XXX XX XX"}
      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
      required
      {...props}
    />
  );
}