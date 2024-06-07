"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/components/loading";

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

const EditMakhluk = () => {
  const [makhluk, setMakhluk] = useState<Makhluk | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchMakhluk = async () => {
      if (id) {
        try {
          const res = await axios.get(`http://localhost:8000/api/makhluks/${id}`);
          setMakhluk(res.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data from API:", error);
          setLoading(false);
        }
      }
    };
    fetchMakhluk();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (makhluk) {
      const { name, value } = e.target;
      setMakhluk((prev) => ({ ...prev, [name]: value } as Makhluk));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (makhluk) {
      try {
        await axios.put(`http://localhost:8000/api/makhluks/${makhluk.id}`, makhluk);
        router.push("/admin/creature");
      } catch (error) {
        console.error("There was an error updating the data!", error);
      }
    }
  };

   // Show a loading message while the data is being fetched
   if (loading) {
    return <Loading />;
  }

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Edit Makhluk</h1>
        {makhluk && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name_ID"
              >
                Nama ID
              </label>
              <input
                type="text"
                name="name_ID"
                value={makhluk.name_ID}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name_EN"
              >
                Nama EN
              </label>
              <input
                type="text"
                name="name_EN"
                value={makhluk.name_EN}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Add other fields similarly */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
  );
};

export default EditMakhluk;
