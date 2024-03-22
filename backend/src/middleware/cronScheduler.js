import PageModel from "../models/pageModel.js";
import cron from 'node-cron';

cron.schedule('*/10 * * * * *', () => {
    console.log('Checking page status every 10 seconds...',new Date(Date.now()).toLocaleTimeString());
    
    checkAndUpdatePageStatus();
  });
  
  async function checkAndUpdatePageStatus() {
    try {
      // Find all pages  
      const pages = await PageModel.find();
      
      // Iterate over each page
      pages.forEach(async (page) => {
        if (page.status === "scheduled" && new Date(page.publish_datetime) <= Date.now()) {
          await PageModel.findByIdAndUpdate(page._id, { status: "published" });
          console.log(`Page ${page._id} status updated to published.`);
        }
        
      });
    } catch (error) {
      console.error('Error checking and updating page status:', error);
    }
  }