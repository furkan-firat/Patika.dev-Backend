const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        books.push(newBook);
        resolve("Kitap Başarıyla Eklendi.");
    }, 5000);
    
    
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

async function showBooks() {
  try {
    await addBook({ name: "Kitap 4", author: "Yazar 4" });
    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBooks();