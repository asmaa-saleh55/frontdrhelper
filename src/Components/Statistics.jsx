import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', appointment: 30, canceled: 10 },
  { month: 'Feb', appointment: 25, canceled: 5 },
  { month: 'Mar', appointment: 35, canceled: 8 },
  { month: 'Apr', appointment: 20, canceled: 4 },
  { month: 'May', appointment: 32, canceled: 6 },
  { month: 'Jun', appointment: 40, canceled: 10 },
  { month: 'Jul', appointment: 28, canceled: 7 },
  { month: 'Aug', appointment: 30, canceled: 9 },
  { month: 'Sep', appointment: 38, canceled: 5 },
  { month: 'Oct', appointment: 26, canceled: 4 },
  { month: 'Nov', appointment: 33, canceled: 6 },
  { month: 'Dec', appointment: 45, canceled: 8 },
];

export default function AppointmentStatistics() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Appointment statistics</h3>
        <span className="text-sm text-gray-500">One year</span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="appointment" fill="#1E90FF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="canceled" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
