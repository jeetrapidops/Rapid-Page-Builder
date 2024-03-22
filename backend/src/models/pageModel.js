import mongoose from "mongoose";

const { Schema } = mongoose;

const PageModelSchema = new Schema(
  {
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required:true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required:true
    },
    body: {
      type: String,
      required: true,
    },
    attachment: {
      data: Buffer, 
      contentType: String,
    },
    author_name: {
      type: String,
      required:true
    },
    url: {
      type: String,
      unique: true,
      required:true
    },
    status: {
      type: String,
      enum: ["draft", "scheduled" ,"published"],
      default: "draft",
    },
    publish_datetime: {
        type: Date
      },
  },
  { timestamps: true }
);

const PageModel = mongoose.model("pages", PageModelSchema);

export default PageModel;