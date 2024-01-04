const books = [
  {
    name: "Kitap 1",
    author: "Yazar 1"
  },
  {
    name: "Kitap 2",
    author: "Yazar 2"
  },
  {
    name: "Kitap 3",
    author: "Yazar 3"
  },
  {
    name: "Kitap 4",
    author: "Yazar 4"
  }
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name)
  })
}

const addBook = (book) => {
  let promise = new Promise((resolve, reject) => {
    books.push(book);
    resolve("Kitap Eklendi")
    //reject("Kitap Eklenirken Bir Sorun Oluştu.")
  });

  return promise;
};

addBook({name: "Kitap 61", author: "Yazar 61"})
.then((result) => {
  console.log(result)
  console.log("Kitap Listesi")
  listBooks();
})
.catch((err) => {
  console.log(err)
  console.log("Kitap Listesi")
  listBooks();
})