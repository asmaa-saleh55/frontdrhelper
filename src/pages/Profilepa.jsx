import React, { useState } from "react";

export default function ProfilePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [aboutus, setAboutus] = useState("");
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {
    e.preventDefault();

    const validationErrors = [];

    if (!username || username.trim().length < 3) {
      validationErrors.push(
        "Username is required and must be at least 3 characters long."
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      validationErrors.push("A valid email address is required.");
    }

    if (!firstName || firstName.trim().length < 2) {
      validationErrors.push(
        "First name is required and must be at least 2 characters long."
      );
    }

    if (!lastName || lastName.trim().length < 2) {
      validationErrors.push(
        "Last name is required and must be at least 2 characters long."
      );
    }

    if (!address || address.trim().length < 5) {
      validationErrors.push(
        "Address is required and must be at least 5 characters long."
      );
    }

    if (!aboutus || aboutus.trim().length < 10) {
      validationErrors.push(
        "About us is required and must be at least 10 characters long."
      );
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    console.log("Form data:", {
      username,
      email,
      firstName,
      lastName,
      address,
      aboutus,
    });

    setUsername("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setAboutus("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col lg:flex-row gap-8 p-6 sm:p-12 bg-white min-h-screen font-sans"
    >
      {/* Input Fields Section */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-600">
          Your Profile
        </h1>
        <h3 className="text-lg sm:text-xl text-gray-500">
          User Information
        </h3>

        {errors.length > 0 && (
          <ul className="bg-red-100 border border-red-400 rounded-lg p-4 space-y-2">
            {errors.map((error, index) => (
              <li key={index} className="text-red-600 text-sm">
                {error}
              </li>
            ))}
          </ul>
        )}

        <div className="space-y-4 w-full max-w-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Nasir, Cairo"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About Us
            </label>
            <textarea
              placeholder="Tell us about yourself"
              value={aboutus}
              onChange={(e) => setAboutus(e.target.value)}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Profile Card Section */}
      <div className="flex-1 flex flex-col items-center space-y-6">
        <img
          src="/profpat.jpg"
          alt="profile"
          className="w-64 h-48 object-cover rounded-2xl shadow-md"
        />
        <h2 className="text-2xl font-semibold text-teal-600">
          Marawan Mohamed Selem
        </h2>
        <div className="flex gap-8">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">22</p>
            <p className="text-sm text-gray-500">Friends</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">10</p>
            <p className="text-sm text-gray-500">Favourite</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">89</p>
            <p className="text-sm text-gray-500">Saved</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
        >
          Edit
        </button>
        <a
          href="#"
          className="text-blue-500 hover:underline text-sm"
        >
          Show more
        </a>
      </div>
    </form>
  );
}