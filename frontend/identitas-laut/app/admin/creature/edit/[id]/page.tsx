"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/components/loading";

// Create a type for the data
type Creature = {
  id: number;
  name_ID: string;
  name_EN: string;
  domain: string;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  infraorder: string;
  family: string;
  genus: string;
  species: string;
};

const EditCreature: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [creature, setCreature] = useState<Creature | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.API}/makhluks/${params.id}`)
      .then((response) => {
        setCreature(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreature((prevCreature) => {
      if (prevCreature) {
        return {
          ...prevCreature,
          [name]: value,
        };
      }
      return prevCreature;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (creature) {
        await axios.put(
          `${process.env.API}/makhluks/${params.id}`,
          creature
        );
        alert("Data updated successfully!");
      }
    } catch (error) {
      console.error("There was an error updating the data!", error);
      alert("Failed to update data!");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!creature) {
    return <div>Data not found!</div>;
  }

  return (
    <div className="m-2 text-sm">
      <form onSubmit={handleSubmit}>
        <section>
          <section className="flex items-center mb-4">
            <section className="w-1/4">
              <label htmlFor="id">ID</label>
            </section>
            <section className="w-3/4">
              <input
                type="text"
                id="id"
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500"
                placeholder="Isi Data ID"
                value={creature.id}
                disabled
              />
            </section>
          </section>

          <section className="flex items-center mb-4">
            <section className="w-1/4">
              <label htmlFor="name_ID">Name Indonesia</label>
            </section>
            <section className="w-3/4">
              <input
                type="text"
                name="name_ID"
                id="name_ID"
                value={creature.name_ID}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Name ID"
                onChange={handleChange}
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
                value={creature.name_EN}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Name EN"
                onChange={handleChange}
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
                value={creature.domain}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Domain"
                onChange={handleChange}
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
                value={creature.kingdom}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Kingdom"
                onChange={handleChange}
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
                value={creature.phylum}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Phylum"
                onChange={handleChange}
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
                value={creature.class}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Class"
                onChange={handleChange}
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
                value={creature.order}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Order"
                onChange={handleChange}
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
                value={creature.infraorder}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Infraorder"
                onChange={handleChange}
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
                value={creature.family}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Family"
                onChange={handleChange}
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
                value={creature.genus}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Genus"
                onChange={handleChange}
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
                value={creature.species}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Species"
                onChange={handleChange}
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
                Update
              </button>
              <button
                className="ml-1 border-2 border-sky-500 px-5 py-3 w-40 rounded-full text-center"
                onClick={() => {
                  window.location.reload();
                }}
                type="button"
              >
                Refresh
              </button>
            </section>
          </section>
        </section>
      </form>
    </div>
  );
};

export default EditCreature;
