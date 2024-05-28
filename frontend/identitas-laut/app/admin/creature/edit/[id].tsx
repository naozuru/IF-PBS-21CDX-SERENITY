"use client";

import { GetServerSideProps } from "next";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/app/admin/layout";

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

type EditMakhlukProps = {
  initialData: Makhluk;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const EditMakhluk = ({ initialData }: EditMakhlukProps) => {
  const [makhluk, setMakhluk] = useState<Makhluk>(initialData);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMakhluk((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/makhluks/${makhluk.id}`,
        makhluk
      );
      router.push("/admin/creature");
    } catch (error) {
      console.error("There was an error updating the data!", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Edit Makhluk</h1>
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
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params; // Type assertion to ensure TypeScript knows `id` is present
  let initialData: Makhluk | null = null;
  try {
    const res = await axios.get(`http://localhost:8000/api/makhluks/${id}`);
    initialData = res.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }

  return {
    props: {
      initialData,
    },
  };
};

export default EditMakhluk;
