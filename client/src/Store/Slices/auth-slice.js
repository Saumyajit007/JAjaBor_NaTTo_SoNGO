import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backenduri = import.meta.env.VITE_BACKEND_HOSTED_PORT;

const initialState={
    isAuthenticated:false,
    isLoading:false,
    user:null,
    errormsg:""
}
export const checkUser=createAsyncThunk(
    "/auth/check-auth",
    async ()=>{
        try {
            const response= await axios.get(
                `${backenduri}/auth/check-auth`,
                {
                    withCredentials:true
                }
            )
            return response.data
        } catch (error) {
            throw error.response.data
        }
    }
)

export const logOut=createAsyncThunk("/auth/logout",
    async ()=>{
        try {
            const response=await axios.get(`${backenduri}/auth/logout`,{
                withCredentials:true
            })
            return response.data
        } catch (error) {
            throw error.response.data
        }
    }
)
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{}
    },
    extraReducers:(builder)=>{
        builder
        .addCase(checkUser.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(checkUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isAuthenticated=action.payload.data.isAuthenticated
            state.user=action.payload.success?action.payload.data:null
        })
        .addCase(checkUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isAuthenticated=false
            state.errormsg=action.error.message
        })
        .addCase(logOut.fulfilled,(state)=>{
            state.user=null
            state.isAuthenticated=false
        })
        .addCase(logOut.rejected,(state,action)=>{
            state.errormsg=action.error.message
        })
    }
})

export const {setUser}=authSlice.actions
export default authSlice.reducer