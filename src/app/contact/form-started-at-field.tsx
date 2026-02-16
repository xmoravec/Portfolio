"use client";

import { useEffect, useRef } from "react";

export function FormStartedAtField() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = Date.now().toString();
    }
  }, []);

  return <input ref={inputRef} type="hidden" name="formStartedAt" defaultValue="" readOnly />;
}
