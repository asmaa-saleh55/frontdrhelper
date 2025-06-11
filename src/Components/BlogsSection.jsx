import React from 'react'
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import img7 from "../assets/img/blog7.jpg"; 
import img8 from "../assets/img/blog8.jpg"; 
import img9 from "../assets/img/blog9.jpg"; 
const BlogsSection = () => {
  return (
 <div className="flex flex-col justify-center lg:px-32 px-5 pt-24">
 {/* Title */}
 <h1 className="text-4xl font-semibold text-center">
   Latest Post
 </h1>
 {/* Blog Cards */}
 <div className="my-8">
   <div className="flex flex-wrap justify-center gap-5">
     <BlogCard 
       img={img1} 
       headlines="How to Choose the Right Doctor for Your Condition" 
       description="Tips on finding the best doctor for your needs through our booking platform."
     />
     <BlogCard 
       img={img2} 
       headlines="5 Benefits of Booking Medical Appointments Online" 
       description="Discover how online booking saves you time and simplifies your healthcare journey."
     />
     <BlogCard 
       img={img3} 
       headlines="What to Prepare Before Your Doctor’s Appointment" 
       description="A quick checklist to get ready for your upcoming doctor visit."
     />
     <BlogCard 
       img={img4} 
       headlines="The Importance of Regular Health Check-ups" 
       description="Understand why regular medical checkups keep you healthier in the long run."
     />
     <BlogCard 
       img={img5} 
       headlines="Telemedicine: Consult a Doctor from Home" 
       description="Learn the benefits of remote consultations and how to book easily from home."
     />
     <BlogCard 
       img={img6} 
       headlines="How Our Platform Helps You Track Your Medical History" 
       description="See how managing appointments and medical records online makes life easier."
     />
   </div>
 </div>

 {/* Text + Button under blog cards */}
 <div className="flex flex-col items-center mt-8 space-y-4">
   <p className="text-center max-w-2xl">
     Discover expert tips and guides to make your healthcare journey easier and more informed.
   </p>
   <Link to="/blog">
     <Button title="Our Articles" />
   </Link>
 </div>
</div>
);
};

export default BlogsSection;

