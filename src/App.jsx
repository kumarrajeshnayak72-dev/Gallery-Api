import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [pic, setPic] = useState([]);
  const [index, setindex] = useState(2);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`,
    );
    setPic(response.data);
  };
  useEffect(function () {
    getData();
  }, []);

  let printUserData = (
    <h3 className="text-gray-300 absolute top-1/2 left-1/2">Loading...</h3>
  );

  if (pic.length > 0) {
    printUserData = pic.map((elem, idx) => (
      <div key={idx} className="h-72 overflow-hidden rounded-lg">
        <img
          src={elem.download_url}
          alt={elem.author}
          className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
    ));
  }
  return (
    <div className="min-h-screen w-full bg-black text-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {printUserData}
      </div>
      <div className=" h-full w-full flex justify-center items-center gap-5 mt-2.5 ">
        <button
          className="px-7.5 py-2.5 bg-amber-300 border-0 rounded active:scale-95"
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <h2>Page no. {index}</h2>
        <button
          className="px-7.5 py-2.5 bg-amber-300 border-0 rounded active:scale-95"
          onClick={() => {
            setindex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
