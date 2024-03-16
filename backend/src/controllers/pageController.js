import PageModel from '../models/pageModel.js'; // Adjust the path as per your project structure

// Controller function to create a new page
export const createPageController = async (req, res) => {
  try {
    // Extract data from the request body

    const created_by = req.user._id;
    const {
      title,
      subtitle,
      body,
      attachment,
      author_name,
      url,
      status,
      publish_datetime,
    } = req.body;

    // Validate required fields
    if (!created_by || !title || !subtitle || !body || !url || !status || !publish_datetime) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new PageModel instance with the extracted data
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

    // Save the new page to the database
    const savedPage = await newPage.save();

    // Return the saved page as the response
    return res.status(201).json(savedPage);
  } catch (error) {
    // If an error occurs, handle it and return an error response
    console.error('Error creating page:', error);
    return res.status(500).json({ error: 'Failed to create page' });
  }
};

