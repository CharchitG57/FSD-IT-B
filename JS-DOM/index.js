const child=document.createElement("div");
child.class="card";
const image=document.createElement("img");
image.src="https://m.media-amazon.com/images/I/816HBXHJsaL._UF1000,1000_QL80_.jpg"
image.width="150";
image.height="150";
const h4=document.createElement("h4");
h4.innerText="Price: 350/-";
child.appendChild(image);
child.appendChild(h4);
const parent=document.getElementById("root");
parent.appendChild(child);
