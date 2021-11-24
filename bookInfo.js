const book = {
    author: "J.K. Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    publisher: "Bloomsbury Pub Ltd.",
    ISBN: 9780747532743,
    "fan site": "https://www.wizardingworld.com/",
    "film-adaptation": "https://en.wikipedia.org/wiki/Harry_Potter_(film_series)",
  };
  
  const title = book.title
  console.log(title); // "Harry Potter and the Philosopher's Stone"
  
  const propertyStoredInVariable = "author";

  console.log(propertyStoredInVariable);
  const author = book[propertyStoredInVariable];
  // resolves to const author = book["author"];
  
  console.log(author); // "J.K. Rowling"
  
  // Dot notation will not work in this case:
  // nope: book does not have a key called propertyStoredInVariable
  // const author = book.propertyStoredInVariable; // undefined
  
  // Spaces or dashes in the name of the key?
  // Use bracket notation:
  const fansite = book["fan site"];
  const adaptation = book["film-adaptation"];

  
  
  // Dot notation will not work in these cases:
  
  // nope: space interpreted as next statement
  //const fansite = book.fan site
  
  // nope: - interpreted as minus operator
  // const adapataion = book.film-adaptation

   console.log(fansite);
   console.log(adaptation);