// Doc : https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

let listItems = [...document.querySelectorAll("li")];
// console.log(listItems);

    options = {
        rootMargin: '-10%',
        threshold: 0.0
    };

    observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    // console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let letters = [...entry.target.querySelectorAll("span")];
            letters.forEach((letter, idx) => {
                // console.log(idx);
                setTimeout(() => {
                    letter.classList.add("active")
                }, idx * 10);
            })
            entry.target.children[0].classList.add("active")
        }
    })
};

listItems.forEach(item => {
    let newString = "";
        itemText = item.children[0].innerHTML.split("");
    itemText.map(letter => (newString += letter == " " ? `<span class="gap"></span>` : `<span>${letter}</span>`));
    console.log(itemText);
    item.innerHTML = newString;
    observer.observe(item)
})