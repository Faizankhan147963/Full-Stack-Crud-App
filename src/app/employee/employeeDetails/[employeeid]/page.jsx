"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {

    const { employeeid } = params;
    const [user, setUser] = useState("")

    async function GetUser() {
        const response = await fetch(`http://localhost:3000/api/employee/${employeeid}`)
        const returnResponse = await response.json()
        setUser(returnResponse.getUseryById);
        console.log(returnResponse.getUseryById);
    }


    useEffect(() => {
        GetUser()
    }, [])

    return (
        <div className='w-full h-screen flex items-center justify-center flex-col text-left   bg-gray-300'>
            <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 uppercase">Name :  {user.name}</label>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email : {user.email}</label>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Address : {user.address}</label>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Salary : {user.salary}</label>
                </div>
                <div>
                    <Link href='/employee/employeelist'>
                        <button
                            className='border border-gray-400 rounded-lg font-medium px-3 py-1.5'>Back To List
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default page