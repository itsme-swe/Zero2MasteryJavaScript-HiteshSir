const title = document.getElementById('title')

console.log(title.innerHTML);  // Use to get the HTML Element

// Output: DOM Learning First Class <span>By Hitesh Sir</span> 

title.innerHTML = "BOM Learning First Class <span>By LoveBabar Sir</span>"      // Use to set the HTML Element

console.log(title.outerHTML);
// Output: <h1 id="title" class="heading">BOM Learning First Class <span>By LoveBabar Sir</span></h1>

console.log(title.innerText);
// Output: BOM Learning First Class By LoveBabar Sir

console.log(title.textContent);
// Output: BOM Learning First Class By LoveBabar Sir 


/*
◽ Now here we'll be fetching elements with the ".className"
*/

let newElement = document.getElementsByClassName('count')
console.log(newElement);

/*
    The output we get is HTML collection so we cannot apply array methods on it to iterate over the elements.

    🔸Output:  HTMLCollection(5) [div.count, div.count, div.count, div.count, div.count]

    So, now we'll converting this HTML collection into Array by using "Array.from()" method

*/

const convertedElement = Array.from(newElement)
console.log(convertedElement);      // Output: [div.count, div.count, div.count, div.count, div.count]


// Now we'll be iterating over the elements using forEach() and changing the color of the elements.
convertedElement.forEach( (li) => {
    li.style.color = "orange";
    li.style.backgroundColor = "yellow"
} )








