let listItems = [...document.querySelectorAll("li")];
// console.log(listItems);

let options = {
    rootMargin: '-10%',
    threshold: 0.0
};

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    console.log(entries)
}

listItems.forEach(item => {
    observer.observe(item)
})