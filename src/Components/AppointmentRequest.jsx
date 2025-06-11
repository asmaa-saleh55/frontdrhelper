import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const requests = [
  {
    id: 1,
    name: 'Jennette Mccurdy',
    avatar: '/api/placeholder/40/40?u=1',
    time: 'Jun 22 - 12:30 pm',
    doctor: 'Dr. Alex R',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Leslie Sansone',
    avatar: '/api/placeholder/40/40?u=2',
    time: 'Jun 22 - 12:30 pm',
    doctor: 'Dr. Alex R',
    status: 'pending',
  },
  {
    id: 3,
    name: 'Marvin Gaye',
    avatar: '/api/placeholder/40/40?u=3',
    time: 'Jun 22 - 12:30 pm',
    doctor: 'Dr. Alex R',
    status: 'accepted',
  },
  {
    id: 4,
    name: 'Annette Philip',
    avatar: '/api/placeholder/40/40?u=4',
    time: 'Jun 22 - 12:30 pm',
    doctor: 'Dr. Alex R',
    status: 'accepted',
  },
  {
    id: 5,
    name: 'Guy Ritchie',
    avatar: '/api/placeholder/40/40?u=5',
    time: 'Jun 22 - 12:30 pm',
    doctor: 'Dr. Alex R',
    status: 'rejected',
  },
];

export default function AppointmentRequest() {
  const [tab, setTab] = useState('All');
  const [data, setData] = useState(requests);

  const handleAction = (id, status) => {
    setData(prev =>
      prev.map(r => (r.id === id ? { ...r, status } : r))
    );
  };

  const filtered = data.filter(req => {
    if (tab === 'All') return true;
    return req.status === tab.toLowerCase();
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="font-semibold text-lg mb-3">Appointment request</h2>
      <div className="flex gap-2 mb-4">
        {['All', 'Accepted', 'Rejected'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              tab === t ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map(req => (
          <div key={req.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={req.avatar} alt="" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">{req.name}</p>
                <p className="text-xs text-gray-500">
                  Appointment for {req.doctor} <br /> on {req.time}
                </p>
              </div>
            </div>

            {req.status === 'pending' ? (
              <div className="flex gap-2">
                <button
                  onClick={() => handleAction(req.id, 'rejected')}
                  className="bg-red-100 text-red-500 rounded-full p-2"
                >
                  <XCircle size={18} />
                </button>
                <button
                  onClick={() => handleAction(req.id, 'accepted')}
                  className="bg-green-100 text-green-500 rounded-full p-2"
                >
                  <CheckCircle size={18} />
                </button>
              </div>
            ) : req.status === 'accepted' ? (
              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium">Accepted</span>
            ) : (
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">Rejected</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-sm text-blue-600 text-right mt-4 cursor-pointer hover:underline">
        View all appointment →
      </div>
    </div>
  );
}
