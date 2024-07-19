import BelumElement from "@/components/elemets/belum";
import FormBook from "@/components/elemets/formBuku";
import Navbar from "@/components/elemets/navbar";
import SearchSec from "@/components/elemets/searchSec";
import Sudah from "@/components/elemets/sudah";
import React from "react";

const Index = () => {


  return (
    <main className="w-full h-full pb-8">
      <Navbar />
      <FormBook />
      <SearchSec />
      <BelumElement />
      <Sudah/>
    </main>
  );
};

export default Index;
