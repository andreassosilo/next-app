import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  // fetch users from a database
  return NextResponse.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Validate
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  // If invalid, return 400
  // Else, return data
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
