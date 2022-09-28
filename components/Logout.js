import React from "react";
import Image from "next/image";

const Logout = ({login}) => {
    return (
        <>
<div className="flex items-center justify-center m-5">
      <figure className="bg-slate-100 rounded-xl p-8 grid place-items-center shadow-md">
        <Image
          className="w-10 h-10 rounded-full"
          src={'https://media.istockphoto.com/photos/unrecognizable-person-picture-id532237983?k=20&m=532237983&s=612x612&w=0&h=aXSC3Lso_mg2rMhPArjJogSzstxCBGhB7CEm36Tavpk='}
          alt=""
          width="75"
          height="75"
        />
        <div className="pt-6 space-y-4">
          <figcaption>
            <p>Welcome, </p>
            <h3 className="text-xl">Guest</h3>
            <div className="font-mono">Login to continue</div>
          </figcaption>
          <button
            className="bg-indigo-500 p-2 rounded-md shadow-md  text-white"
            onClick={login}
          >
            Login
          </button>
        </div>
      </figure>
    </div>
        </>
    )
}

export default Logout