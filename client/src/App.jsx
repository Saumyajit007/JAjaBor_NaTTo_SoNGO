import { useState,lazy,Suspense,useEffect} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error";
import LoadingScreen from "./components/common/LoadingScreen";
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./Pages/unauth/UnAuthPage";
import { useSelector,useDispatch } from "react-redux";
import { checkUser } from "./Store/Slices/auth-slice";

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
const MembersLayout=lazy(()=>import("./Pages/members-view/Layout"))
const AllAccount=lazy(()=>import("./Pages/members-view/AllAccount"))
const AddAccount=lazy(()=>import("./Pages/members-view/AddAccount"))

function App() {

const {isAuthenticated,user,isLoading}=useSelector(
  (state)=>state.auth
)
const dispatch=useDispatch()

useEffect(()=>{
  dispatch(checkUser())
},[dispatch])
// useEffect(()=>{
//   const fetchres=async ()=>{
//     try {
//       const response=await axios.get("http://localhost:3000/auth/check-auth",{
//         withCredentials: true
//       })
//       console.log(response.data)
//     } catch (error) {
//       console.log(error.response)
//     }
//   }

//   fetchres()
// },[])

  return (
    <>
<Suspense fallback={<LoadingScreen/>}>
<Routes>
        <Route path="/" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}/>}/>
        <Route path="/login" element={<Login />} />

        <Route path="/visitor" element={<VisitorLayout />}>
          <Route path="dashboard" element={<VisitorHome />} />
          <Route path="announcement" element={<Announcement />}/>
        </Route>

        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} ><AdminLayout/></CheckAuth>}>
          <Route path="usersinfo" element={<AdminUserInfo/>}/>
          <Route path="update-accounts" element={<AdminAccounts/>}/>
          <Route path="update-announcement" element={<AdminAnnouncement/>}/>
          <Route path="assign-role" element={<AdminRoles/>}/>
          <Route path="add-members" element={<AdminMembers/>}/>
        </Route>

        <Route path="/members" element={<CheckAuth isAuthenticated={isAuthenticated} user={user} ><MembersLayout/></CheckAuth>}>
          <Route path="accounts" element={<AllAccount/>}/>
          <Route path="addaccount" element={<AddAccount/>}/>
        </Route>
        <Route path="/unauth" element={<UnAuthPage/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
</Suspense>
    </>
  );
}

export default App;
