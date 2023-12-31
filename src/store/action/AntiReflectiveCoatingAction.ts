import { Dispatch } from "@reduxjs/toolkit";
import axios from "../../axios/axios";
import {  fetching2, fetchSuccess2, fetchError2 } from "../slice/AntiReflectiveCoatingSlice";
import adminaxios from "../../axios/adminaxios";


export const fetchAntiReflectiveCoating = (props:any) => {
    return async (dispatch:Dispatch)=>{
        try{
            
            dispatch(fetching2());
            const response =await axios.get('styles?title_div='+props);            
            const arr=[]
            for(let key in response.data){
                arr.push(response.data[key])
            }
            dispatch(fetchSuccess2(arr));
            
        }
        catch(error){
            console.log(error,'error');
            
            dispatch(fetchError2(error as Error));
        }

    }
}

