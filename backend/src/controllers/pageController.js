import PageModel from "../models/pageModel.js";
import cron from 'node-cron';

export const createPageController = async (req, res) => {
  try {
    const created_by = req.user;
    const {
      title,
      subtitle,
      body,
      attachment,
      author_name,
      url,
      status="draft",
      publish_datetime
    } = req.body;

    

    const existingpage = await PageModel.findOne({ url });
    if (existingpage) {
      res.status(400).json("Page is already there!!");
      return;
    }

    // Validate required fields
    if (!title || !subtitle || !body || !author_name || !url) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPage = new PageModel({
      created_by,
      title,
      subtitle,
      body,
      attachment,
      author_name,
      url,
      status,
      publish_datetime,
    });

    const savedPage = await newPage.save();

    return res.status(201).json(savedPage);
  } catch (error) {
    console.error("Error creating page:", error);
    return res.status(500).json({ error: "Failed to create page" });
  }
};

export const publishpageController = async (req, res) => {
  try {
    const { _id } = req.params;
    const { publish_datetime } = req.body;
    const data = await PageModel.findByIdAndUpdate(
      _id,
      { status: "scheduled", publish_datetime: publish_datetime },
      { new: true }
    );

    if (!data) {
      return res.status(404).json({ error: "Page not found" });
    }

    // const currentTime = new Date();
    // const publishTime = new Date(publish_datetime);

    // const timeDifference = publishTime - currentTime;

    // const timeDifferenceInSeconds = Math.floor(timeDifference / 1000);
    // console.log(timeDifferenceInSeconds);

    await data.save();
    res.json("update successfully");
  } catch (error) {
    console.log("Error in publishing event:", error);
    res.json("Something went wrong in publish event!!");
  }
};

export const getAllPages = async (req, res) => {
  try {
    const user = req.user;
    const data = await PageModel.find({ created_by: user });
    res.status(200).json({
      success: true,
      message: "get all pages",
      data,
    });
  } catch (error) {}
};

export const getPage = async (req,res) => {
  try {
    const user = req.user;
    const _id = req.params;
    const data = await PageModel.findOne(_id);
    res.status(200).json({
      success: true,
      message: "get page",
      data,
    });
  } catch (error) {
    console.log("Error in get page event:", error);
    res.json("Something went wrong in get page event!!");
  }
}

export const deletePage = async (req, res) => {
  try {
    const _id = req.params;
    const data = await PageModel.findByIdAndDelete(_id);
    res.status(200).json({
      success: true,
      message: "delete successfully!!",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "delete is not work!!",
    });
  }
};

export const updatePage = async (req, res) => {
  try {
    const { title, subtitle, body, author_name, status, publish_datetime } =
      req.body;
    const _id = req.params;


    const data = await PageModel.findByIdAndUpdate(
      _id,
      {
        title,
        subtitle,
        body,
        author_name,
        status,
        publish_datetime,
      },
      { new: true }
    );

    await data.save();

    res.status(200).json({
      success: true,
      message: "Updated successfully!",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "update is not work!!",
    });
  }
};

export const getBlog = async (req, res) => {
  try {
    const url = req.params;
    const data = await PageModel.findOne(url);
    console.log(data);
    
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error in get data!!",
    });
  }
};

export const getAllBlogs = async (req,res) => {
  try {
    const blogs = await PageModel.find({ status:"published" });
    res.status(200).json({
      success: true,
      message: "get all blogs",
      blogs,
    });
  } catch (error) {}
}