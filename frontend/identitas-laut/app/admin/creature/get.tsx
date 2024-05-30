"use client";

import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import Loading from "@/app/components/loading";
import SearchCreature from "@/app/components/searchCreature";

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
const GetCreature: React.FC<MakhlukProps> = ({ initialData }) => {
  const [data, setData] = useState<Makhluk[]>(initialData || []);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Handle the modal open event
  const openModal = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  // Handle the modal close event
  const closeModal = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  // Create a function to handle the delete event
  const handleDelete = async () => {
    if (deleteId !== null) {
      try {
        await axios.delete(`http://localhost:8000/api/makhluks/${deleteId}`);
        // Filter out the deleted item from the state
        const updatedData = data.filter((makhluk) => makhluk.id !== deleteId);
        setData(updatedData);
        setShowModal(false);
      } catch (error) {
        console.error("There was an error deleting the data!", error);
      }
    }
  };

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

      <SearchCreature setData={setData} />

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border-solid border-2 border-gray-500 p-3 bg-emerald-800">ID</th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">
              Nama ID
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">
              Nama EN
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">Domain</th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">
              Kingdom
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">Phylum</th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">Class</th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">Order</th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">
              Infraorder
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">Family</th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">Genus</th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">
              Species
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((makhluk) => (
            <tr key={makhluk.id}>
              <td className="text-center border-solid border-2 border-gray-400">
                {makhluk.id}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.name_ID}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.name_EN}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.domain}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.kingdom}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.phylum}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.class}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.order}</td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {makhluk.infraorder}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.family}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.genus}</td>
              <td className="border-solid border-2 border-gray-400 px-2">{makhluk.species}</td>
              <td className="text-center border-solid border-2 border-gray-400">
                <button className="bg-yellow-500 rounded-md px-4 m-0.5">
                  <Link
                    className="inline-flex items-center space-x-1"
                    href={`./creature/edit/${makhluk.id}`}
                  >
                    <Icon icon="basil:edit-outline" />
                    <span>Edit</span>
                  </Link>
                </button>
                <button
                  onClick={() => openModal(makhluk.id)}
                  className="bg-red-600 rounded-md px-1.5 m-0.5 inline-flex items-center space-x-1"
                >
                  <InlineIcon icon="mdi-light:alert" />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-emerald-800 p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Create a function to fetch the data on the server side
export const getServerSideProps: GetServerSideProps = async () => {
  let initialData: Makhluk[] = [];
  try {
    // Fetch the data from the API
    const res = await axios.get("http://localhost:8000/api/makhluks");
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

export default GetCreature;
