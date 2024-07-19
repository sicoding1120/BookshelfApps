import React, { useState } from "react";

const FormBook = () => {
  const [dibaca, setDibaca] = useState(false);
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [tahun, setTahun] = useState("");
  const validYear = tahun > "2024" || tahun < "1990" || tahun  < "0" ? false : true;

  const handleBookAll = () => {
    if (!judul || !author || !tahun) {
      return;
    } else {
      const arr = [];
      const object = {
        judul: judul,
        penulis: author,
        dibaca: dibaca,
        tahun: tahun,
      };
      arr.push(object);
      const save = localStorage.getItem("All");
      if (!!save === false) {
        localStorage.setItem("All", JSON.stringify(arr));
      } else {
        const data = JSON.parse(save);
        const filter = data.filter((items: any) => items.judul === object.judul);
        if (filter?.length === 0) {
          localStorage.setItem("All", JSON.stringify([...data, object]));
        }
      }
    }
  };
  const handleBook = () => {
    if (!judul || !author || !tahun) {
      return alert("anda harus mengisi semua kolom")
    } else {
      const arr = [];
      const object = {
        judul: judul,
        penulis: author,
        dibaca: dibaca,
        tahun: tahun,
      };
      arr.push(object);
      const save =
        dibaca === true ? localStorage.getItem("SB") : localStorage.getItem("BB");
      if (!!save === false) {
        dibaca === true
          ? localStorage.setItem("SB", JSON.stringify(arr))
          : localStorage.setItem("BB", JSON.stringify(arr));
        window.location.reload();
      } else {
        const data = JSON.parse(save);
        const filter = data.filter((item: any) => item.judul === object.judul);
        if (filter?.length === 0) {
          dibaca === true
            ? localStorage.setItem("SB", JSON.stringify([...data, object]))
            : localStorage.setItem("BB", JSON.stringify([...data, object]));
        }
        window.location.reload();
      }
    }
  };
  return (
    <section className="w-full h-full flex flex-col gap-4 items-center mt-8">
      <div className="w-1/2 h-full border-2 border-black rounded-lg py-4 px-6">
        <h3 className="text-3xl text-blue-500 font-bold capitalize text-center">
          masukan buku baru
        </h3>
        <form className="flex flex-col gap-3">
          <div className="w-full h-full">
            <label className="text-lg text-blue-500 capitalize font-bold">
              judul
            </label>
            <input
              type="text"
              onChange={(e) => setJudul(e.target.value)}
              className="w-full border-2 rounded-lg border-black p-2 placeholder:capitalize"
              placeholder="masukan nama judul buku"
            />
          </div>
          <div className="w-full h-full">
            <label className="text-lg text-blue-500 capitalize font-bold">
              penulis
            </label>
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border-2 rounded-lg border-black p-2 placeholder:capitalize"
              placeholder="masukan nama penulis buku"
            />
          </div>
          <div className="w-full h-full">
            <label className="text-lg text-blue-500 capitalize font-bold">
              tahun
            </label>
            <input
              type="number"
              onChange={(e) => setTahun(e.target.value)}
              className="w-full border-2 rounded-lg border-black p-2 placeholder:capitalize"
              placeholder="masukan nama tahun terbit buku"
            />
            {validYear == false ? (
              <p className="text-red-500">
                tahun yang dapat anda masukan hanya dari 1990 sampai 2024 saja
              </p>
            ) : null}
          </div>
        </form>
        <div className="flex mt-4 gap-1 items-center">
          <label className="text-blue-500 font-bold text-lg">
            Selesai dibaca
          </label>
          <input
            type="checkbox"
            className="mt-2"
            onClick={() => setDibaca(!dibaca)}
          />
        </div>
        <button
          onClick={
            validYear === true
              ? () => {
                  handleBook();
                  handleBookAll();
                }
              : () =>
                  alert("tidak bisa menyimpan buku karna masih terdapat error")
          }
          className=" capitalize px-4 py-2 w-full rounded-lg bg-blue-500 text-white mt-4"
        >
          masukan buku ke rak{" "}
          <span className="font-bold">
            buku {dibaca === false ? "belum" : "sudah"} dibaca
          </span>
        </button>
      </div>
    </section>
  );
};

export default FormBook;
