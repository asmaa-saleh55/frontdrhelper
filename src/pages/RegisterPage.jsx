export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="your-background-image.jpg" // ← غيري دي لمسار الصورة بتاعتك
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Overlay - two forms side by side */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16">
        {/* Doctor Form */}
        <div className="bg-white bg-opacity-70 p-8 rounded-2xl shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-6">تسجيل كدكتور</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700"
            >
              تسجيل كدكتور
            </button>
          </form>
        </div>

        {/* Patient Form */}
        <div className="bg-white bg-opacity-70 p-8 rounded-2xl shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-6">تسجيل كمريض</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700"
            >
              تسجيل كمريض
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
