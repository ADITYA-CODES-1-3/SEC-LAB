// === Library Management System ===

// 1️ Base class: Book
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = new Date(publishedYear, 0); // Month is 0-indexed
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.publishedYear.getFullYear()}`;
    }
}

// 2️ Subclass: EBook (inherits from Book)
class EBook extends Book {
    constructor(title, author, publishedYear, fileSize) {
        super(title, author, publishedYear); // Call parent constructor
        this.fileSize = fileSize; // in MB
    }

    // 3️ Override getSummary()
    getSummary() {
        // Call the parent version + add fileSize
        return `${super.getSummary()} [File Size: ${this.fileSize}MB]`;
    }
}

// 4️  Create Book instances
const book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// 5️ Create EBook instances
const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, 2.5);
const ebook2 = new EBook("Zero to One", "Peter Thiel", 2014, 1.2);

// 6️ Print summaries
console.log(" Book Summaries:");
console.log(book1.getSummary());
console.log(book2.getSummary());

console.log("\n  EBook Summaries:");
console.log(ebook1.getSummary());
console.log(ebook2.getSummary());
