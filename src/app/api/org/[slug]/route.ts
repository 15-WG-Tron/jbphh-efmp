import {NextRequest, NextResponse} from 'next/server';

export const GET = async (req: NextRequest) => {
  console.log(req.nextUrl)
  return NextResponse.json({message: "Okay"})
}