import React from "react";
import css from "./dashboard.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ProfileBox from "../../components/ProfileBox";
import Card from "../../components/Card";
import PreviousBookings from "../../components/PreviousBookings";

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <h1>My Bookings</h1>
      <div className={css.currentBooking}>
        <h2>Current Booking</h2>
        <Card />
      </div>
      <div className={css.currentProfile}>
        <ProfileBox />
      </div>
      <div className={css.historicalBookingTitle}>
        <h1>History of Bookings</h1>
      </div>
      {/* <div className={css.historicalBooking}>
        <Card />
        <Card />
      </div> */}
      <PreviousBookings />
      <Footer />
    </div>
  );
}

export default Dashboard;
