import React from "react";
import { PageHeader } from "./components/PageHeader";
import { Gallery4 } from "./components/Gallery4";
import { Gallery4_1 } from "./components/Gallery4_1";
import { Gallery24 } from "./components/Gallery24";
import { Footer4 } from "./components/Footer4";

export default function Page() {
  return (
    <div>
      <PageHeader />
      <Gallery4 />
      <Gallery4_1 />
      <Gallery24 />
      <Footer4 />
    </div>
  );
}
