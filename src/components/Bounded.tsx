import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Bounded = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) => {
  const C = Comp as any;
  return (
    <C
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </C>
  );
};
