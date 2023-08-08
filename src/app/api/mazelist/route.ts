import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';

const dataFilePath = path.join(
  process.cwd(),
  'src/app/api/mazelist',
  'data.json',
);

function loadData(): any {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}
function saveData(data: any) {
  const json = JSON.stringify(data);
  fs.writeFileSync(dataFilePath, json);
}

export async function GET(request: NextRequest) {
  const data = loadData();
  const json_response = {
    status: 'success',
    results: data,
  };
  return NextResponse.json(json_response);
}

export async function POST(req: NextRequest) {
  const jsonReq = await req.json();
  const data = loadData();
  const newMaze = {
    id: v4(),
    ...jsonReq,
  };
  data.push(newMaze);
  saveData(data);
  const json_response = {
    status: 'success',
    results: jsonReq,
  };
  return NextResponse.json(json_response);
}
