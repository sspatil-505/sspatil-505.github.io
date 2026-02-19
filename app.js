// Application Logic
let currentBooks = [...booksData];
let filteredBooks = [...booksData];

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    populateGenreFilter();
    updateStats();
    displayFeaturedQuote();
    renderBooks(booksData);
    attachEventListeners();
}

// Populate genre filter dropdown
function populateGenreFilter() {
    const genreFilter = document.getElementById('genreFilter');
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre === 'All Genres' ? 'all' : genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

// Update statistics
function updateStats() {
    // Separate read and written books
    const readBooks = booksData.filter(series => series.type === 'read');
    const writtenBooks = booksData.filter(series => series.type === 'written');

    // Calculate total books read
    const totalBooksRead = readBooks.reduce((sum, series) => sum + series.bookCount, 0);
    const totalBooksWritten = writtenBooks.reduce((sum, series) => sum + series.bookCount, 0);

    const completed = readBooks.filter(series => series.status === 'completed').reduce((sum, series) => sum + series.bookCount, 0);
    const reading = readBooks.filter(series => series.status === 'reading').reduce((sum, series) => sum + series.bookCount, 0);
    const toRead = readBooks.filter(series => series.status === 'to-read').reduce((sum, series) => sum + series.bookCount, 0);

    document.getElementById('totalBooks').textContent = totalBooksRead + 3; // +3 for Zero to One, Death on the Nile, Jaave Tyancha Desha (hardcoded in HTML)
    document.getElementById('booksWritten').textContent = totalBooksWritten;
    document.getElementById('completedBooks').textContent = completed;
    document.getElementById('readingBooks').textContent = reading + 3; // +3 for Zero to One, Death on the Nile, Jaave Tyancha Desha (hardcoded in HTML)
    document.getElementById('toReadBooks').textContent = toRead;
}

// Render books to the grid
function renderBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    const noResults = document.getElementById('noResults');

    booksGrid.innerHTML = '';

    if (books.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    books.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

// Create individual series card
function createBookCard(series) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.onclick = () => openBookModal(series);

    const statusInfo = statusConfig[series.status];

    card.innerHTML = `
        <div class="book-cover">
            ${series.coverUrl
            ? `<img src="${series.coverUrl}" alt="${series.title}" onerror="this.parentElement.innerHTML='<div class=\\'cover-placeholder\\'><i class=\\'fas fa-book\\'></i></div>'">`
            : `<div class="cover-placeholder"><i class="fas fa-book"></i></div>`
        }
            <div class="book-status-badge" style="background-color: ${statusInfo.color}">
                ${statusInfo.icon} ${series.bookCount} Books
            </div>
        </div>
        <div class="book-info">
            <h3 class="book-title">${series.title}</h3>
            <p class="book-author">by ${series.author}</p>
            <div class="book-meta">
                <span class="book-genre"><i class="fas fa-tag"></i> ${series.genre}</span>
            </div>
        </div>
    `;

    return card;
}

// Render star rating
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Open series detail modal
function openBookModal(series) {
    const modal = document.getElementById('bookModal');
    const modalBody = document.getElementById('modalBody');
    const statusInfo = statusConfig[series.status];

    // Create book list HTML
    const bookListHTML = series.books.map(book => `<li>${book}</li>`).join('');

    // Special rendering for written books (memoir)
    if (series.type === 'written') {
        modalBody.innerHTML = `
            <div class="modal-book-detail-no-cover">
                <div class="modal-book-info">
                    <h2>${series.title}</h2>
                    <p class="modal-author">by ${series.author}</p>
                    <div class="modal-meta">
                        <span class="modal-genre"><i class="fas fa-tag"></i> ${series.genre}</span>
                        <span class="modal-status" style="background-color: ${statusInfo.color}">
                            ${statusInfo.icon} ${series.bookCount} Books - ${statusInfo.label}
                        </span>
                    </div>
                    <div class="modal-notes">
                        <strong>Books in this series:</strong>
                        <ul class="series-book-list">
                            ${bookListHTML}
                        </ul>
                    </div>
                    ${series.notes ? `
                        <div class="modal-notes">
                            <strong>My Reflection:</strong>
                            <p>${series.notes}</p>
                        </div>
                    ` : ''}
                    <div class="blog-link-container">
                        <a href="life-stories.html" class="blog-link-btn">
                            <i class="fas fa-book-open"></i>
                            Explore the Full Story
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Standard rendering for read books
        modalBody.innerHTML = `
            <div class="modal-book-detail-no-cover">
                <div class="modal-book-info">
                    <h2>${series.title}</h2>
                    <p class="modal-author">by ${series.author}</p>
                    <div class="modal-meta">
                        <span class="modal-genre"><i class="fas fa-tag"></i> ${series.genre}</span>
                        <span class="modal-status" style="background-color: ${statusInfo.color}">
                            ${statusInfo.icon} ${series.bookCount} Books - ${statusInfo.label}
                        </span>
                    </div>
                    <div class="modal-notes">
                        <strong>Books in this series:</strong>
                        <ul class="series-book-list">
                            ${bookListHTML}
                        </ul>
                    </div>
                    ${series.notes ? `
                        <div class="modal-notes">
                            <strong>My Thoughts:</strong>
                            <p>${series.notes}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
}

// Attach event listeners
function attachEventListeners() {
    // Search
    document.getElementById('searchInput').addEventListener('input', filterAndRender);

    // Filters
    document.getElementById('statusFilter').addEventListener('change', filterAndRender);
    document.getElementById('genreFilter').addEventListener('change', filterAndRender);
    document.getElementById('sortSelect').addEventListener('change', filterAndRender);

    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('closeQuotesModal').addEventListener('click', closeQuotesModal);

    // View all quotes button
    document.getElementById('viewAllQuotesBtn').addEventListener('click', openQuotesModal);

    window.addEventListener('click', function (event) {
        const bookModal = document.getElementById('bookModal');
        const quotesModal = document.getElementById('quotesModal');
        if (event.target === bookModal) {
            closeModal();
        }
        if (event.target === quotesModal) {
            closeQuotesModal();
        }
    });
}

// Filter and render books
function filterAndRender() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const genreFilter = document.getElementById('genreFilter').value;
    const sortBy = document.getElementById('sortSelect').value;

    // Filter
    filteredBooks = booksData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm);
        const matchesStatus = statusFilter === 'all' || book.status === statusFilter;
        const matchesGenre = genreFilter === 'all' || book.genre === genreFilter;

        return matchesSearch && matchesStatus && matchesGenre;
    });

    // Sort
    filteredBooks.sort((a, b) => {
        switch (sortBy) {
            case 'title-asc':
                return a.title.localeCompare(b.title);
            case 'title-desc':
                return b.title.localeCompare(a.title);
            case 'author-asc':
                return a.author.localeCompare(b.author);
            case 'author-desc':
                return b.author.localeCompare(a.author);
            default:
                return 0;
        }
    });

    renderBooks(filteredBooks);
}

// ===================================
// Literary Quotes Functionality
// ===================================

// Display the featured quote (always show P.L. Deshpande quote with id=1)
function displayFeaturedQuote() {
    if (literaryQuotes.length === 0) return;

    // Always show the first quote (P.L. Deshpande) on the homepage
    const featuredQuote = literaryQuotes.find(q => q.id === 1) || literaryQuotes[0];

    document.getElementById('featuredQuoteText').textContent = featuredQuote.quote;
    document.getElementById('featuredQuoteBook').textContent = featuredQuote.book;
    document.getElementById('featuredQuoteAuthor').textContent = featuredQuote.author;
    document.getElementById('featuredQuoteThoughts').textContent = featuredQuote.thoughts;
}

// Open quotes modal and render all quotes
function openQuotesModal() {
    const modal = document.getElementById('quotesModal');
    const quotesGrid = document.getElementById('quotesGrid');

    quotesGrid.innerHTML = '';

    literaryQuotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <blockquote class="quote-card-text">${quote.quote}</blockquote>
            <div class="quote-card-attribution">
                <strong>${quote.book}</strong> — ${quote.author}
            </div>
            ${quote.thoughts ? `
                <div class="quote-card-thoughts">
                    <i class="fas fa-lightbulb"></i>
                    <p>${quote.thoughts}</p>
                </div>
            ` : ''}
        `;
        quotesGrid.appendChild(quoteCard);
    });

    modal.style.display = 'block';
}

// Close quotes modal
function closeQuotesModal() {
    const modal = document.getElementById('quotesModal');
    modal.style.display = 'none';
}
