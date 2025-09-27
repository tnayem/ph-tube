const loadCatagories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCatagories(data.categories))
}

// category_id: '1001',
// category: 'Music'

const displayCatagories=(catagories)=>{
    const categoryContainer = document.getElementById("category-container")
    for(let cat of catagories){
        const categoryDiv = document.createElement("div")
        categoryDiv.innerHTML=`
        <button class="btn btn-sm bg-[#25252515]">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}

loadCatagories()