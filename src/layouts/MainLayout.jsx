import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  {/* هنا هيتغير محتوى الصفحات */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
