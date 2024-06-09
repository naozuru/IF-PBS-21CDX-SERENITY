"use client";

import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import Loading from "@/app/components/loading";
import SearchPlant from "@/app/components/searchPlant";
import AddPlant from "@/app/components/addPlant";

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
const GetPlant: React.FC<PlantProps> = ({ initialData }) => {
  const [data, setData] = useState<Plant[]>(initialData || []);
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
        await axios.delete(`${process.env.API}/plants/${deleteId}`);
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
        <h1>Admin Plants</h1>
      </div>
      <div className="flex">
        <AddPlant />
        <SearchPlant setData={setData} />
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border-solid border-2 border-gray-500 p-3 bg-emerald-800 text-white">
              ID
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Nama ID
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Nama EN
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Domain
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Phylum
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Subphylum
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Class
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Order
            </th>
            <th className="border-solid border-2 border-gray-400 p-3 bg-emerald-800 text-white">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((plant) => (
            <tr key={plant.id}>
              <td className="text-center border-solid border-2 border-gray-400">
                {plant.id}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {plant.name_id}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {plant.name_en}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {plant.domain}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {plant.phylum}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {plant.subphylum}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {plant.class}
              </td>
              <td className="border-solid border-2 border-gray-400 px-2">
                {plant.order}
              </td>

              <td className="text-center border-solid border-2 border-gray-400">
                <button className="bg-emerald-300 rounded-md px-1.5 m-0.5 inline-flex items-center space-x-1">
                  <Link
                    className="inline-flex items-center space-x-1"
                    href={`./plant/detail/${plant.id}`}
                  >
                    <Icon icon="icon-park-outline:doc-detail" />{" "}
                    <span>Detail</span>
                  </Link>
                </button>
                <button className="bg-yellow-500 rounded-md px-3.5 m-0.5 inline-flex items-center space-x-1">
                  <Link
                    className="inline-flex items-center space-x-1"
                    href={`./plant/edit/${plant.id}`}
                  >
                    <Icon icon="basil:edit-outline" />
                    <span>Edit</span>
                  </Link>
                </button>
                <button
                  onClick={() => openModal(plant.id)}
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
  let initialData: Plant[] = [];
  try {
    // Fetch the data from the API
    const res = await axios.get("http://localhost:8000/api/plants");
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

export default GetPlant;
