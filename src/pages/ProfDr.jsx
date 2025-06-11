import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { TbFileBitcoin } from "react-icons/tb";

export default function ProfilePage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    workingHours: "",
    workLicense: "",
    certificates: "",
    about: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    workingHours: "",
    workLicense: "",
    certificates: "",
    about:"",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username) newErrors.username = "Username is required";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email is required";
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.workLicense) newErrors.workLicense = "Work License is required";
    if (!form.certificates) newErrors.certificates = "Certificates is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://your-api-endpoint.com/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });

        if (!response.ok) throw new Error("Network response was not ok");

        toast.success("Form submitted successfully!", {
          duration: 3000,
          position: 'top-right'
        });
      } catch (error) {
        toast.error("Error submitting form", {
          duration: 3000,
          position: 'top-right'
        });
      }
    } else {
      setErrors(validationErrors);
      toast("Please fix form errors", {
        duration: 3000,
        position: 'top-right',
        icon: '⚠️'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 justify-center g-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 pl-15">Your Profile</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-4 pl-30">USER INFORMATION</h2>
            <div className="space-y-8 pl-30">
              <div>
                <label className="label block text-blue-900"><b>Username</b></label>
                <input name="username" value={form.username} placeholder="Name" onChange={handleChange} className="input w-1/2 border border-gray-300" />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
              </div>
              <div>
                <label className="label block text-blue-900"><b>Email address</b></label>
                <input name="email" value={form.email} placeholder="example@gmail.com" onChange={handleChange} className="input w-1/2 border border-gray-300" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="label block text-blue-900"><b>First name</b></label>
                <input name="firstName" value={form.firstName} placeholder="name" onChange={handleChange} className="input w-1/2 border border-gray-300" />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label className="label block text-blue-900"><b>Last name</b></label>
                <input name="lastName" value={form.lastName} placeholder="name" onChange={handleChange} className="input w-1/2 border border-gray-300" />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div>
                <label className="label block text-blue-900"><b>Address</b></label>
                <input name="address" value={form.address} placeholder="Nasir, Cairo" onChange={handleChange} className="input w-1/2 border border-gray-300" />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-600 mb-4 pl-30">CONTACT INFORMATION</h2>
            <div className="space-y-4 pl-30 flex ">
              <div>
                <label className="label block  text-blue-900 "><b>Working Hours</b></label>
                <input name="workingHours" value={form.workingHours} onChange={handleChange} className="input w-3/4 border border-gray-300" />
              </div>
              <div>
                <label className="label block  text-blue-900 mr-30"><b>Work License</b>
                <TbFileBitcoin className="cursor-pointer" size={24} color="blue" />
                <input type="file"
                 name="workLicense" 
                 value={form.workLicense} 
                 onChange={handleChange} 
                 accept=".pdf,.jpg,.jpeg,.png" 
                 className=" hidden input w-1/2" />
                {errors.workLicense && <p className="text-red-500 text-sm">{errors.workLicense}</p>}
                </label>
              </div>
              <div>
                <label className="label block  text-blue-900"><b>Certificates</b>
                <TbFileBitcoin className="cursor-pointer" size={24} color="blue" />
                <input type="file"
                 name="certificates" 
                 value={form.certificates} 
                 onChange={handleChange} 
                 accept=".pdf,.jpg,.jpeg,.png"
                 className="hidden input w-1/2 border border-gray-300" />
                {errors.certificates && <p className="text-red-500 text-sm">{errors.certificates}</p>}
                </label>
              </div>
            </div>
          </div>

          <div className="pl-30">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">About Me</h2>
            <textarea name="about"
             className="input w-1/2 pl-30 border border-gray-300"
              rows="3" 
              value={form.about} 
              onChange={handleChange}></textarea>
          </div>

          <div className="pl-30">
          <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-md mt-4 cursor-pointer">Submit</button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-lg w-90 h-140 rounded-2xl p-6 text-center ">
          <img
            src="./doctorlist22.jpg"
            alt="profile"
            className="w-70 h-50 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Dr. Tark Mohamed Selem <span className="text-blue-500">✔</span></h3>
          <div className="flex justify-center space-x-4 text-sm text-gray-500 my-2">
            <div><span className="font-bold">22</span><br />Files</div>
            <div><span className="font-bold">10</span><br />Photos</div>
            <div><span className="font-bold">89</span><br />Visiting</div>
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <button className="bg-gray-300 text-sm px-4 py-1 rounded cursor-pointer">Edit</button>
            <button className="bg-red-500 text-white text-sm px-4 py-1 rounded cursor-pointer">Request</button>
          </div>
          <p className="text-gray-600 font-semibold">Dentist</p>
          <p className="text-sm text-gray-500">Extractions, Cleanings, Orthodontics, Fillings</p>
          <p className="text-xs text-gray-400 mt-1">University of Computer Science</p>
          <center className="mt-10">
          <a href="#" className="show-more text-blue-500">
           <b>Show more</b> 
          </a>
        </center>
        </div>
      </form>
      <Toaster />
    </div>
  );
}




