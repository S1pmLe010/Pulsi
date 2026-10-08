import mongoose from "mongoose";
let cached:(typeof mongoose)|null=null;
export async function connectDB(){if(cached)return cached;if(!process.env.MONGODB_URI)return null;cached=await mongoose.connect(process.env.MONGODB_URI);return cached}
