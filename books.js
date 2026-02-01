// Reading List Data - Series Based
// ==================
// This reading list groups books into series for cleaner organization
// Each series contains: title, author, genre, status, book list, and personal notes

const booksData = [
    {
        id: 1,
        type: "read",
        title: "Harry Potter Series",
        author: "J.K. Rowling",
        genre: "Fantasy",
        status: "completed",
        bookCount: 7,
        books: [
            "Harry Potter and the Philosopher's Stone (1997)",
            "Harry Potter and the Chamber of Secrets (1998)",
            "Harry Potter and the Prisoner of Azkaban (1999)",
            "Harry Potter and the Goblet of Fire (2000)",
            "Harry Potter and the Order of the Phoenix (2003)",
            "Harry Potter and the Half-Blood Prince (2005)",
            "Harry Potter and the Deathly Hallows (2007)"
        ],
        notes: "This series completely pulled me into its world and changed how I think about storytelling. What I love most is the moral complexity - Sirius Black's quote about the world not being split into good people and Death Eaters really resonates. The series taught me that everyone has both light and dark inside them, and it's our choices that define us. Harry's journey showed me that life is unfair, that anyone could be the hero (even Neville!), and that fate isn't predetermined - we choose who we become. The Deathly Hallows brought everything together beautifully, revealing the truth about Snape and showing Harry's ultimate sacrifice. These books taught me about resilience, the power of choice, and how to face moral complexity with courage.",
        coverUrl: "https://covers.openlibrary.org/b/id/10521270-L.jpg"
    },
    {
        id: 2,
        type: "read",
        title: "Sherlock Holmes Series",
        author: "Sir Arthur Conan Doyle",
        genre: "Mystery",
        status: "completed",
        bookCount: 9,
        books: [
            "A Study in Scarlet (1887)",
            "The Sign of the Four (1890)",
            "The Adventures of Sherlock Holmes (1892)",
            "The Memoirs of Sherlock Holmes (1893)",
            "The Hound of the Baskervilles (1902)",
            "The Return of Sherlock Holmes (1905)",
            "The Valley of Fear (1915)",
            "His Last Bow (1917)",
            "The Case-Book of Sherlock Holmes (1927)"
        ],
        notes: "Attention to detail is something I learned from Mr. Holmes. I would make a fine Watson because I am observant, but I'm just not Mr. Holmes - and that's okay. These stories taught me that seeing and observing are completely different things. Holmes's methods of deduction, his relentless pursuit of truth, and his ability to notice what everyone else misses have shaped how I approach problems. The Hound of the Baskervilles remains my favorite - the atmospheric moors, the gothic horror mixed with detective work, it's brilliant from start to finish. I loved the Benedict Cumberbatch adaptation; it's amazing how stories written in the late 1800s and early 1900s translate so well to the 2010s era. I never expected to enjoy it this much, but then again, one never knows. This series is a timeless dive into mystery, deduction, and the art of storytelling.",
        coverUrl: "assets/sherlock_cover.png"
    },
    {
        id: 3,
        type: "read",
        title: "Enid Blyton's Adventure Series",
        author: "Enid Blyton",
        genre: "Children's Adventure",
        status: "completed",
        bookCount: 2,
        books: [
            "The Ship of Adventure (1950)",
            "The River of Adventure (1955)"
        ],
        notes: "Amazing reads for beginners and teenagers! I loved the thrill and excitement of these adventures - full of mysteries, clever problem-solving, and daring escapades. The characters felt like companions on the journey, and I often imagined exploring ships and rivers just like them. Blyton has this incredible ability to make young readers feel brave and adventurous. These books taught me that adventure can be found anywhere if you're curious enough, and that obstacles are just stepping-stones to something better. Though I always wonder why their parents weren't worried when these kids went missing for a while - to be honest, I'd get a call from my mother if I was missing even for an hour. Maybe that's just an Indian thing!",
        coverUrl: "assets/enid_cover.png"
    },
    {
        id: 4,
        type: "written",
        title: "Could Have Been Shivani Instead of Soumya",
        author: "Soumya Sanjay Patil",
        genre: "Personal Memoir",
        status: "reading",
        bookCount: 1,
        books: [
            "My Life Story (In Progress - Because I'm Still Alive)"
        ],
        notes: "This 'book' of my life is full of adventures big and small. Chapters include getting lost in my city at the age of five and discovering the world with wide-eyed curiosity, navigating the challenges and isolation of the Covid years, and an internship that changed my perspective, teaching me lessons I couldn't have imagined. Each day is a new page, and I'm both the author and the protagonist of this ongoing story. The title reminds me that life could have taken a different turn, but this is MY story - with all its unexpected plot twists, character development, and moments of growth. The best part? I get to keep writing it.",
        coverUrl: "assets/soumya_life_cover.jpg"
    }
];

// Status display configuration
const statusConfig = {
    'completed': { label: 'Completed', color: '#27ae60', icon: '✓' },
    'reading': { label: 'Currently Reading', color: '#3498db', icon: '📖' },
    'to-read': { label: 'Want to Read', color: '#95a5a6', icon: '📚' }
};

// Genre list for filtering
const genres = [
    'All Genres',
    'Fantasy',
    'Mystery',
    'Children\'s Adventure',
    'Classic Fiction',
    'Science Fiction',
    'Non-Fiction'
];

// Literary Quotes & Inspired Thoughts
// ====================================
// Add your favorite quotes, passages, or thoughts inspired by your reading
// Each quote can reference a book from your reading list
const literaryQuotes = [

    {
        id: 1,
        quote: "The most meaningful moments in life happen when we’re not trying too hard — but when we’re simply present",
        book: "Jaave Tyancha Desha",
        author: "P.L. Deshpande",
        thoughts: "This is my personal interpretation of the first paragraph in the book.",
    },
    {
        id: 2,
        quote: "The world isn't split into good people and Death Eaters. We've all got both light and dark inside us. What matters is the part we choose to act on.",
        book: "Harry Potter and the Order of the Phoenix",
        author: "Sirius Black",
        thoughts: "This quote really shaped how I see moral complexity. It taught me that no one is purely good or evil - we all have the capacity for both, and it's our choices that define who we are.",
    }
];
