import Login from "./Login";
import RegisterForDoctor from "./RegisterForDoctor";
import RegisterForPatient from "./RegisterForPatient";
import React, { useState } from "react";

const AuthCard = () => {
  const [view, setView] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center  text-black">
      <div
        className=" md:w-[50%] h-[550px]  rounded-2xl  flex overflow-hidden relative"
        style={{
          backgroundImage:  "url(./login.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl"></div>

        <div className="w-full relative z-10 p-8 flex flex-col  items-center justify-center">
          {/* Login for all */}
          {view === "login" && <Login setView={setView} />}

          {/* Register for patient */}
          {view === "register" && <RegisterForPatient setView={setView} />}

          {/*Register For Doctor */}
          {view === "register-advanced" && (
            <RegisterForDoctor setView={setView} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;


