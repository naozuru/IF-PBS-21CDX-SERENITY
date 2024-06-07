"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
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
  const [creature, setCreature] = useState<Creature[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.API}/makhluks/${params.id}`)
      .then((response) => {
        setCreature([response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-2 text-sm">
      {creature.length === 0 ? (
        <h1>Data Tidak Ditemukan !</h1>
      ) : (
        creature.map((item: Creature, index: number) => (
          <section key={index}>
            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_id">ID</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_id"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500"
                  placeholder="Isi Data ID"
                  defaultValue={item.id}
                  disabled
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_name_id">Name Indonesia</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_name_id"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Name ID"
                  defaultValue={item.name_ID}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_name_en">Name English</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_name_en"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Name EN"
                  defaultValue={item.name_EN}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_domain">Domain</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_domain"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Domain"
                  defaultValue={item.domain}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_kingdom">Kingdom</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_kingdom"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Kingdom"
                  defaultValue={item.kingdom}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_phylum">Phylum</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_phylum"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Phylum"
                  defaultValue={item.phylum}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_class">Class</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_class"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Class"
                  defaultValue={item.class}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_order">Order</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_order"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Order"
                  defaultValue={item.order}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_infraorder">Infraorder</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_infraorder"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Infraorder"
                  defaultValue={item.infraorder}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_family">Family</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_family"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Family"
                  defaultValue={item.family}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_genus">Genus</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_genus"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Genus"
                  defaultValue={item.genus}
                />
              </section>
            </section>

            <section className="flex items-center mb-4">
              <section className="w-1/4">
                <label htmlFor="txt_species">Species</label>
              </section>
              <section className="w-3/4">
                <input
                  type="text"
                  name=""
                  id="txt_species"
                  className="w-full border-2 border-slate-300 px-3 py-2 rounded-lg outline-none focus:border-sky-500 text-black"
                  placeholder="Isi Data Species"
                  defaultValue={item.species}
                />
              </section>
            </section>

            <section className="flex items-center">
              <section className="w-1/4"></section>
              <section className="w-3/4">
                <button
                  className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center"
                  onClick={() => {
                    // Handle edit action here
                    axios
                      .put(`${process.env.API}/makhluks/${params.id}`, {
                        name_ID: document.getElementById("txt_name_id")?.value,
                        name_EN: document.getElementById("txt_name_en")?.value,
                        domain: document.getElementById("txt_domain")?.value,
                        kingdom: document.getElementById("txt_kingdom")?.value,
                        phylum: document.getElementById("txt_phylum")?.value,
                        class: document.getElementById("txt_class")?.value,
                        order: document.getElementById("txt_order")?.value,
                        infraorder: document.getElementById("txt_infraorder")?.value,
                        family: document.getElementById("txt_family")?.value,
                        genus: document.getElementById("txt_genus")?.value,
                        species: document.getElementById("txt_species")?.value,
                      })
                      .then(() => {
                        alert("Data berhasil diubah !");
                      })
                      .catch((error) => {
                        console.error("Error updating data from API:", error);
                      });
                  }}
                >
                  Update
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
          </section>
        ))
      )}
    </div>
  );
};

export default EditCreature;
