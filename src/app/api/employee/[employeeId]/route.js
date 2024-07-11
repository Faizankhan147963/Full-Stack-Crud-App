import { Employee } from "@/models/Employee";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { employeeId } = params;

    try {
        const getUseryById = await Employee.findById(employeeId)
        return NextResponse.json(
            {
                getUseryById,
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                error: "Can Not Found Employee",
            },
            {
                status: 404,
            }
        )
    }
}

export async function PUT(request, { params }) {
    const { employeeId } = params;
    const { name, email, address, salary } = await request.json()

    try {
        const findIdData = await Employee.findById(employeeId)
        findIdData.name = name;
        findIdData.email = email;
        findIdData.address = address;
        findIdData.salary = salary;

        const updatedEmployee = await findIdData.save();

        return NextResponse.json(
            {
                updatedEmployee,
                message: "Employee Updated Successfully"
            },
            {
                status: 201
            }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error: 'failed to update employee',
            },
            {
                status: 404,
            }
        )
    }
}


export async function DELETE(request, { params }) {
    const { employeeId } = params;

    try {
        await Employee.deleteOne({
            _id: employeeId
        })

        return NextResponse.json(
            {
                message: "Employee deleted successfully"
            },
            {
                status: 201
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                error: 'failed to delete employee',
            },
            {
                status: 404,
            }
        )
    }
}