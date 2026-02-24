import { SpeedInsights } from "@vercel/speed-insights/next"
import React from "react";
import { Navbar1 } from "./components/Navbar1";
import { Header5 } from "./components/Header5";
import { Header78 } from "./components/Header78";
import { Layout1 } from "./components/Layout1";
import { Layout423 } from "./components/Layout423";
import { Layout141 } from "./components/Layout141";
import { Stats10 } from "./components/Stats10";
import { Contact13 } from "./components/Contact13";
import { Footer4 } from "./components/Footer4";
import { Stats10B } from "./components/Stats10B";

export default function Page() {
  return (
    <div>
      <Navbar1 />
      <Header5 />
      <Stats10B />
      <Header78 />
      <Layout1 />
      <Stats10 />
      <Layout423 />
      <Layout141 />
      <Contact13 />
      <Footer4 />
    </div>
  );
}
