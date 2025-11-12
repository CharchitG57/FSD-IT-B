// const image = React.createElement("img", {
//   src: "https://m.media-amazon.com/images/I/816HBXHJsaL._UF1000,1000_QL80_.jpg",
//   height: "150",
//   width: "150",
//   alt: "book image"
// });

// const h4 = React.createElement("h4", null, "Price: 325/-");

// const child = React.createElement("div", { className: "card" }, image, h4);

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent); // 
// root.render(child);

function Book(props){
 const image=React.createElement("img",
    {
        src:props.image,
        width: 150,
        height: 150,
        alt: "Book Image"
    }
 );
 const h4=React.createElement("h4",null,`Price:${props.price}`);
 const child=React.createElement("div",{className: "card"},image,h4);
 return (child);
}
const books=[{
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602424550i/55625842.jpg",
    price: 235
},{
    image: "https://d2sofvawe08yqg.cloudfront.net/reactjs-documentation-pdf/s_hero?1620645510",
    price: 245
},{
    image: "https://m.media-amazon.com/images/I/61vg+0-1yGL._UF1000,1000_QL80_.jpg",
    price: 335
}];
const bookele=books.map(p=>(
 React.createElement(Book,{image:p.image,price:p.price})
))
const book=React.createElement("div",{className:"book-list"},bookele);
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);

root.render(book);