// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useQueryClient, useMutation } from "@tanstack/react-query";

// const UserAuthContext = createContext();

// export function UserAuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const queryClient = useQueryClient();

//   // Check for existing token on initial load
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUser({ token });
//     }
//   }, []);

//   // Login mutation
//   const loginMutation = useMutation({
//     mutationFn: async ({ email, password }) => {
//       const response = await fetch("http://127.0.0.1:8000/api/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Login failed");
//       }
//       return response.json();
//     },
//     onSuccess: (data) => {
//       localStorage.setItem("token", data.token);
//       setUser({ token: data.token, email: data.email });
//       queryClient.invalidateQueries(["user"]);
//     },
//   });

//   // Register patient mutation
//   const registerPatientMutation = useMutation({
//     mutationFn: async ({ fullName, email, password }) => {
//       const response = await fetch("http://127.0.0.1:8000/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ fullName, email, password }),
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Registration failed");
//       }
//       return response.json();
//     },
//     onSuccess: (data) => {
//       localStorage.setItem("token", data.token);
//       setUser({ token: data.token, email: data.email });
//       queryClient.invalidateQueries(["user"]);
//     },
//   });

//   // Register doctor mutation
//   const registerDoctorMutation = useMutation({
//     mutationFn: async ({ fullName, email, password, license }) => {
//       const formData = new FormData();
//       formData.append("fullName", fullName);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("license", license);

//       const response = await fetch("http://127.0.0.1:8000/api/register", {
//         method: "POST",
//         body: formData,
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Registration failed");
//       }
//       return response.json();
//     },
//     onSuccess: (data) => {
//       localStorage.setItem("token", data.token);
//       setUser({ token: data.token, email: data.email });
//       queryClient.invalidateQueries(["user"]);
//     },
//   });

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     queryClient.clear();
//   };

//   return (
//     <UserAuthContext.Provider
//       value={{
//         user,
//         login: loginMutation,
//         registerPatient: registerPatientMutation,
//         registerDoctor: registerDoctorMutation,
//         logout,
//       }}
//     >
//       {children}
//     </UserAuthContext.Provider>
//   );
// }

// export const useUserAuth = () => {
//   const context = useContext(UserAuthContext);
//   if (!context) {
//     throw new Error("useUserAuth must be used within a UserAuthProvider");
//   }
//   return context;
// };


import React, { createContext, useContext, useState, useEffect } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const UserAuthContext = createContext();

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  // Check for existing token on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await fetch("http://127.0.0.1:8000/api/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }), // Backend expects username
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }
      return response.json();
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.access); // Use access token
      setUser({ token: data.access, email: data.user.email });
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      console.error("Login error:", error.message);
    },
  });

  // Register patient mutation
  const registerPatientMutation = useMutation({
    mutationFn: async ({ firstName, lastName, email, password }) => {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          role: "PATIENT",
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }
      return response.json();
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      setUser({ token: data.token, email: data.user.email });
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      console.error("Patient registration error:", error.message);
    },
  });

  // Register doctor mutation
  const registerDoctorMutation = useMutation({
    mutationFn: async ({ firstName, lastName, email, password, specialization, experienceYears, qualification, consultationFee, availableDays, availableTimes }) => {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          role: "DOCTOR",
          specialization,
          experience_years: experienceYears,
          qualification,
          consultation_fee: consultationFee,
          available_days: availableDays, // e.g., ["Monday", "Tuesday"]
          available_times: availableTimes, // e.g., ["09:00", "10:00"]
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }
      return response.json();
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      setUser({ token: data.token, email: data.user.email });
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      console.error("Doctor registration error:", error.message);
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    queryClient.clear();
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        login: loginMutation,
        registerPatient: registerPatientMutation,
        registerDoctor: registerDoctorMutation,
        logout,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export const useUserAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within a UserAuthProvider");
  }
  return context;
};