import React from "react";
import { IconType } from "react-icons";
interface ContentProps {
  children: React.ReactNode;
  Icon: IconType;
  tag: string;
}

function Content({ children, Icon, tag }: ContentProps) {
  return (
    <section className="mb-32">
      <span className="bg-transparent text-gray-300 text-xs font-medium inline-flex px-4 py-2 justify-center items-center rounded-full shadow-border">
        <Icon className="text-sm me-2" />
        {tag}
      </span>
      {children}
    </section>
  );
}

export default Content;
