import React from "react";
const ContactSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start gap-10 p-10 bg-white">
      
      {/* Left Side - Form */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-green-600 border-b-2 border-green-400 pb-2 w-max mb-8">
          CONTACT US
        </h2>

        <h3 className="text-lg font-semibold mb-4">Leave us a message</h3>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="First_Name Last_Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Side - Info */}
      <div className="flex-1 flex flex-col gap-6">
        
        <div className="flex gap-4 text-xl">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </div>

        <div className="text-gray-600">
          <p className="font-bold">Weekend UX</p>
          <p>B 37/3 Ground Floor Double Story,</p>
          <p>Ramesh Nagar, Near Raja Garden Chowk, Delhi: 110015</p>
          <p className="mt-2 font-semibold">+91 9599272754</p>
          <p>hello@info.com.ng</p>
        </div>

        {/* Map - iframe */}
        <div className="w-full h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1169324410117!2d31.179847315114457!3d27.180957983017988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1445b505b30c153d%3A0x6ed1a4a4c5a57a4f!2sAssiut%20University%20Hospitals!5e0!3m2!1sen!2seg!4v1714337200627!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Assiut University Hospital Location"
          ></iframe>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;
