import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/app/api/mazelist', 'data.json');

function loadData(): any {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
}

function saveData(data: any) {
    const json = JSON.stringify(data);
    fs.writeFileSync(dataFilePath, json);
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const data = loadData()
    const maze = data.find((maze: any) => maze.id === id)
    const json_response = {
        status: "success",
        results: maze
    };
    return NextResponse.json(json_response);
}
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const data = loadData()
    const index = data.findIndex((maze: any) => maze.id === id);
    data.splice(index, 1);
    saveData(data);
    const json_response = {
        status: "success",
        result: id
    };
    return NextResponse.json(json_response);
}

