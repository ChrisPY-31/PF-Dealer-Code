"use client"
import { useEffect, useState } from 'react'

  export function UseLocalStorage(key, initialValue) {
     let [storageValue, setStorageValue] = useState(initialValue)

     useEffect(() => {
        const item = localStorage.getItem(key)
        let pr = JSON.parse(item) 
        if(pr) {
            setStorageValue(pr)
        }
     }, [])

     useEffect(() => {
        if(storageValue.length > 0) {
           localStorage.setItem(key, JSON.stringify(storageValue))
        }
     }, [storageValue])
    
     return [storageValue, setStorageValue]
}


