"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/components/loading";

// Create a type for the data
type Plant = {
  id: number;
  name_id: string;
  name_en: string;
  domain: string;
  phylum: string;
  subphylum: string;
  class: string;
  order: string;
};

const EditPlant: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.API}/plants/${params.id}`)
      .then((response) => {
        setPlant(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlant((prevPlant) => {
      if (prevPlant) {
        return {
          ...prevPlant,
          [name]: value,
        };
      }
      return prevPlant;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (plant) {
        await axios.put(`${process.env.API}/plants/${params.id}`, plant);
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

  if (!plant) {
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
                value={plant.id}
                disabled
              />
            </section>
          </section>

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
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Name id"
                onChange={handleChange}
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
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Name en"
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
                value={plant.domain}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Domain"
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
                value={plant.phylum}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Phylum"
                onChange={handleChange}
              />
            </section>
          </section>

          <section className="flex items-center mb-4">
            <section className="w-1/4">
              <label htmlFor="subphylum">Subphylum</label>
            </section>
            <section className="w-3/4">
              <input
                type="text"
                name="subphylum"
                id="subphylum"
                value={plant.subphylum}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Subphylum"
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
                value={plant.class}
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
                value={plant.order}
                className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                placeholder="Isi Data Order"
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

export default EditPlant;
