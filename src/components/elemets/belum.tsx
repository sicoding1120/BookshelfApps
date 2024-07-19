import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const BelumElement = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("BB");
    const parse = JSON.parse(data as never);

    const mapData = parse !== null ? parse.map((items: any) => items) : null;
    setData(mapData);
  }, []);
    const handleDelete = (judul: any, penulis: any, dibaca: any, tahun: any) => {
      const object = {
        judul: judul,
        penulis: penulis,
        dibaca: dibaca,
        tahun: tahun,
      };
      const data = JSON.parse(localStorage.getItem("BB") as never);
      const all = JSON.parse(localStorage.getItem("All") as never);
      const filterAll = all.filter((item: any) => item.judul !== judul);
      const filter = data.filter((item: any) => item.judul !== judul);
      localStorage.setItem("BB", JSON.stringify(filter));
      localStorage.setItem("All", JSON.stringify(filterAll));
      window.location.reload();
    };


  const handleBook = (judul: any, penulis: any, dibaca: any, tahun: any) => {
    const object = {
      judul: judul,
      penulis: penulis,
      dibaca: dibaca,
      tahun: tahun,
    };
    const data = JSON.parse(localStorage.getItem("BB") as never);
    const filter = data.filter((item: any) => item.judul !== judul);
    localStorage.setItem("BB", JSON.stringify(filter));
    const SB = JSON.parse(localStorage.getItem("SB") as never);
    SB
      ? localStorage.setItem("SB", JSON.stringify([...SB, object]))
      : localStorage.setItem("SB", JSON.stringify([object]));
    window.location.reload();
  };
  return (
    <section className="w-full flex flex-col items-center gap-4 h-full mt-4">
      <div className="w-1/2 rounded-lg h-full border-2 border-black py-4 px-6">
        <h3 className="text-3xl text-blue-500 font-bold">
          Belum selesai dibaca
        </h3>
        <div className="w-full h-full gap-4 flex flex-col mt-4">
          {data &&
            data.map((items: any, index) => (
              <div
                className="w-full h-full rounded-xl flex items-center justify-start px-4 gap-4 bg-slate-100"
                key={index}
              >
                <p className="font-bold">0{index + 1}</p>
                <div className="flex justify-between  items-center gap-8 pr-4 pl-4 w-full">
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="font-bold capitalize text-sm">judul buku</h3>
                    <p>{items.judul}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className=" text-sm font-bold capitalize">
                      penulis buku
                    </h3>
                    <p>{items.penulis}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-bold text-sm capitalize">
                      tahun terbit buku
                    </h3>
                    <p>{items.tahun}</p>
                  </div>
                  <div className="flex gap-4 my-4">
                    <button
                      title={"ubah status baca"}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg"
                      onClick={() =>
                        handleBook(
                          items.judul,
                          items.penulis,
                          items.dibaca,
                          items.tahun
                        )
                      }
                    >
                      <MdDone />
                    </button>
                    <button
                      title={"ubah status baca"}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg"
                      onClick={() =>
                        handleDelete(
                          items.judul,
                          items.penulis,
                          items.dibaca,
                          items.tahun
                        )
                      }
                    >
                      <FaTrash />{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BelumElement;
