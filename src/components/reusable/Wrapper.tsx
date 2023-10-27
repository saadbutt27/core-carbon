import React from "react";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-2xl mx-auto">{children}</div>;
}

export default Wrapper;
