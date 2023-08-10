import books from '../data/books.js';

let idNextBook = 3;

const getBooks = (req, res) => {
    res.status(200).json(books);
};

const getBookById = (req, res) => {
    const { id } = req.params;

    const foundBook = books.find(book => {
        return book.id === Number(id);
    });

    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'The id has to be a valid number.' });
    }

    if (!foundBook) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    return res.status(200).json(foundBook);
};

const registerBook = (req, res) => {
    const { title, author, year, numPages } = req.body;

    if (!title || title.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Title is required.' });
    }

    if (!author || author.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Author is required.' });
    }

    if (!year || String(year).split(' ').join('') === '') {
        return res.status(400).json({ message: 'Year is required.' });
    }

    if (!numPages || String(numPages).split(' ').join('') === '') {
        return res.status(400).json({ message: 'Number of pages is required.' });
    }

    const verifyBook = books.find(book => {
        return book.title === title;
    });

    if (verifyBook) {
        return res.status(400).json({ message: 'This book already exists.' });
    }

    const newBook = {
        id: idNextBook++,
        title,
        author,
        year,
        numPages,
    };

    books.push(newBook);

    return res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author, year, numPages } = req.body;

    if (!title || title.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Title is required.' });
    }

    if (!author || author.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Author is required.' });
    }

    if ((year && String(year).split(' ').join('') === '') || year === '') {
        return res.status(400).json({ message: 'Year is required.' });
    }
    if (year && isNaN(year)) {
        return res.status(400).json({ message: 'The year has to be a valid number.' });
    }

    if ((numPages && String(numPages).split(' ').join('') === '') || numPages === '') {
        return res.status(400).json({ message: 'Number of pages is required.' });
    }
    if (numPages && isNaN(numPages)) {
        return res.status(400).json({ message: 'The number of pages has to be a valid number.' });
    }

    const verifyBook = books.find(book => {
        return book.title === title;
    });

    if (verifyBook) {
        return res.status(400).json({ message: 'This book already exists.' });
    }

    const book = books.find(book => {
        return book.id === Number(id);
    });

    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'The id has to be a valid number.' });
    }

    if (!book) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    book.title = title;
    book.author = author;
    book.year = year;
    book.numPages = numPages;

    return res.status(200).json({ message: 'Book updated.' });
};

const updateInfoBook = (req, res) => {
    const { id } = req.params;
    const { title, author, year, numPages } = req.body;

    if ((title && title.split(' ').join('') === '') || title === '') {
        return res.status(400).json({ message: 'Title is required.' });
    }

    if ((author && author.split(' ').join('') === '') || author === '') {
        return res.status(400).json({ message: 'Author is required.' });
    }

    if ((year && String(year).split(' ').join('') === '') || year === '') {
        return res.status(400).json({ message: 'Year is required.' });
    }
    if (year && isNaN(year)) {
        return res.status(400).json({ message: 'The year has to be a valid number.' });
    }

    if ((numPages && String(numPages).split(' ').join('') === '') || numPages === '') {
        return res.status(400).json({ message: 'Number of pages is required.' });
    }
    if (numPages && isNaN(numPages)) {
        return res.status(400).json({ message: 'The number of pages has to be a valid number.' });
    }

    const verifyBook = books.find(book => {
        return book.title === title;
    });

    if (verifyBook) {
        return res.status(400).json({ message: 'This book already exists.' });
    }

    const book = books.find(book => {
        return book.id === Number(id);
    });

    if (isNaN(Number(id))) {
        return res.status(404).json({ message: 'The id has to be a valid number.' });
    }

    if (!book) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    if (title) {
        book.title = title;
    } else if (author) {
        book.author = author;
    } else if (year) {
        book.year = year;
    } else if (numPages) {
        book.numPages = numPages;
    }

    return res.status(200).json({ message: "Book's information updated." });
};

const deleteBook = (req, res) => {
    const { id } = req.params;

    const indexBook = books.findIndex(book => {
        return book.id === Number(id);
    });

    if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'The id has to be a valid number.' });
    }

    if (indexBook === -1) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    books.splice(indexBook, 1);

    return res.status(200).json({ message: 'Book removed.' });
};

export { getBooks, getBookById, registerBook, updateBook, updateInfoBook, deleteBook };
