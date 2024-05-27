import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import GetCreature from "./get";

export default function adminCreature() {
  return (
    <div>
      <GetCreature initialData={[]}/>
    </div>
  );
}
