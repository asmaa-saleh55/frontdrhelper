import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { motion, AnimatePresence } from "framer-motion";

// Mock user data
const mockUsers = [
  { id: 1, name: "John Doe", role: "admin", email: "john@example.com" },
  {
    id: 2,
    name: "Dr. Jane Smith",
    role: "doctor",
    email: "jane@example.com",
    status: "pending",
    age: 34,
    specialization: "Cardiology",
    place: "New York, NY",
    license: "https://via.placeholder.com/300x200?text=License+Card",
  },
  { id: 3, name: "Bob Johnson", role: "user", email: "bob@example.com" },
  {
    id: 4,
    name: "Dr. Alice Brown",
    role: "doctor",
    email: "alice@example.com",
    status: "pending",
    age: 42,
    specialization: "Pediatrics",
    place: "Chicago, IL",
    license: "https://via.placeholder.com/300x200?text=License+Card",
  },
  {
    id: 5,
    name: "Dr. Mike Wilson",
    role: "doctor",
    email: "mike@example.com",
    status: "approved",
    age: 39,
    specialization: "Neurology",
    place: "Boston, MA",
    license: "https://via.placeholder.com/300x200?text=License+Card",
  },
];

// Colors for charts
const COLORS = ["#3b82f6", "#1e40af", "#93c5fd"];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const DoctorDetailsDialog = ({ doctor, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl border border-blue-200"
          variants={dialogVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Doctor Details
          </h2>
          <div className="space-y-4">
            <p className="text-blue-700">
              <strong>Name:</strong> {doctor.name}
            </p>
            <p className="text-blue-700">
              <strong>Email:</strong> {doctor.email}
            </p>
            <p className="text-blue-700">
              <strong>Age:</strong> {doctor.age}
            </p>
            <p className="text-blue-700">
              <strong>Specialization:</strong> {doctor.specialization}
            </p>
            <p className="text-blue-700">
              <strong>Location:</strong> {doctor.place}
            </p>
            <div>
              <strong className="text-blue-700">Medical License:</strong>
              <div className="mt-2">
                <img
                  src={doctor.license}
                  alt="Medical License"
                  className="w-full h-48 object-contain rounded-lg border border-blue-300"
                />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Dashboard = () => {
  const [currentUser] = useState({ role: "admin" });
  const [users, setUsers] = useState(mockUsers);
  const [doctors, setDoctors] = useState(
    mockUsers.filter((user) => user.role === "doctor")
  );
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorAction = (id, action) => {
    setDoctors(
      doctors.map((doctor) =>
        doctor.id === id ? { ...doctor, status: action } : doctor
      )
    );
    setUsers(
      users.map((user) => (user.id === id ? { ...user, status: action } : user))
    );
  };

  const handleRoleChange = (id, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
    setDoctors(updatedUsers.filter((user) => user.role === "doctor"));
  };

  const openDetails = (doctor) => setSelectedDoctor(doctor);
  const closeDetails = () => setSelectedDoctor(null);

  const chartData = [
    {
      name: "Pending",
      count: doctors.filter((d) => d.status === "pending").length,
    },
    {
      name: "Approved",
      count: doctors.filter((d) => d.status === "approved").length,
    },
    {
      name: "Rejected",
      count: doctors.filter((d) => d.status === "rejected").length,
    },
  ];

  if (currentUser.role !== "admin") {
    return (
      <motion.div
        className="flex items-center justify-center h-screen bg-blue-50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-3xl font-bold text-blue-800">
          Access Denied: Admins Only
        </h1>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-blue-50 p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-blue-800 mb-8"
          variants={containerVariants}
        >
          Admin Dashboard
        </motion.h1>

        {/* Pie Chart and All Users Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            className="md:col-span-1 flex flex-col items-center"
            variants={containerVariants}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Doctor Status Distribution
            </h2>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 w-full max-w-md h-[400px] flex items-center justify-center">
              <PieChart width={300} height={350}>
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </motion.div>

          <motion.div className="md:col-span-2" variants={containerVariants}>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              All Users
            </h2>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 h-[400px] overflow-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-blue-100 text-blue-600 text-left">
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Change Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <motion.tr
                      key={user.id}
                      className="border-t border-blue-100 hover:bg-blue-50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: user.id * 0.1 }}
                    >
                      <td className="p-4 text-blue-700">{user.name}</td>
                      <td className="p-4 text-blue-700">{user.email}</td>
                      <td className="p-4 capitalize text-blue-700">
                        {user.role}
                      </td>
                      <td className="p-4">
                        <select
                          value={user.role}
                          onChange={(e) =>
                            handleRoleChange(user.id, e.target.value)
                          }
                          className="border border-blue-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-700"
                        >
                          <option value="admin">Admin</option>
                          <option value="doctor">Doctor</option>
                          <option value="user">User</option>
                        </select>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Bar Chart and Doctor Verification Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="md:col-span-1 flex flex-col items-center"
            variants={containerVariants}
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Doctor Status Overview
            </h2>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 w-full max-w-md h-[400px] flex items-center justify-center">
              <BarChart width={300} height={350} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="name" stroke="#1e40af" />
                <YAxis stroke="#1e40af" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill={COLORS[0]} />
              </BarChart>
            </div>
          </motion.div>

          <motion.div className="md:col-span-2" variants={containerVariants}>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Doctor Verification
            </h2>
            <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 h-[400px] overflow-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-blue-100 text-blue-600 text-left">
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Actions</th>
                    <th className="p-4">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => (
                    <motion.tr
                      key={doctor.id}
                      className="border-t border-blue-100 hover:bg-blue-50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: doctor.id * 0.1 }}
                    >
                      <td className="p-4 text-blue-700">{doctor.name}</td>
                      <td className="p-4 text-blue-700">{doctor.email}</td>
                      <td className="p-4 capitalize text-blue-700">
                        {doctor.status}
                      </td>
                      <td className="p-4">
                        {doctor.status === "pending" && (
                          <>
                            <button
                              onClick={() =>
                                handleDoctorAction(doctor.id, "approved")
                              }
                              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600 transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() =>
                                handleDoctorAction(doctor.id, "rejected")
                              }
                              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => openDetails(doctor)}
                          className="text-blue-600 hover:text-blue-800 font-bold text-lg"
                          title="View Details"
                        >
                          ⋮
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {selectedDoctor && (
          <DoctorDetailsDialog doctor={selectedDoctor} onClose={closeDetails} />
        )}
      </div>
    </motion.div>
  );
};

export default Dashboard;