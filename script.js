const link = "https://spreadsheets.google.com/feeds/list/1V5Bdd4MSLfpuNOXcmQzrql5b5HB_RebrYXiOILyPJOw/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData console");
    console.log(myData);
    myData.forEach(showData);
}

function showData(singleRowData) {
    console.log("singleRowData - console");
    console.log(singleRowData.gsx$name.$t);

    //Filling the template

    const template = document.querySelector('#productTemplate').content;
    const clone = template.cloneNode(true);

    const h3 = clone.querySelector('h3');
    h3.textContent = singleRowData.gsx$name.$t;

    clone.querySelector("button").addEventListener("click", () => {
        fetch(`https://spreadsheets.google.com/feeds/list/1V5Bdd4MSLfpuNOXcmQzrql5b5HB_RebrYXiOILyPJOw/od6/public/values?alt=json`)
            .then(res => res.json())
            .then(showModal);
    })

    const modal = document.querySelector("#productModal");
    modal.addEventListener("click", () => {
        modal.classList.add("hide");
    })

    function showModal(data) {
        console.log(data);
        modal.querySelector(".productName").textContent = singleRowData.gsx$name.$t;
                modal.querySelector(".regular").textContent = singleRowData.gsx$name.$t;
        modal.querySelector(".short_description").textContent = singleRowData.gsx$shortdescription.$t;
        modal.classList.remove("hide");

        const foodLink = singleRowData.gsx$links.$t;

        modal.querySelector(".link").setAttribute("href", foodLink);

        const imgLink = singleRowData.gsx$picture.$t;

        modal.querySelector("img").setAttribute("src", imgLink);
    }


    document.querySelector("main").appendChild(clone);
}
