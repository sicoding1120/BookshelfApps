import React, { useState } from "react";

const SearchSec = () => {
  const [keyword, setKeyword] = useState("");
  const [data,setData] = useState([])
  const handleSearch = () => {
    const all = JSON.parse(localStorage.getItem("All") as never)
    const filter = all.filter((items: any) => items.judul == keyword)
    setData(filter)
  };
  return (
    <section className="w-full flex flex-col items-center gap-4 h-full mt-4">
      <div className="w-1/2 h-full border-2 border-black rounded-lg py-4 px-6">
        <h3 className="text-3xl text-blue-500 font-bold capitalize text-center">{`cari buku (opsional)`}</h3>
        <div className="flex items-center mt-6 gap-2">
          <p className="capitalize text-xl font-semibold">judul</p>
          <input
            type="text"
            placeholder="cari buku"
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full border-2 border-black rounded-lg p-1 placeholder:capitalize"
          />
          <button
            className="w-1/3 px-4 py-2 bg-blue-500 rounded-lg text-white"
            onClick={keyword ? () => handleSearch() : undefined}
          >
            cari buku
          </button>
        </div>
        <div className={`w-full h-full mt-4 flex flex-col gap-4 justify-center items-center`}>
          {keyword ? `result: ${keyword}` : null}
          {data &&
            data.map((items:any, index) => (
              <div
              className="w-full h-full rounded-xl flex items-center justify-start px-4 gap-4 py-2 bg-slate-100"
              key={index}
              >
                <p className="font-bold">0{index + 1}</p>
                <div className="flex justify-start gap-14 pr-14 pl-4 w-full">
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold capitalize">judul buku</h3>
                    <p>{items.judul}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold capitalize">penulis buku</h3>
                    <p>{items.penulis}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold capitalize">tahun terbit buku</h3>
                    <p>{items.tahun}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSec;
