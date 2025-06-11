import React, { useState, useEffect } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState('14');
  const [selectedTime, setSelectedTime] = useState('12:30 PM'); // افتراضي ممكن يتغير براحتك
  const [gender, setGender] = useState('Male');
  const [patientName, setPatientName] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('July, 2025');
  const [dates, setDates] = useState([]);
  const [bookedTimes, setBookedTimes] = useState({});

  const months = [
    'January, 2025', 'February, 2025', 'March, 2025', 'April, 2025',
    'May, 2025', 'June, 2025', 'July, 2025', 'August, 2025',
    'September, 2025', 'October, 2025', 'November, 2025', 'December, 2025'
  ];

  const times = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM',
    '03:00 PM', '04:40 PM', '05:00 PM', '05:30 PM'
  ];

  const ageRanges = [
    '1 - 10', '11 - 20', '21 - 30', '31 - 40', '41 - 50',
    '51 - 60', '61 - 70', '71 - 80', '81 - 90', '91 - 100'
  ];

  const getDaysInMonth = (month, year) => {
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const getDayOfWeek = (day, month, year) => {
    const monthIndex = months.indexOf(month);
    const date = new Date(year, monthIndex, day);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
    return days[date.getDay()];
  };

  useEffect(() => {
    const [monthName, year] = selectedMonth.split(', ');
    const daysInMonth = getDaysInMonth(selectedMonth, parseInt(year));
    const newDates = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dayLabel = getDayOfWeek(day, selectedMonth, parseInt(year));
      newDates.push({
        day: day.toString().padStart(2, '0'),
        label: dayLabel,
        isDisabled: dayLabel === 'FRI' || dayLabel === 'SAT'
      });
    }
    setDates(newDates);

    const selectedDayLabel = getDayOfWeek(parseInt(selectedDate), selectedMonth, parseInt(year));
    if (
      parseInt(selectedDate) > daysInMonth ||
      selectedDayLabel === 'FRI' ||
      selectedDayLabel === 'SAT'
    ) {
      const firstAvailableDay = newDates.find((date) => !date.isDisabled);
      setSelectedDate(firstAvailableDay ? firstAvailableDay.day : '01');
    }
  }, [selectedMonth]);

  // مهم: هنا ما بنغيرش selectedTime تلقائي حتى لو الوقت محجوز، فقط نمنع اختيار الوقت المحجوز من الواجهة

  const handleSetAppointment = () => {
    if (!patientName.trim()) {
      alert('Please enter the patient name');
      return;
    }

    const dateKey = `${selectedDate}-${selectedMonth}`;
    if (bookedTimes[dateKey]?.includes(selectedTime)) {
      alert('This appointment is already booked, please choose another one');
      return;
    }
    setBookedTimes((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), selectedTime]
    }));
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans bg-white rounded-lg shadow-lg ">
      <div className="bg-teal-700 text-white p-4 rounded-t-lg flex items-center space-x-3">
        <img src="https://via.placeholder.com/24" alt="icon" className="w-6 h-6" />
        <span className="text-lg font-semibold">New Appointment</span>
      </div>

      <div className="flex gap-10 mt-6" style={{ minHeight: '550px' }}>
        {/* يمين: التواريخ */}
        <div className="w-1/2 flex flex-col items-stretch" style={{ height: '100%' }}>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <div className="flex flex-wrap gap-2 mt-4 overflow-y-auto flex-grow" style={{ maxHeight: '480px' }}>
            {dates.map((date) => (
              <button
                key={date.day}
                className={`flex flex-col items-center justify-center min-w-[60px] p-3 border rounded-md text-center font-medium transition-colors
                  ${selectedDate === date.day ? 'bg-teal-700 text-white shadow-lg' : 'bg-white'}
                  ${date.isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-100'}
                `}
                onClick={() => !date.isDisabled && setSelectedDate(date.day)}
                disabled={date.isDisabled}
                title={date.isDisabled ? 'This day is a holiday' : ''}
                style={{ flexBasis: 'calc(20% - 0.5rem)' }}
              >
                <div className="text-lg">{date.day}</div>
                <div className="text-xs text-gray-500">{date.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* شمال: باقي المحتوى */}
        <div className="w-1/2 flex flex-col items-start" style={{ height: '100%' }}>
          <h3 className="text-lg font-semibold mb-3">Available Time</h3>
          <div className="flex flex-wrap gap-2 mb-6 w-full">
            {times.map((time) => {
              const dateKey = `${selectedDate}-${selectedMonth}`;
              const isBooked = bookedTimes[dateKey]?.includes(time);
              return (
                <button
                  key={time}
                  className={`flex-1 min-w-[80px] p-3 border rounded-md text-center font-medium transition-colors
                    ${selectedTime === time ? 'bg-teal-700 text-white shadow-lg' : 'bg-white'}
                    ${isBooked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-100'}
                  `}
                  onClick={() => !isBooked && setSelectedTime(time)}
                  disabled={isBooked}
                  title={isBooked ? 'This appointment is already booked' : ''}
                >
                  {time}
                </button>
              );
            })}
          </div>

          <h3 className="text-lg font-semibold mb-3">Patient Details</h3>

          <label className="block mb-1 font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="border border-gray-300 p-3 rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm transition"
          />

          <label className="block mt-4 mb-1 font-medium text-gray-700">Age</label>
          <select
            defaultValue="21 - 30"
            className="border border-gray-300 p-3 rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          >
            {ageRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>

          <label className="block mt-4 mb-1 font-medium text-gray-700">Gender</label>
          <div className="flex gap-3 mt-2 mb-6 w-full max-w-md">
            <button
              className={`flex-1 p-3 border rounded-md font-medium transition
                ${gender === 'Male' ? 'bg-teal-700 text-white shadow-lg' : 'bg-white hover:bg-teal-100'}
              `}
              onClick={() => setGender('Male')}
            >
              Male
            </button>
            <button
              className={`flex-1 p-3 border rounded-md font-medium transition
                ${gender === 'Female' ? 'bg-teal-700 text-white shadow-lg' : 'bg-white hover:bg-teal-100'}
              `}
              onClick={() => setGender('Female')}
            >
              Female
            </button>
          </div>

          <div className="w-full flex justify-center mb-6">
            <button
              className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition-shadow shadow-md font-semibold max-w-md w-full"
              onClick={handleSetAppointment}
            >
              Set Appointment
            </button>
          </div>
        </div>
      </div>

      {showDialog && (
        <ConfirmationDialog
          date={`${selectedDate} ${selectedMonth.split(', ')[0]}`}
          time={selectedTime}
          patientName={patientName}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default AppointmentBooking;




