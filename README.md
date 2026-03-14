# News API Application

A simple web application that fetches and displays top news headlines using the News API with axios.

## Features

- **API Integration**: Uses axios to make HTTP requests to News API
- **Responsive Design**: Works on desktop and mobile devices
- **Flat List Display**: Shows news articles with title, image, and description
- **Link to Full Article**: Click "Read Full Article" to visit the original news source

## Project Structure

```
├── package.json         # Project dependencies
├── server.js           # Express server with axios API call
├── index.html          # Frontend UI with styling and JavaScript
└── README.md          # This file
```

## Setup & Installation

### 1. Get API Key
- Visit [https://newsapi.org](https://newsapi.org)
- Sign up for a free account
- Copy your API key

### 2. Install Dependencies
```bash
npm install
```

### 3. Update API Key
Open `server.js` and replace `'YOUR_API_KEY_HERE'` with your actual API key:
```javascript
const NEWS_API_KEY = 'your_actual_api_key_here';
```

### 4. Start the Server
```bash
npm start
```

The server will run on `http://localhost:3000`

### 5. View in Browser
Open your browser and go to `http://localhost:3000`

## How It Works

1. **Backend (server.js)**:
   - Uses Express to create a REST API
   - Uses axios to fetch news from News API
   - Formats the response to include only title, image, URL, and description
   - Serves static files (HTML, CSS, JS)

2. **Frontend (index.html)**:
   - Fetches data from `/api/news` endpoint
   - Displays articles in a clean, flat list format
   - Shows article image, title, description, and a link to the full article
   - Includes error handling and loading states

## API Response Format

The `/api/news` endpoint returns:
```json
{
  "success": true,
  "data": [
    {
      "title": "Article Title",
      "image": "image_url",
      "url": "original_article_url",
      "description": "Article description"
    }
  ]
}
```

## Customization

You can customize the following in `server.js`:

- **Country**: Change `country: 'us'` to any country code (e.g., 'in' for India, 'gb' for UK)
- **Page Size**: Modify `pageSize: 12` to show more or fewer articles
- **Category**: Add `category: 'technology'` to filter by category (business, entertainment, health, science, sports, technology)

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
- **Backend**: Node.js, Express.js
- **HTTP Client**: Axios
- **API**: News API (newsapi.org)

## Notes

- The free tier of News API is limited to 100 requests per day
- Images are displayed from the news sources; some may not be available
- A placeholder image is shown if the original image is unavailable
