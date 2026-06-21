 "use client";

import { Provider } from "react-redux";
import  { store } from "@/store";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("🔥 Providers component rendered");

  return <Provider store={store}>{children}</Provider>;
}