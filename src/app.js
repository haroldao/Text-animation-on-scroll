// Doc : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

let listItems = [...document.querySelectorAll("li")];
// console.log(listItems);

let options = {
    rootMargin: '-10%',
    threshold: 0.0
};

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.children[0].classList.add("active")
        }
    })
}

listItems.forEach(item => {
    observer.observe(item)
})