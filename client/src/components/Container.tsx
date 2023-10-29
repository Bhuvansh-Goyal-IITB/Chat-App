import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Container({ children }: IProps) {
  return (
    <div className="w-full min-h-screen max-h-screen bg-[#313131] flex flex-col justify-between">
      {children}
    </div>
  );
}

export default Container;
