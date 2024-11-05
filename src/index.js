/* PART 1 */

// STEP 1: Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// STEP 2: Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// let myVar = "var(--main-bg)";
mainEl.style.backgroundColor = "var(--main-bg)";

// STEP 3: Set the content of mainEl to <h1>DOM Manipulation</h1>.
const h1_element = document.createElement("h1");
h1_element.innerHTML = "DOM Manipulation";
mainEl.appendChild(h1_element);

// STEP 4: Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

/* PART 2 */

// STEP 1: Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

// STEP 2: Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// STEP 3: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
let myOtherVar = "--top-menu-bg";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// STEP 4: Add a class of flex-around to topMenuEL.
topMenuEl.classList.add("flex-around");

/* PART 3 */

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Iterate over the entire menuLinks array and for each "link" object:
for (let i = 0; i < menuLinks.length; i++) {
  // Create an <a> element.
  let a_element = document.createElement("a");
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  a_element.attributes.href = menuLinks[i].href;
  // Set the new element's content to the value of the text property of the "link" object.
  a_element.innerHTML = menuLinks[i].text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(a_element);
}
