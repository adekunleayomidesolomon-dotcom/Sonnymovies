const movies = [
 {title:"Big Buck Bunny",year:2008,genre:"Animation",rating:"7.5",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",overview:"An open movie created by the Blender Foundation. Visit the official project page for licensing and viewing information.",trailer:"https://www.youtube.com/embed/YE7VzlLtp-4",source:"https://peach.blender.org/"},
 {title:"Sintel",year:2010,genre:"Adventure",rating:"7.4",poster:"https://durian.blender.org/wp-content/uploads/2010/05/sintel-poster.jpg",overview:"An open movie from the Blender Foundation. Visit the official project page for licensing and viewing information.",trailer:"https://www.youtube.com/embed/eRsGyueVLvQ",source:"https://durian.blender.org/"},
 {title:"Tears of Steel",year:2012,genre:"Action",rating:"5.9",poster:"https://mango.blender.org/wp-content/uploads/2013/05/TOS-poster.png",overview:"A science-fiction open movie created by the Blender Foundation. Visit the official project page for legal viewing and download options.",trailer:"https://www.youtube.com/embed/R6MlUcmOul8",source:"https://mango.blender.org/"},
 {title:"Elephants Dream",year:2006,genre:"Drama",rating:"6.8",poster:"https://orange.blender.org/wp-content/themes/orange/images/ed-bird.jpg",overview:"An early open movie project from the Blender Foundation. Visit its official page for licensing and downloads.",trailer:"https://www.youtube.com/embed/VA0rDtg0ydA",source:"https://orange.blender.org/"}
];

const grid=document.getElementById("movieGrid"), search=document.getElementById("search"), empty=document.getElementById("empty");
const modal=document.getElementById("modal"), modalBody=document.getElementById("modalBody");
let genre="All";

function render(){
 const q=search.value.toLowerCase().trim();
 const list=movies.filter(m=>(genre==="All"||m.genre===genre)&&`${m.title} ${m.genre} ${m.year}`.toLowerCase().includes(q));
 grid.innerHTML=list.map(m=>`<article class="card" data-index="${movies.indexOf(m)}"><img class="poster" src="${m.poster}" alt="${m.title} poster" loading="lazy"><div class="card-body"><h3>${m.title}</h3><div class="meta">${m.year} · ${m.genre}</div><div class="rating">★ ${m.rating}</div></div></article>`).join("");
 empty.style.display=list.length?"none":"block";
}
grid.addEventListener("click",e=>{
 const card=e.target.closest(".card"); if(!card)return;
 const m=movies[Number(card.dataset.index)];
 modalBody.innerHTML=`<div class="detail"><div><img src="${m.poster}" alt="${m.title} poster"></div><div><p class="eyebrow">${m.genre.toUpperCase()} · ${m.year}</p><h2>${m.title}</h2><p>${m.overview}</p><a class="watch" href="${m.source}" target="_blank" rel="noopener">Official movie page</a><iframe class="trailer" src="${m.trailer}" title="${m.title} trailer" allowfullscreen loading="lazy"></iframe></div></div>`;
 modal.classList.add("show"); modal.setAttribute("aria-hidden","false");
});
document.getElementById("close").onclick=()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true");modalBody.innerHTML=""};
modal.addEventListener("click",e=>{if(e.target===modal)document.getElementById("close").click()});
search.addEventListener("input",render);
document.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");genre=b.dataset.genre;render()}));
render();
