import { NextResponse } from "next/server";
import ConnectMongodb from "@/databse/connectMongo";
import { Employee } from "@/models/Employee";


ConnectMongodb()


export async function GET() {
    try {
        const getAllEmployee = await Employee.find()
        return NextResponse.json(getAllEmployee)
    } catch (error) {
        console.log("Failed");
    }
}



export async function POST(request) {
    const { name, email, address, salary } = await request.json()

    if (!name || !email || !address || !salary) {
        return NextResponse.json(
            {
                error: "All Field Is Required"
            },
            {
                status: 404
            }
        )
    }

    const checkemail = await Employee.findOne({ email })

    if (checkemail) {
        return NextResponse.json(
            {
                error: "This employee already exists"
            },
            {
                status: 404,
            }
        )
    }

    const EmployeeData = new Employee({
        name,
        email,
        address,
        salary
    })

    try {
        const savedEmployee = await EmployeeData.save();

        return NextResponse.json(
            {
                savedEmployee,
                message: "Employee saved successfully"
            },
            {
                status: 200,
            }
        )
    }

    catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: "Failed to save employee",
            },
            {
                status: 404,
            }
        )
    }

}

