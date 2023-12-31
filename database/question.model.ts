import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "@/lib/actions/shared.types";
import { connectToDatabase } from "@/lib/mongoose";
import { Schema, models, model, Document } from "mongoose";
import { revalidatePath } from "next/cache";
import User from "./user.model";

//extends Document add default properties such as _id and other fields
export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[]; //connecting for other model in database
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: [{ type: Schema.Types.ObjectId, ref: "User" }],
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  createdAt: { type: Date, default: Date.now },
});



const Question = models.Question || model("Question", QuestionSchema);

export default Question;
