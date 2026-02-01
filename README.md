# My Reading List 📚

A beautiful, modern reading list website to showcase your literary journey. Built with clean HTML, CSS, and JavaScript - perfect for hosting on GitHub Pages!

![Reading List Demo](https://img.shields.io/badge/Status-Live-success)

## ✨ Features

- **Beautiful Design**: Premium literary-themed design with smooth animations and gradients
- **Dynamic Stats**: Automatically calculated reading statistics (total, completed, reading, to-read)
- **Powerful Filters**: Search, filter by status/genre, and sort by multiple criteria
- **Detailed Book Cards**: Each book displays cover, title, author, genre, status, and rating
- **Modal Details**: Click any book for full details including personal notes
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Easy to Update**: Simply edit the JavaScript file to add/remove books

## 🚀 Quick Start

### Viewing Locally

1. Clone this repository
2. Open `index.html` in your web browser

That's it! No build process or dependencies needed.

### Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Set Source to "main" branch
4. Your site will be live at `https://[your-username].github.io/[repository-name]`

## 📖 How to Add/Edit Books

All your books are stored in the `books.js` file. Here's how to manage them:

### Adding a New Book

Open `books.js` and add a new entry to the `booksData` array:

```javascript
{
    id: 9,  // Increment this number
    title: "Your Book Title",
    author: "Author Name",
    genre: "Genre",  // e.g., "Fiction", "Non-Fiction", "Mystery", etc.
    status: "reading",  // Options: "completed", "reading", "to-read"
    rating: 4,  // Optional: 1-5 stars, or null
    notes: "Your personal thoughts about this book.",  // Optional
    coverUrl: "https://link-to-cover-image.jpg"  // Optional: link to book cover
}
```

### Book Field Guide

- **id** (required): Unique number for each book
- **title** (required): The book's title
- **author** (required): Author's name
- **genre** (required): Genre/category (add custom genres as needed)
- **status** (required): One of three options:
  - `"completed"` - Books you've finished
  - `"reading"` - Currently reading
  - `"to-read"` - Want to read
- **rating** (optional): Your rating from 1-5, or `null` if unrated
- **notes** (optional): Your personal thoughts, review, or notes
- **coverUrl** (optional): URL to the book cover image
  - Find covers at [Open Library](https://openlibrary.org/)
  - Or use Amazon book cover URLs
  - Leave empty for a placeholder icon

### Finding Book Covers

**Option 1: Open Library** (Recommended)
1. Go to https://openlibrary.org/
2. Search for your book
3. Right-click the cover image and copy the URL
4. Use that URL in the `coverUrl` field

**Option 2: Other Sources**
- Google Books
- Amazon product pages
- Publisher websites

### Example: Complete Book Entry

```javascript
{
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    status: "completed",
    rating: 5,
    notes: "A masterpiece about the American Dream. The prose is absolutely stunning and Gatsby's character is unforgettable.",
    coverUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
}
```

## 🎨 Customization

### Adding New Genres

Edit the `genres` array in `books.js`:

```javascript
const genres = [
    'All Genres',
    'Classic Fiction',
    'Your New Genre',  // Add your custom genre here
    // ... more genres
];
```

### Changing Colors

Edit the CSS variables in `style.css` (lines 7-18):

```css
:root {
    --primary-color: #2c3e50;      /* Header background */
    --secondary-color: #8b7355;     /* Accent elements */
    --accent-color: #d4a574;        /* Highlights */
    /* ... modify as needed */
}
```

### Changing Fonts

The site uses Google Fonts. To change fonts, modify the `<link>` tags in `index.html` and update the CSS font-family declarations.

## 📱 Features Breakdown

### Statistics Dashboard
Automatically shows:
- Total number of books
- Books completed
- Books currently reading
- Books on your to-read list

### Search & Filter
- **Search**: Find books by title or author
- **Status Filter**: View only completed, reading, or to-read books
- **Genre Filter**: Filter by genre/category
- **Sort**: By title, author, or rating (ascending/descending)

### Book Details Modal
Click any book card to see:
- Full-size cover image
- Complete title and author
- Genre and status
- Star rating (if provided)
- Personal notes (if provided)

## 🔧 Technical Details

- **No Build Required**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: Works offline after first load
- **Lightweight**: Minimal file sizes for fast loading
- **SEO Friendly**: Proper semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 📄 File Structure

```
reading-list/
├── index.html       # Main HTML structure
├── style.css        # All styling and animations
├── books.js         # Your book data (EDIT THIS)
├── app.js           # Application logic
└── README.md        # This file
```

## 🌟 Tips

1. **Regular Updates**: Update your list as you read - it's satisfying to see your progress!
2. **Write Notes**: Add personal notes to remember what you thought about each book
3. **Cover Images**: Books with cover images look much better than placeholders
4. **Genres**: Create custom genres that make sense for your reading habits
5. **Backup**: Keep a backup of `books.js` before making major changes

## 📝 License

Free to use and modify for your personal reading list!

## 🤝 Credits

Created with ❤️ for book lovers everywhere.

---

**Happy Reading! 📚✨**
