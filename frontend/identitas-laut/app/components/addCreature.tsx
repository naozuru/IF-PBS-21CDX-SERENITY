import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import Link from "next/link";

export default function AddCreature() {
  return (
    <div>
      <button className="bg-teal-300 rounded-md mr-3">
        <Link href="../admin/creature/add" className="px-2.5 py-1.5 inline-flex items-center space-x-1 text-base">
          <Icon icon="basil:add-solid" width={24} />
          <span>Add</span>
        </Link>
      </button>
    </div>
  );
}
