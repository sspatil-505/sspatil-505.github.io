# Deploy to GitHub Pages 🚀

Quick guide to deploy your reading list to GitHub Pages.

## Step 1: Push to GitHub

```powershell
cd C:\Users\soumy\.gemini\antigravity\scratch\reading-list
git add .
git commit -m "Transform portfolio to dark mystery reading list"
git push origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/sspatil-505/sspatil-505.github.io`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 3: Access Your Site

Your reading list will be live at:
**https://sspatil-505.github.io/**

It may take a few minutes for the first deployment.

## Updating Your Reading List

### To Add New Books:

1. Edit `books.js` in your repository
2. Add a new book object to the `booksData` array
3. Commit and push:
   ```powershell
   git add books.js
   git commit -m "Add new book: [Book Title]"
   git push
   ```
4. GitHub Pages will auto-update in 1-2 minutes

### Book Data Format:

```javascript
{
    id: 9,  // Increment from last book
    title: "Your Book Title",
    author: "Author Name",
    genre: "Genre",
    status: "reading",  // Options: "completed", "reading", "to-read"
    notes: "Your thoughts on this book",
    coverUrl: "https://link-to-cover.jpg"  // Optional
}
```

## Tips

- **Cover Images**: Find free book covers at [Open Library](https://openlibrary.org/)
- **Editing**: You can edit files directly on GitHub website (click file → pencil icon)
- **Local Testing**: Open `index.html` in browser before pushing to GitHub
- **Custom Domain**: You can add a custom domain in GitHub Pages settings

## File Structure

```
reading-list/
├── index.html      # Main page
├── style.css       # Dark mystery theme
├── books.js        # YOUR BOOK DATA (edit this!)
├── app.js          # Application logic
└── README.md       # Documentation
```

## Color Scheme

The dark theme features:
- **Background**: Deep dark grays/blacks
- **Accents**: Warm gold (like candlelight)
- **Secondary**: Burgundy and forest green
- **Text**: Off-white for readability

Inspired by the atmospheric mystery of Sherlock Holmes and the magical feel of Harry Potter!

---

**Questions?** Check the main README.md for detailed instructions.
