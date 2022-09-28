import React, { useEffect, useState } from "react";
import User from "../components/User";
import { useSession, signIn, signOut } from "next-auth/react";
import ListView from "../components/ListView";
import Create from "../components/Create";
import axios from "axios";
import Logout from "../components/Logout";
import Footer from "../components/Footer";

const login = () => {
  const { data: session, status } = useSession();
  const [isCreate, setIsCreate] = useState(false);
  const [data, setData] = useState([]);
  const URL = "https://dontforgetrender.onrender.com/subscribers"
  console.log(data);

  console.log(session);
  const fetchData = async () => {
    if (status === "authenticated") {
      await axios
        .get(`${URL}/${session.user.email}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchData();
  }, [status]);

  if (session) {
    return (
      <div>
        <p className="text-center italic font-serif p-3">
          Note: You can only delete future events, past events are automatically
          deleted by the server.

          <span className="text-red-500"> You can only create a maximum of 3 events so as to avoid crashing the server.</span>
        </p>
        <section className="flex items-center justify-center mt-5 flex-wrap">
          <User
            logout={() => signOut()}
            email={session.user.email}
            img={session.user.image}
            name={session.user.name}
            isCreate={isCreate}
            setIsCreate={setIsCreate}
          />
          {isCreate && data.length < 3 && (
            <Create fetchData={fetchData} googleEmail={session.user.email} dbURL={URL}/>
          )}
        </section>
        {/* Only view list if data is present */}
        {data.length>0 && <ListView data={data} update={fetchData} dbURL={URL}/>}
        <Footer />
      </div>
    );
  } else {
    return <Logout login={signIn} />;
  }
};

export default login;
