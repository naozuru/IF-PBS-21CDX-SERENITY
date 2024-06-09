"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Loading from "@/app/components/loading";
import SearchCreature from "@/app/components/searchCreature";
import Image from "next/image";

// Create a type for the data
type Makhluk = {
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

// Create a type for the props
type MakhlukProps = {
  initialData: Makhluk[];
};

// Create a type for the component
const ViewCreature: React.FC<MakhlukProps> = ({ initialData }) => {
  const [data, setData] = useState<Makhluk[]>(initialData || []);
  const [loading, setLoading] = useState(false);

  // Fetch the data on the client side
  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      // Fetch the data
      axios
        // Fetch the data from the API
        .get("http://localhost:8000/api/makhluks")
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
        <h1>Creatures</h1>
      </div>
      <div className="flex ml-8">
        <SearchCreature setData={setData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8 mt-2">
        {data.map((makhluk) => (
          <div
            key={makhluk.id}
            className="border-2 border-gray-400 rounded-lg p-4"
          >
            <h2 className="font-bold text-lg">{makhluk.name_ID}</h2>
            <p className="mb-2">{makhluk.name_EN}</p>
            <p>
              <strong>Domain:</strong> {makhluk.domain}
            </p>
            <p>
              <strong>Kingdom:</strong> {makhluk.kingdom}
            </p>
            <p>
              <strong>Phylum:</strong> {makhluk.phylum}
            </p>
            <p>
              <strong>Class:</strong> {makhluk.class}
            </p>
            <p>
              <strong>Order:</strong> {makhluk.order}
            </p>
            <p>
              <strong>Infraorder:</strong> {makhluk.infraorder}
            </p>
            <p>
              <strong>Family:</strong> {makhluk.family}
            </p>
            <p>
              <strong>Genus:</strong> {makhluk.genus}
            </p>
            <p>
              <strong>Species:</strong> {makhluk.species}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCreature;
