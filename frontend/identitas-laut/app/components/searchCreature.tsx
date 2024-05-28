"use client";

import React, { useState } from 'react';
import axios from 'axios';

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

type SearchCreatureProps = {
  setData: (data: Makhluk[]) => void;
};

const SearchCreature: React.FC<SearchCreatureProps> = ({ setData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value === "") {
      try {
        const response = await axios.get("http://localhost:8000/api/makhluks");
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    } else {
      try {
        const response = await axios.get(`http://localhost:8000/api/makhluks/${e.target.value}`);
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

export default SearchCreature;
