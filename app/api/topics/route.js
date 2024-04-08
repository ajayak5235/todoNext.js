// import connectMongoDB from "@/libs/mongodb";
// import Topic from "@/models/topic";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { title, description } = await request.json();
//   await connectMongoDB();
//   await Topic.create({ title, description });
//   return NextResponse.json({ message: "Topic Created" }, { status: 201 });
// }



import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    
    // Connect to MongoDB
    await connectMongoDB();
    
    // Create a new topic
    const newTopic = await Topic.create({ title, description });

    // Return a success response
    return NextResponse.json({ message: "Topic Created", data: newTopic }, { status: 201 });
  } catch (error) {
    console.error("Error creating topic:", error);
    
    // Return an error response
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
