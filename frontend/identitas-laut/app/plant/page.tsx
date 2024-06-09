"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Loading from "@/app/components/loading";
import SearchPlant from "@/app/components/searchPlant";
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
};

// Create a type for the props
type PlantProps = {
  initialData: Plant[];
};

// Create a type for the component
const ViewPlant: React.FC<PlantProps> = ({ initialData }) => {
  const [data, setData] = useState<Plant[]>(initialData || []);
  const [loading, setLoading] = useState(false);

  // Fetch the data on the client side
  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      // Fetch the data
      axios
        // Fetch the data from the API
        .get(`${process.env.API}/plants/`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        // Handle any errors
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
          setLoading(false);
        });
    }
  }, []);

  // Show a loading message while the data is being fetched
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-2 text-sm">
      <div className="flex justify-center font-bold text-xl mb-2">
        <h1>Plants</h1>
      </div>
      <div className="flex ml-8">
        <SearchPlant setData={setData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8 mt-2">
        {data.map((plant) => (
          <div
            key={plant.id}
            className="border-2 border-gray-400 rounded-lg p-4"
          >
            <h2 className="font-bold text-lg">{plant.name_id}</h2>
            <p className="mb-2">{plant.name_en}</p>

            <p>
              <strong>Domain:</strong> {plant.domain}
            </p>

            <p>
              <strong>Phylum:</strong> {plant.phylum}
            </p>
            <p>
              <strong>SubPhylum:</strong> {plant.phylum}
            </p>
            <p>
              <strong>Class:</strong> {plant.class}
            </p>
            <p>
              <strong>Order:</strong> {plant.order}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPlant;
