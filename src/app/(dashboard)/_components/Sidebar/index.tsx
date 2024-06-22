import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className=" fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-primary">
      + Sidebar
    </aside>
  );
};

export default Sidebar;
