import React from "react";

type WrapperProps = {
  children: JSX.Element;
  small?: boolean;
};

export default function Wrapper({ children, small = false }: WrapperProps) {
  return (
    <div
      className={`${
        small ? "max-w-screen-xl" : "max-w-screen-2xl"
      } mx-auto px-4 sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  );
}
