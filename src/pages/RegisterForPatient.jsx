import React, { useState } from "react";
import { useUserAuth } from "./UserAuthContext";
import { toast } from "react-hot-toast";

function RegisterForPatient({ setView }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    api: "",
  });

  const { registerPatient } = useUserAuth();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      api: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, api: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await registerPatient.mutateAsync(
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        },
        {
          onSuccess: () => {
            toast.success("Registered successfully");
            setFormData({
              fullName: "",
              email: "",
              password: "",
            });
            setView("dashboard"); // Navigate to dashboard
          },
          onError: (error) => {
            setErrors((prev) => ({
              ...prev,
              api: error.message || "Failed to connect to server",
            }));
            toast.error(error.message || "Failed to connect to server");
          },
        }
      );
    } catch (error) {
      // Error handled in onError callback
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">
        Register for patients
      </h2>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[320px]">
          <label className="self-start">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Name"
            className={`mb-4 border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring ${
              errors.fullName ? "border-red-500" : ""
            }`}
            disabled={registerPatient.isPending}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mb-4">{errors.fullName}</p>
          )}
        </div>
        <div className="flex flex-col w-[320px]">
          <label className="self-start">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            className={`mb-4 border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring ${
              errors.email ? "border-red-500" : ""
            }`}
            disabled={registerPatient.isPending}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col w-[320px]">
          <label className="self-start">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="********"
            className={`mb-4 border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring ${
              errors.password ? "border-red-500" : ""
            }`}
            disabled={registerPatient.isPending}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">{errors.password}</p>
          )}
        </div>
        {errors.api && (
          <p className="text-red-500 text-sm mb-4 w-[320px]">{errors.api}</p>
        )}
        <button
          type="submit"
          className="w-[320px] hover:bg-[#68bbb0] text-white bg-[#239b8b] py-2 rounded mb-6 disabled:opacity-50"
          disabled={registerPatient.isPending}
        >
          {registerPatient.isPending ? "Registering..." : "Register"}
        </button>
      </form>
      <button
        className="text-blue-500 underline text-sm mb-6"
        onClick={() => setView("register-advanced")}
      >
        Register for doctors
      </button>
      <div
        className="text-center text-blue-500 cursor-pointer flex items-center justify-center gap-2"
        onClick={() => setView("login")}
      >
        <span className="underline">Login</span>
      </div>
    </>
  );
}

export default RegisterForPatient;