"use client";

import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
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

type MakhlukProps = {
  initialData: Makhluk[];
};

const GetCreature: React.FC<MakhlukProps> = ({ initialData }) => {
  const [data, setData] = useState<Makhluk[]>(initialData || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      axios
        .get("http://localhost:8000/api/makhluks")
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-10 text-sm">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="w-1/12 border-solid border-2 p-3 bg-emerald-800">
              No
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Nama ID
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Nama EN
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Domain
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Kingdom
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Phylum
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Class
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Order
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Infraorder
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Family
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Genus
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Species
            </th>
            <th className="w-2/12 border-solid border-2 p-3 bg-emerald-800">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((makhluk) => (
            <tr key={makhluk.id}>
              <td className="text-center border-solid border-2">
                {makhluk.id}
              </td>
              <td className="border-solid border-2">{makhluk.name_ID}</td>
              <td className="border-solid border-2">{makhluk.name_EN}</td>
              <td className="border-solid border-2">{makhluk.domain}</td>
              <td className="border-solid border-2">{makhluk.kingdom}</td>
              <td className="border-solid border-2">{makhluk.phylum}</td>
              <td className="border-solid border-2">{makhluk.class}</td>
              <td className="border-solid border-2">{makhluk.order}</td>
              <td className="border-solid border-2">{makhluk.infraorder}</td>
              <td className="border-solid border-2">{makhluk.family}</td>
              <td className="border-solid border-2">{makhluk.genus}</td>
              <td className="border-solid border-2">{makhluk.species}</td>
              <td className="text-center border-solid border-2">
                <button className="bg-yellow-300 rounded-md px-4 m-0.5">
                  <Link
                    className="inline-flex items-center space-x-1"
                    href="./creature/edit"
                  >
                    <Icon icon="basil:edit-outline" />
                    <span>Edit</span>
                  </Link>
                </button>
                <button className="bg-red-600 rounded-md px-1.5 m-0.5 inline-flex items-center space-x-1">
                  <InlineIcon icon="mdi-light:alert" />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let initialData: Makhluk[] = [];
  try {
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
