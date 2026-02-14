import React from "react";
import { Headers } from "../UI/Headers";
import { Footers } from "../UI/Footers";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-black text-white">
      <Headers />

      {/* CONTENT */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      <Footers />
    </div>
  );
};
