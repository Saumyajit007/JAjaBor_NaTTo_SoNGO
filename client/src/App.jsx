import { useState,lazy,Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error";
import LoadingScreen from "./components/common/LoadingScreen";

//pages for visitor
const VisitorLayout=lazy(()=>import("./Pages/visitor-view/VisitorLayout"))
const Login=lazy(()=>import("./Pages/auth/Login"))
const VisitorHome=lazy(()=>import("./Pages/visitor-view/home"))
const Announcement=lazy(()=>import("./Pages/Announcement/Announcement"))

//pages for admin
const AdminLayout=lazy(()=>import("./Pages/admin-view/Layout"))
const AdminUserInfo=lazy(()=>import("./Pages/admin-view/UserInfo"))
const AdminAccounts=lazy(()=>import("./Pages/admin-view/Announcement"))
const AdminAnnouncement=lazy(()=>import("./Pages/admin-view/Announcement"))
const AdminMembers=lazy(()=>import("./Pages/admin-view/Members"))
const AdminRoles=lazy(()=>import("./Pages/admin-view/Roles"))

//pages for members
function App() {
  return (
    <>
<Suspense fallback={<LoadingScreen/>}>
<Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/visitor" element={<VisitorLayout />}>
          <Route path="dashboard" element={<VisitorHome />} />
          <Route path="announcement" element={<Announcement />} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="usersinfo" element={<AdminUserInfo/>}/>
          <Route path="update-accounts" element={<AdminAccounts/>}/>
          <Route path="update-announcement" element={<AdminAnnouncement/>}/>
          <Route path="assign-role" element={<AdminRoles/>}/>
          <Route path="add-members" element={<AdminMembers/>}/>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
</Suspense>
    </>
  );
}

export default App;
