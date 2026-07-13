
const townForm = document.getElementById("townForm");
const townSearch = document.getElementById("townSearch");
const townSearchIcon = document.getElementById("townSerachIcon");

export default function setUptownSearchBar(onSearch){
    
    townForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        await onSearch(townSearch.value);
        townSearch.value = "";
    })
}