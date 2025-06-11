import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', visits: 120 },
  { month: 'Feb', visits: 90 },
  { month: 'Mar', visits: 150 },
  { month: 'Apr', visits: 110 },
  { month: 'May', visits: 180 },
  { month: 'Jun', visits: 160 },
  { month: 'Jul', visits: 140 },
  { month: 'Aug', visits: 200 },
  { month: 'Sep', visits: 170 },
  { month: 'Oct', visits: 130 },
  { month: 'Nov', visits: 190 },
  { month: 'Dec', visits: 210 },
];

export default function PatientVisits() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Patient visits</h3>
        <span className="text-sm text-gray-500">2025</span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="#4CAF50" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
