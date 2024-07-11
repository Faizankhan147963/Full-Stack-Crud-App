"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';



const page = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    salary: ""
  });

  const router = useRouter()

  const { name, email, address, salary } = employee

  function HandleChange(e) {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  async function SubmitData(e) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: employee.name,
        email: employee.email,
        address: employee.address,
        salary: employee.salary
      })
    })

    const data = await res.json();

    const { message, error } = data;
    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
      setEmployee({
        name: "",
        email: "",
        address: "",
        salary: ""
      })
      router.push("/")
    }
  }

  return (
    <>
      <div className=' container mx-auto flex justify-center items-center h-screen'>
        {/* Main  */}
        <div className="form border shadow-md border-gray-400 rounded-xl py-6 px-9  ">
          {/* Top  */}
          <div className="top">
            {/* Top-Child  */}
            <div className="flex gap-[10px] mb-5 items-center">
              {/* Link  */}
              <Link href='/'>
                {/* Svg Icon  */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </Link>
              {/* Text  */}
              <h1 className='text-2xl font-semibold'>
                Add New Employee
              </h1>
            </div>
          </div>
          <Toaster
            position="top-center"
            reverseOrder={true}
          />
          {/* Bottom  */}
          <div className="bottom">
            {/* Employee Name Input  */}
            <div className="">
              <input
                type="text"

                name='name'
                value={name}
                onChange={(e) => HandleChange(e)}


                placeholder='Enter name'
                className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
              />
            </div>
            {/* Employee Email Input  */}
            <div className="">
              <input
                type="email"

                name='email'
                value={email}
                onChange={(e) => HandleChange(e)}

                placeholder='Enter email'
                className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
              />
            </div>
            {/* Employee Address Input  */}
            <div className="">
              <input
                type="text"
                name='address'

                value={address}
                onChange={(e) => HandleChange(e)}

                placeholder='Enter address'
                className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
              />
            </div>
            {/* Employee Salary Input  */}
            <div className="">
              <input
                type="text"
                name='salary'
                value={salary}
                onChange={(e) => HandleChange(e)}
                placeholder='Enter salary'
                className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-8 placeholder-gray-400'
              />
            </div>
            {/* Add Button  */}
            <div>
              <button onClick={SubmitData}
                className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>Add Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page