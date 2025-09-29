const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCatagories(data.categories))
}
// Remove active class function
const removeActiveClass = ()=>{
    const activeBtns = document.getElementsByClassName("active")
    for(let btn of activeBtns){
        btn.classList.remove('active')
    }
}
// category_id: '1001',
// category: 'Music'

const displayCatagories = (catagories) => {
    const categoryContainer = document.getElementById("category-container")
    for (let cat of catagories) {
        const categoryDiv = document.createElement("div")
        categoryDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="loadCategoryVideo(${cat.category_id})" class="btn btn-sm bg-[#25252515] hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}

// Load videos api
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data =>{
            const btnAll = document.getElementById("btn-all")
            btnAll.classList.add("active")
            displayVideos(data.videos)
        })
}


const displayVideos = (videos) => {
    console.log(videos);
    const displayVideos = document.getElementById("display-video")
    displayVideos.innerHTML = " "
    if(videos.length == 0){
        displayVideos.innerHTML =`
        <div class="col-span-full text-center flex flex-col items-center py-[120px]">
            <img class="w-[120px]" src="/assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Opps !! Sorry there is no content here...</h2>
        </div>
        `
        return;
    }
    videos.forEach(video => {
        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
        <div class="card bg-base-100">
            <figure class="relative">
                <img class="w-full h-[240px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 right-2 bg-black text-white p-2 text-sm rounded-lg">3hrs 56 min
                    ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-semibold">${video.title}</h2>
                    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt=""></p>
                    <p class="text-sm text-gray-400">${video.others.views} views</p>
                </div>
            </div>
        </div>
        `
        displayVideos.append(videoCard)
    });
}

// Display video by category 
const loadCategoryVideo = (categoryId)=>{
    const categoryApi = `https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`
    fetch(categoryApi)
    .then(res=>res.json())
    .then(data=>{
        removeActiveClass()
        const clickedBtn = document.getElementById(`btn-${categoryId}`)
        clickedBtn.classList.add("active")
        
        displayVideos(data.category)
    })
}

loadCatagories()