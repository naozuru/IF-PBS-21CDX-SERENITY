"use client";

import React, { useState } from 'react';
import axios from 'axios';

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

type SearchPlantProps = {
  setData: (data: Plant[]) => void;
};

const SearchPlant: React.FC<SearchPlantProps> = ({ setData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value === "") {
      try {
        const response = await axios.get("http://localhost:8000/api/plants");
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    } else {
      try {
        const response = await axios.get(`http://localhost:8000/api/plants/${e.target.value}`);
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    }
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search..."
      className="border p-2 mb-4 rounded-md text-black"
    />
  );
};

export default SearchPlant;
