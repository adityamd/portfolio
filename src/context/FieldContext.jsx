import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import Spinner from '../components/common/Spinner'


export const FieldContext = createContext({
    allFields: {}
})

export const FieldProvider = ({ children }) => {

    const [allFields, setAllFields] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try{
            console.log("EE")
            const res = await axios.get('https://adityasportfolioadmin-368b40b5c9fe.herokuapp.com/api/field');
            console.log(res.data[0].allFields)
            setAllFields(res.data[0].allFields);      
            setIsLoading(false);      
            console.log(res.allFields)
        } catch(error){
            toast.error("Cannot fetch fields")
        }
    }

    const value = {
        allFields: allFields,
        getData
    }

    return (
        <FieldContext.Provider value={value}>
            {
                isLoading ?
                <Spinner />:
                children
            }
        </FieldContext.Provider>
    )
}

