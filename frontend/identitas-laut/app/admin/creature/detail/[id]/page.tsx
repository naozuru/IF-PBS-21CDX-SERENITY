import React from "react";

export default function detailCreature() {
  return (
    <div>
      <h1>Detail Creature</h1>
      <div>
        <label>Id</label>
        <input type="text" name="id" value="1" disabled />
      </div>
      <div>
        <label>Name ID</label>
        <input type="text" name="name" value="Fish" disabled />
      </div>
      <div>
        <label>Name EN</label>
        <input type="text" name="name" value="Fish" disabled />
      </div>
      <div>
        <label>Family</label>
        <input type="text" name="family" value="Fish" disabled />
      </div>
    </div>
  );
}
