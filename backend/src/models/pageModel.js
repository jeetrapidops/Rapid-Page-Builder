import mongoose from "mongoose";

const { Schema } = mongoose;

const PageModelSchema = new Schema(
  {
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    subtitle: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
      unique: true,
    },
    attachment: {
      data: Buffer, // Store file data as Buffer
      contentType: String, // Store content type (e.g., image/jpeg, application/pdf)
    },
    author_name: {
      type: String,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["draft", "scheduled" ,"published"],
      default: "draft",
    },
    publish_datetime: {
        type: Date,
        required: true,
      },
  },
  { timestamps: true }
);

const PageModel = mongoose.model("pages", PageModelSchema);

export default PageModel;
