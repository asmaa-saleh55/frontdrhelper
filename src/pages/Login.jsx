import React, { useState } from "react";
import { CgGoogle } from "react-icons/cg";
import { useUserAuth } from "./UserAuthContext";
import { toast } from "react-hot-toast";

function Login({ setView }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    api: "",
  });

  const { login } = useUserAuth();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
      api: "",
    };

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
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
      await login.mutateAsync(
        { email: formData.email, password: formData.password },
        {
          onSuccess: () => {
            toast.success("Logged in successfully");
            setFormData({ email: "", password: "" });
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
      <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="w-[320px]">
          <label className="self-start">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            className="mb-4 border rounded w-full py-2 text-gray-700 focus:outline-none focus:ring"
            disabled={login.isPending}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email}</p>
          )}
        </div>
        <div className="w-[320px]">
          <label className="self-start">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="********"
            className="mb-4 border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
            disabled={login.isPending}
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
          className="w-[320px] text-white py-2 rounded hover:bg-[#7cddd0] bg-[#239b8b] mb-3 disabled:opacity-50"
          disabled={login.isPending}
        >
          {login.isPending ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>Or</p>
      <CgGoogle size={24} className="cursor-pointer text-[#239b8b] mt-4" />
      <div
        className="text-center text-blue-500 cursor-pointer mt-4"
        onClick={() => setView("register")}
      >
        <span className="underline">Register</span>
      </div>
    </>
  );
}

export default Login;