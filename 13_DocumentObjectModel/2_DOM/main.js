const parent = document.querySelector('.parent')

console.log(parent);
console.log(parent.children);

for (let i = 0 ; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
    
}

parent.children[1].style.color = "orange";

console.log(parent.firstElementChild);

const child = document.querySelector('.day')

console.log(parent.lastElementChild);

console.log(child.parentElement);

console.log(child.nextElementSibling);

console.log("NODES: ", parent.childNodes);









