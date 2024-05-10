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