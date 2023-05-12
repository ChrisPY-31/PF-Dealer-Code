"use client"
import React, { useEffect, useState } from 'react'

  export function UseLocalStorage(key, initialValue) {
     let [storageValue, setStorageValue] = useState(initialValue)

     useEffect(() => {
        const item = window.localStorage.getItem(key)
        let pr = JSON.parse(item) 
        if(pr) {
            setStorageValue(pr)
        }
     }, [])

     useEffect(() => {
        if(storageValue.length > 0) {
           window.localStorage.setItem(key, JSON.stringify(storageValue))
        }
     }, [storageValue])
    
     return [storageValue, setStorageValue]
}


