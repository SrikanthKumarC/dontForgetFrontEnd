import React from "react";
import Image from "next/image";
const User = ({ img, name, email, logout, isCreate, setIsCreate }) => {
  return (
    <div className="flex items-center justify-center m-5">
      <figure className="bg-slate-100 rounded-xl p-8 grid place-items-center shadow-md">
        <Image
          className="w-10 h-10 rounded-full"
          src={img}
          alt=""
          width="75"
          height="75"
        />
        <div className="pt-6 space-y-4">
          <figcaption>
            <p>Welcome, </p>
            <h3 className="text-xl">{name}</h3>
            <div className="font-mono">{email}</div>
          </figcaption>
          <button
            className="bg-indigo-500 p-2 rounded-md shadow-md  text-white"
            onClick={logout}
          >
            Logout
          </button>
          <button
            className="bg-green-400 p-2 rounded-md shadow-md ml-2 text-green"
            onClick={() => setIsCreate(!isCreate)}
          >
            Create Event
          </button>
        </div>
      </figure>
    </div>
  );
};

export default User;
