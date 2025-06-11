// // src/components/DashboardCards.jsx
// import React from 'react';
// import { FaUserMd, FaCalendarAlt, FaUsers, FaDollarSign } from 'react-icons/fa';

// const cards = [
//   { title: 'Doctors', count: 25, icon: <FaUserMd />, color: 'primary' },
//   { title: 'Appointments', count: 134, icon: <FaCalendarAlt />, color: 'success' },
//   { title: 'Patients', count: 540, icon: <FaUsers />, color: 'info' },
//   { title: 'Revenue', count: '$12k', icon: <FaDollarSign />, color: 'warning' },
// ];

// const DashboardCards = () => {
//   return (
//     <div className="row">
//       {cards.map((card, index) => (
//         <div className="col-md-3 mb-3" key={index}>
//           <div className={`card text-white bg-${card.color}`}>
//             <div className="card-body d-flex justify-content-between align-items-center">
//               <div>
//                 <h5 className="card-title">{card.title}</h5>
//                 <h3>{card.count}</h3>
//               </div>
//               <div className="fs-1">{card.icon}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;
