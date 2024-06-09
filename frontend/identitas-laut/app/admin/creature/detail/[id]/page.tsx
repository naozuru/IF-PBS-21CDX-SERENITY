"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/app/components/loading";
import Image from "next/image";

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
  image: string;
  description: string;
};

const DetailCreature: React.FC<{ params: { id: string } }> = ({ params }) => {
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

  if (loading) {
    return <Loading />;
  }

  if (!creature) {
    return <div>Data not found!</div>;
  }

  return (
    <div className="m-4">
      <div className="flex justify-center font-black text-xl mb-4">
        <h1>Detail Creature</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <Image
            src={`/${creature.image}`}
            width={300}
            height={300}
            alt="Picture of the creature"
          />
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-3">
            <label>Nama Indonesia:</label>
            <h1 className="col-span-2">{creature.name_ID}</h1>
          </div>
          <div className="grid grid-cols-3">
            <label>Nama English:</label>
            <h1 className="col-span-2">{creature.name_EN}</h1>
          </div>
          <br />
          <div>
            <label>Deskripsi:</label>
            <h1>{creature.description}</h1>
          </div>
        </div>

        <div className="inline-grid">
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Domain:
            </label>
            <h1>{creature.domain}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Kingdom:
            </label>
            <h1>{creature.kingdom}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Phylum:
            </label>
            <h1>{creature.phylum}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Class:
            </label>
            <h1>{creature.class}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Order:
            </label>
            <h1>{creature.order}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Infraorder:
            </label>
            <h1>{creature.infraorder}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Family:
            </label>
            <h1>{creature.family}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Genus:
            </label>
            <h1>{creature.genus}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Species:
            </label>
            <h1>{creature.species}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCreature;
