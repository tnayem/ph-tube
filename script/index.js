const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCatagories(data.categories))
}

// category_id: '1001',
// category: 'Music'

const displayCatagories = (catagories) => {
    const categoryContainer = document.getElementById("category-container")
    for (let cat of catagories) {
        const categoryDiv = document.createElement("div")
        categoryDiv.innerHTML = `
        <button class="btn btn-sm bg-[#25252515] hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv)
    }
}

// Load videos api
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}


const displayVideos = (videos) => {
    console.log(videos);
    const displayVideos = document.getElementById("display-video")
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
                    <p class="text-sm text-gray-400 flex gap-1">Awlad Hossain <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt=""></p>
                    <p class="text-sm text-gray-400">91K views</p>
                </div>
            </div>
        </div>
        `
        displayVideos.append(videoCard)
    });
}


loadVideos()
loadCatagories()