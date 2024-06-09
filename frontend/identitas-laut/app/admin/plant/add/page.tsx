"use client";

import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";

export default function AddPlant() {
  // State untuk menyimpan data plant baru
  const [plant, setPlant] = useState({
    name_id: "",
    name_en: "",
    domain: "",
    phylum: "",
    subphylum: "",
    class: "",
    order: "",
  });

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlant((prevPlant) => ({
      ...prevPlant,
      [name]: value,
    }));
  };

  // Fungsi untuk mengirim data ke API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.API}/plants`, plant);
      alert("Success to add data!");
      // Reset form setelah berhasil menyimpan data
      setPlant({
        name_id: "",
        name_en: "",
        domain: "",
        phylum: "",
        subphylum: "",
        class: "",
        order: "",
      });
    } catch (error) {
      console.error("There was an error adding the data!", error);
      alert("Failed to add data!");
    }
  };

  return (
    <div className="m-2">
      <div className="flex justify-center font-bold text-xl mb-5">
        <h1>Add Plant</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="name_id">Name Indonesia</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="name_id"
              id="name_id"
              value={plant.name_id}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Name Indonesia"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="name_en">Name English</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="name_en"
              id="name_en"
              value={plant.name_en}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Name English"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="domain">Domain</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="domain"
              id="domain"
              value={plant.domain}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Domain"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="phylum">Phylum</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="phylum"
              id="phylum"
              value={plant.phylum}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Phylum"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="subphylum">SubPhylum</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="subphylum"
              id="subphylum"
              value={plant.subphylum}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data SubPhylum"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="class">Class</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="class"
              id="class"
              value={plant.class}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Class"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="order">Order</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="order"
              id="order"
              value={plant.order}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Order"
            />
          </section>
        </section>

        <section className="flex items-center">
          <section className="w-1/4"></section>
          <section className="w-3/4">
            <button
              className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center"
              type="submit"
            >
              Submit
            </button>
            <button
              className="ml-1 border-2 border-sky-500 px-5 py-3 w-40 rounded-full text-center"
              onClick={() => {
                // Handle refresh action here
                window.location.reload();
              }}
            >
              Refresh
            </button>
          </section>
        </section>
      </form>
    </div>
  );
}
