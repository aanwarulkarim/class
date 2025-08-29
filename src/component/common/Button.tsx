import type React from "react";

export const Button = ({
  Title,
  children,
}: {
  Title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        <button>click me {Title}</button>
        {children}
      </div>
    </div>
  );
};
