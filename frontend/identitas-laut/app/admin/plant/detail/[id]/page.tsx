"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/app/components/loading";
import Image from "next/image";

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
  family: string;
  genus: string;
  species: string;
  habitat: string;
  distribusi: string;
  ekologi: string;
  image: string;
  description: string;
};

const DetailPlant: React.FC<{ params: { id: string } }> = ({ params }) => {
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

  if (loading) {
    return <Loading />;
  }

  if (!plant) {
    return <div>Data not found!</div>;
  }

  return (
    <div className="m-4">
      <div className="flex justify-center font-black text-xl mb-4">
        <h1>Detail Plant</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <Image
            src={`/${plant.image}`}
            width={300}
            height={300}
            alt="Picture of the plant"
          />
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-3">
            <label>Nama Indonesia:</label>
            <h1 className="col-span-2">{plant.name_id}</h1>
          </div>
          <div className="grid grid-cols-3">
            <label>Nama English:</label>
            <h1 className="col-span-2">{plant.name_en}</h1>
          </div>
          <br />
          <div>
            <label>Deskripsi:</label>
            <h1>{plant.description}</h1>
          </div>
          <br />
          <div>
            <label>Ekologi:</label>
            <h1>{plant.ekologi}</h1>
          </div>
        </div>

        <div className="inline-grid">
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Domain:
            </label>
            <h1>{plant.domain}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Phylum:
            </label>
            <h1>{plant.phylum}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              SubPhylum:
            </label>
            <h1>{plant.subphylum}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Class:
            </label>
            <h1>{plant.class}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Order:
            </label>
            <h1>{plant.order}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Family:
            </label>
            <h1>{plant.family}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Genus:
            </label>
            <h1>{plant.genus}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Species:
            </label>
            <h1>{plant.species}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Habitat:
            </label>
            <h1>{plant.habitat}</h1>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="" className="mr-5">
              Distribusi:
            </label>
            <h1>{plant.distribusi}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPlant;
