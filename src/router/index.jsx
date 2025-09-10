import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Parent from "../Pages/Parent";
import Member from "../Pages/Member";
import Volunteer from "../Pages/Volunteer";
import Community from "../Pages/Community";

import Events from "../Pages/Events";
import OurMission from "../Pages/OurMission";
import TeamMembers from "../Pages/TeamMembers";
import OurSchoolInfo from "../Pages/OurSchoolInfo";
import CarpoolFeature from "../Pages/CarpoolFeature";
import Profile from "../Pages/Profile";
import DirectoryPar from "../Pages/DirectoryPar";


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
      <Route path="/about/mission" element={<OurMission />} />
      <Route path="/about/team" element={<TeamMembers />} />
      <Route path="/about/school" element={<OurSchoolInfo />} />
      <Route path="/carpool" element={<CarpoolFeature />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/parent/directory" element={<DirectoryPar/>} />
    </Routes>
  );
};

export default Router;