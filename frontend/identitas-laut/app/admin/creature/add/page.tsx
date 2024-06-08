"use client";

import React, { useState } from "react";
import axios from "axios";
import useSWR from "swr";

export default function AddCreature() {
  // State untuk menyimpan data makhluk baru
  const [makhluk, setMakhluk] = useState({
    name_ID: "",
    name_EN: "",
    domain: "",
    kingdom: "",
    phylum: "",
    class: "",
    order: "",
    infraorder: "",
    family: "",
    genus: "",
    species: "",
  });

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMakhluk((prevMakhluk) => ({
      ...prevMakhluk,
      [name]: value,
    }));
  };

  // Fungsi untuk mengirim data ke API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.API}/makhluks`, makhluk);
      alert("Success to add data!");
      // Reset form setelah berhasil menyimpan data
      setMakhluk({
        name_ID: "",
        name_EN: "",
        domain: "",
        kingdom: "",
        phylum: "",
        class: "",
        order: "",
        infraorder: "",
        family: "",
        genus: "",
        species: "",
      });
    } catch (error) {
      console.error("There was an error adding the data!", error);
      alert("Failed to add data!");
    }
  };

  return (
    <div className="m-2">
      <form onSubmit={handleSubmit}>
        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="name_ID">Name Indonesia</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="name_ID"
              id="name_ID"
              value={makhluk.name_ID}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Name ID"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="name_EN">Name English</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="name_EN"
              id="name_EN"
              value={makhluk.name_EN}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Name EN"
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
              value={makhluk.domain}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Domain"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="kingdom">Kingdom</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="kingdom"
              id="kingdom"
              value={makhluk.kingdom}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Kingdom"
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
              value={makhluk.phylum}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Phylum"
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
              value={makhluk.class}
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
              value={makhluk.order}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Order"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="infraorder">Infraorder</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="infraorder"
              id="infraorder"
              value={makhluk.infraorder}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Infraorder"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="family">Family</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="family"
              id="family"
              value={makhluk.family}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Family"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="genus">Genus</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="genus"
              id="genus"
              value={makhluk.genus}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Genus"
            />
          </section>
        </section>

        <section className="flex items-center mb-4">
          <section className="w-1/4">
            <label htmlFor="species">Species</label>
          </section>
          <section className="w-3/4">
            <input
              type="text"
              name="species"
              id="species"
              value={makhluk.species}
              onChange={handleChange}
              className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
              placeholder="Isi Data Species"
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
