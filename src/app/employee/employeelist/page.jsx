"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
const page = () => {
  const [employee, setemployee] = useState([])


  async function getEmployeeList() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee`)
    const dataReceive = await response.json()
    setemployee(dataReceive)
  }


  useEffect(() => {
    getEmployeeList()
  }, [])


  async function deleteEmployee(id) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee/${id}`, {
      method: "DELETE"
    })

    if (res.ok) {
      toast.success('Successfully Deleted')
      getEmployeeList();
    }
  }


  return (
    <div className=' flex justify-center items-center h-screen'>
      {/* Main  */}
      <div className="flex flex-col">
        {/* Main-Child 1  */}
        <div className="-m-1.5 overflow-x-auto">
          {/* Main-Child 2  */}
          <div className="p-1.5 min-w-full inline-block align-middle">
            {/* Main-Child 3  */}
            <div className="border rounded-lg shadow overflow-hidden ">
              {/* Top [Svg Icon And Text]  */}
              <div className="p-2 bg-gray-50 border-b flex gap-2 items-center">
                {/* link */}
                <Link href='/'>
                  {/* svg icon  */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </Link>

                <h1 className=' text-center text-2xl font-semibold'>
                  Employee Details
                </h1>
              </div>
              <Toaster
                position="top-right"
                reverseOrder={true}
              />
              {/* Table  */}
              {
                employee.length > 0 ? (
                  <table className=" w-full divide-y divide-gray-200 ">
                    {/* Thead  */}
                    <thead className="bg-gray-50 ">
                      <tr>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                        >
                          S.No.
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                        >Employee Name
                        </th>
                        {/* Email */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                        >
                          Email
                        </th>
                        {/* Address  */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                        >Address
                        </th>
                        {/* Salary */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                        >Salary
                        </th>
                        {/* Action  */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                        >Action
                        </th>
                        {/* Action */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                        >Action
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                        >Action
                        </th>
                      </tr>
                    </thead>
                    {
                      employee.map((item, index) => {
                        const { _id, name, email, address, salary } = item
                        return (
                          <tbody className="divide-y divide-gray-200">
                            <tr >
                              {/* S.Action  */}
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                <Link href={`/employee/employeeDetails/${_id}`}> {index + 1}</Link>
                              </td>
                              {/* Name  */}
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                {name}
                              </td>
                              {/* Email  */}
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                {email}
                              </td>
                              {/* Address  */}
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                {address}
                              </td>
                              {/* Salary  */}
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                {salary}
                              </td>
                              {/* Edit Button */}
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Link href={`/employee/${_id}`} className="text-green-600">
                                  Edit
                                </Link>
                              </td>
                              {/* Delete Button */}
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onClick={() => deleteEmployee(_id)}>
                                <div className="text-red-600 cursor-pointer " >
                                  Delete
                                </div>
                              </td>

                              <Link href={`/employee/employeeDetails/${_id}`}>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" >
                                  <div className="text-blue-600 cursor-pointer " >
                                    Show
                                  </div>
                                </td>
                              </Link>
                            </tr>
                          </tbody>
                        )
                      })
                    }
                  </table>
                ) : (
                  <div className='text-center'>
                    <h1 className='text-center text-3xl m-10 font-bold'>Can't Found Any Details... </h1>
                    <Link href='/employee/addemployee'>
                      <button
                        className='border border-gray-400 rounded-lg font-medium px-3 py-1.5 mb-10'>Add Employee
                      </button>
                    </Link>
                  </div>

                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page