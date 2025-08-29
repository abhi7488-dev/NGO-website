import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Parent from "../Pages/Parent";
import Member from "../Pages/Member";
import Volunteer from "../Pages/Volunteer";
import Community from "../Pages/Community";

import Events from "../Pages/Events";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parent" element={<Parent />} />
      <Route path="/parent-form" element={<Parent/>} />
      <Route path="/membership" element={<Member />} />
      <Route path="/membership/volunteer" element={<Volunteer />} />
      <Route path="/community/chat" element={<Community />} />
      <Route path="/community/events" element={<Events />} />
    </Routes>
  );
};

export default Router;