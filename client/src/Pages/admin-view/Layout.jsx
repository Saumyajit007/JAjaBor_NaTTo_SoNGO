import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../components/Admin/adminHeader'
import AdminSideBar from '../../components/Admin/adminSideBar'
const AdminLayout = () => {
  const[showSidebar,setShowSidebar]=useState(false)
  return (
    <div>
      <AdminHeader setbar={setShowSidebar} barvalue={showSidebar}/>
      
      <AdminSideBar setbar={setShowSidebar} barvalue={showSidebar}/>
      
      <Outlet/>
    </div>
  )
}

export default AdminLayout
