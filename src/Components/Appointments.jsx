import { Eye, CheckCircle, XCircle } from 'lucide-react';

const appointments = [
  { name: 'Alina Sinueo', doctor: 'Dr. Alex R', time: '11.00', avatar: '/avatars/alina.png' },
  { name: 'Alexander Men', doctor: 'Dr. Alex R', time: '11.00', avatar: '/avatars/alexander.png' },
  // أضف باقي المرضى بنفس الطريقة
];

export function TodayAppointments() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Today's appointment</h2>
        <div className="text-sm space-x-4 text-gray-500">
          <span>Show appointment by: <b>Doctor name</b></span>
          <span>Select doctor: <b>Dr. Alex R</b></span>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600 border-b">
            <th className="py-2">Name</th>
            <th>Doctor name</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 transition">
              <td className="py-2 flex items-center space-x-2">
                <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full" />
                <span>{item.name}</span>
              </td>
              <td>{item.doctor}</td>
              <td>{item.time}</td>
              <td>
                <div className="flex space-x-2">
                  <button className="text-green-500 hover:text-green-600"><Eye size={18} /></button>
                  <button className="text-blue-500 hover:text-blue-600"><CheckCircle size={18} /></button>
                  <button className="text-red-500 hover:text-red-600"><XCircle size={18} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-blue-600 mt-4 text-sm cursor-pointer hover:underline">View all appointment →</div>
    </div>
  );
}
