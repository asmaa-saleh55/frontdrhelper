import React, { useState } from "react";
import { TbFileBitcoin } from "react-icons/tb";
import { toast } from "react-hot-toast";
import { useUserAuth } from "./UserAuthContext";

function RegisterForDoctor({ setView }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    license: null,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    license: "",
    api: "",
  });

  const { registerDoctor } = useUserAuth();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      license: "",
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

    if (!formData.license) {
      newErrors.license = "License file is required";
      isValid = false;
    } else if (
      !["application/pdf", "image/jpeg", "image/png"].includes(
        formData.license.type
      )
    ) {
      newErrors.license = "Only PDF, JPEG, or PNG files are allowed";
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      license: file,
    }));
    setErrors((prev) => ({ ...prev, api: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await registerDoctor.mutateAsync(
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          license: formData.license,
        },
        {
          onSuccess: () => {
            toast.success("Registered successfully");
            setFormData({
              fullName: "",
              email: "",
              password: "",
              license: null,
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
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6">
        Register for doctors
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4 w-[320px]">
          <label className="block mb-1">Full name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Name"
            className={`w-full border rounded py-2 text-gray-700 focus:outline-none focus:ring ${
              errors.fullName ? "border-red-500" : ""
            }`}
            disabled={registerDoctor.isPending}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-4 w-[320px]">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            className={`w-full border rounded py-2 text-gray-700 focus:outline-none focus:ring ${
              errors.email ? "border-red-500" : ""
            }`}
            disabled={registerDoctor.isPending}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4 w-[320px]">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="********"
            className={`w-full border rounded py-2 text-gray-700 focus:outline-none focus:ring ${
              errors.password ? "border-red-500" : ""
            }`}
            disabled={registerDoctor.isPending}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mb-4 w-[320px]">
          <label className="flex gap-4 items-center justify-center cursor-pointer">
            <span>License</span>
            <TbFileBitcoin size={24} color="green" />
            <input
              type="file"
              name="license"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              disabled={registerDoctor.isPending}
            />
          </label>
          {formData.license && (
            <p className="text-sm text-gray-600 mt-2">
              Selected: {formData.license.name}
            </p>
          )}
          {errors.license && (
            <p className="text-red-500 text-sm mt-1">{errors.license}</p>
          )}
        </div>
        {errors.api && (
          <p className="text-red-500 text-sm mb-4 w-[320px]">{errors.api}</p>
        )}
        <button
          type="submit"
          className="w-[320px] bg-[#239b8b] text-white py-2 rounded hover:bg-[#61ada3] transition-colors disabled:opacity-50"
          disabled={registerDoctor.isPending}
        >
          {registerDoctor.isPending ? "Registering..." : "Register Advanced"}
        </button>
      </form>
      <div
        className="text-center text-blue-500 mt-4 cursor-pointer"
        onClick={() => setView("register")}
      >
        <span className="underline">Register for patient</span>
      </div>
    </div>
  );
}

export default RegisterForDoctor;