// src/components/ui/toast.tsx
"use client";

import { useState } from "react";

export type ToastProps = {
  title: string;
  description?: string;
  action?: JSX.Element;
};

export type ToastActionElement = JSX.Element;

const Toast = ({ title, description, action }: ToastProps) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-4 right-4 bg-white border shadow-lg rounded-lg p-4"
      onClick={() => setIsOpen(false)}
    >
      <h4 className="font-bold">{title}</h4>
      {description && <p>{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
};

export default Toast;
