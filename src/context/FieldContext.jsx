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
            const res = await axios.get('http://51.20.70.65:5000/api/field');
            setAllFields(res.data[0].allFields);
            setIsLoading(false);      
        } catch(error){
            toast.error("Cannot fetch fields")
        }
    }

    const value = {
        allFields: allFields,
        url: "http://51.20.70.65:5000/",
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

