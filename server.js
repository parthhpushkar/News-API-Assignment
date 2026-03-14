import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// News API endpoint
const NEWS_API_KEY = '8c2dc3035a6e46d1b408c2931a782c55'; // Get your free key from https://newsapi.org
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

// Route to fetch news
app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: 'us',
        apiKey: NEWS_API_KEY,
        pageSize: 12
      }
    });

    // Format the response to include only title and image
    const formattedNews = response.data.articles.map(article => ({
      title: article.title,
      image: article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image',
      url: article.url,
      description: article.description
    }));

    res.json({
      success: true,
      data: formattedNews
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news. Please make sure your API key is valid.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Please update NEWS_API_KEY in server.js with your key from https://newsapi.org');
});
