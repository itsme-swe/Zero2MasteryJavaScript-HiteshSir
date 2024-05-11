## Selectors used in DOM
Selectors are used to efficiently select and manipulate specific selected element within an HTML Document.

**1. getElementById :** Selects an element by its unique ID attribute.

    let element = document.getElementById('idName');

**2. getElementsByClassName :** Selects elements by their class attribute.

    let elements = document.getElementsByClassName('className');

**3. getElementsByTagName :** Selects elements by their tag name.

    let elements = document.getElementsByTagName("div");

**4. querySelector :** Selects the first element that matches a specified selector.

    let element =  document.querySelector("#myId or .myClass");

**5. querySelectorAll :** Selects all elements that match a specified selector. 

    let elements = document.querySelectorAll("p.myClass");

## Updating Existing Content 
**1. innerHTML :** Use to **get** and **set** the HTML Elements including any child elements and their HTML markup.

**2. innerText :** Used to display only visisble text within an element, excluding any child element. 

**3. outerHTML :** Display the HTML content of an element, including the element itself, as a string.

**3. textContent :** Display the text content of an element and all its descendants, excluding any HTML markup.
