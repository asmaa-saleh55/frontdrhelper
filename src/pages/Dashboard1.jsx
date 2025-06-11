import { useState } from 'react';
import {
  Search, ChevronRight, PlusCircle, ChevronDown
} from 'lucide-react';

// ✨ إضافة المكونات الخاصة بـ Overview
import AppointmentRequest from '../Components/AppointmentRequest';
import PatientVisits from '../Components/PatientVisits';
// import AvgTreatmentTime from '../Components/';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Doctors');

  const sidebarItems = [
    { icon: 'grid', title: 'Overview' },
    { icon: 'users', title: 'Patients' },
    { icon: 'calendar', title: 'Appointments' },
    { icon: 'user-plus', title: 'Doctors' },
    { icon: 'briefcase', title: 'Departments' },
    { icon: 'users', title: 'Employees' },
    { icon: 'box', title: 'Products & stock' },
    { icon: 'dollar-sign', title: 'Earnings' },
    { icon: 'settings', title: 'Settings' },
    { icon: 'help-circle', title: 'Help & support' }
  ];

  const getStatusColor = (status) => {
    if (status === 'Confirmed') return 'bg-green-100 text-green-600';
    if (status === 'Cancel') return 'bg-red-100 text-red-600';
    if (status === 'Pending') return 'bg-orange-100 text-orange-600';
    return '';
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Doctors':
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Today’s Appointment</h2>
            <div className="flex items-center space-x-4 mb-4">
              <div>
                <label className="text-sm font-semibold mr-2">Show appointment by:</label>
                <button className="text-blue-600 flex items-center text-sm">
                  Doctor name <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div>
                <label className="text-sm font-semibold mr-2">Select doctor:</label>
                <button className="text-blue-600 flex items-center text-sm">
                  Dr. Alex R <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-blue-50 text-left text-sm text-gray-700">
                  <th className="p-4">Name</th>
                  <th className="p-4">Doctor name</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((_, index) => (
                  <tr key={index} className="border-t text-sm text-gray-700 hover:bg-gray-50">
                    <td className="p-4 flex items-center space-x-3">
                      <img src="/api/placeholder/40/40" alt="" className="w-8 h-8 rounded-full" />
                      <span>Patient {index + 1}</span>
                    </td>
                    <td className="p-4">Dr. Alex R</td>
                    <td className="p-4">11.00</td>
                    <td className="p-4 flex space-x-3">
                      <button title="View" className="text-green-500 hover:text-green-700">👁</button>
                      <button title="Confirm" className="text-blue-500 hover:text-blue-700">✔️</button>
                      <button title="Cancel" className="text-red-500 hover:text-red-700">❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 text-blue-600 text-sm cursor-pointer hover:underline">
              View all appointment →
            </div>
          </div>
        );

      case 'Overview':
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Overview Section</h2>
            <p>Dashboard overview summary. 📊</p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
              <AppointmentRequest />
              <PatientVisits />
              <AvgTreatmentTime />
            </div>
          </div>
        );

      default:
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{activeTab}</h2>
            <p>Content for {activeTab} is under construction. 🚧</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-5 flex items-center">
          <div className="h-6 w-6 bg-green-500 rounded-md flex items-center justify-center text-white">
            <span className="text-xs">+</span>
          </div>
          <span className="text-green-500 font-semibold ml-2">CureSync</span>
        </div>

        <div className="mt-8">
          {sidebarItems.map((item, i) => {
            const isActive = activeTab === item.title;
            return (
              <div
                key={i}
                onClick={() => setActiveTab(item.title)}
                className={`px-5 py-3 flex items-center cursor-pointer transition ${
                  isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className={`h-6 w-6 ${isActive ? 'bg-blue-500' : 'bg-gray-200'} rounded-md flex items-center justify-center`}>
                  <span className="text-xs">
                    {item.icon === 'users' ? '👤' :
                      item.icon === 'grid' ? '📊' :
                      item.icon === 'calendar' ? '📅' :
                      item.icon === 'user-plus' ? '👨‍⚕️' :
                      item.icon === 'briefcase' ? '💼' :
                      item.icon === 'box' ? '📦' :
                      item.icon === 'dollar-sign' ? '💰' :
                      item.icon === 'settings' ? '⚙️' : '❓'}
                  </span>
                </div>
                <span className="ml-3 text-sm">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="bg-white p-5 flex justify-between items-center shadow-sm">
          <h1 className="text-xl font-bold">{activeTab}</h1>
          <div className="flex items-center">
            <div className="relative mr-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for anything"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add {activeTab}
            </button>
          </div>
        </div>

        {renderContent()}
      </div>

      {/* User Profile Floating Box */}
      <div className="fixed bottom-5 left-5 flex items-center bg-white p-2 rounded-lg shadow-md">
        <img src="/api/placeholder/40/40" alt="" className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <p className="text-sm font-medium">Albert Flores</p>
        </div>
        <div className="ml-3 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}