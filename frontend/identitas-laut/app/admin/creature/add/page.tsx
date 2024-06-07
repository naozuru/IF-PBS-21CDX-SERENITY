'use client';

import React from "react";

export default function AddCreature() {
  return (
    <div className="m-2">

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
            />
          </section>
        </section>

        <section className="flex items-center">
          <section className="w-1/4"></section>
          <section className="w-3/4">
            <button
              className="mr-1 bg-sky-500 px-5 py-3 w-40 rounded-full text-white active:bg-black active:text-sky-300 text-center"
              onClick={() => {
                // Handle add action here
                
              }}
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
      
    </div>
  );
}
