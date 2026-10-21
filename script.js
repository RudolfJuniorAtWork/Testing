const listings=[
  {name:'Financial Accounting, 9th Ed.',category:'Books',price:'₹450',seller:'Priya S. · PGP 2',bg:'#c2d3b7',icon:'ƒx'},
  {name:'Study Lamp — barely used',category:'Lifestyle',price:'₹600',seller:'Arjun K. · PGP 1',bg:'#e6c99f',icon:'◒'},
  {name:'Casio Scientific Calculator',category:'Electronics',price:'₹750',seller:'Nikhil R. · IPM 5',bg:'#b6c6d6',icon:'⌑'},
  {name:'Badminton Racket + Cover',category:'Sports',price:'₹900',seller:'Mansi P. · PGP 1',bg:'#e3b9ab',icon:'◯'},
  {name:'Marketing Management notes',category:'Books',price:'₹250',seller:'Rhea M. · PGP 2',bg:'#d7cfab',icon:'M'},
  {name:'Ergonomic desk chair',category:'Furniture',price:'₹1,800',seller:'Dev S. · PGP 2',bg:'#b9d1ca',icon:'▣'},
  {name:'Noise cancelling headphones',category:'Electronics',price:'₹2,200',seller:'Ananya R. · PGP 1',bg:'#c7b8ce',icon:'◖'},
  {name:'Yoga mat, extra thick',category:'Sports',price:'₹400',seller:'Kabir N. · IPM 4',bg:'#e1c0a4',icon:'∿'}
];
const grid=document.querySelector('#listingGrid');let active='All',shown=4;
function render(){const filtered=active==='All'?listings:listings.filter(x=>x.category===active);grid.innerHTML=filtered.slice(0,shown).map(x=>`<article class="card"><div class="card-image" style="--card-bg:${x.bg}"><span class="tag">${x.category.toUpperCase()}</span><span class="placeholder">${x.icon}</span></div><h3>${x.name}</h3><div class="meta"><span>${x.seller}</span><span class="price">${x.price}</span></div></article>`).join('');document.querySelector('#loadMore').style.display=shown>=filtered.length?'none':'block'}
document.querySelector('#categories').addEventListener('click',e=>{if(!e.target.matches('.category'))return;document.querySelectorAll('.category').forEach(x=>x.classList.remove('active'));e.target.classList.add('active');active=e.target.dataset.category;shown=4;render()});
document.querySelector('#loadMore').onclick=()=>{shown+=4;render()};
const dialog=document.querySelector('#sellDialog');document.querySelector('#openSell').onclick=()=>dialog.showModal();document.querySelector('#closeSell').onclick=()=>dialog.close();
document.querySelector('#sellForm').onsubmit=e=>{e.preventDefault();dialog.close();const toast=document.querySelector('#toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3000);e.target.reset()};
document.querySelector('#filterButton').onclick=()=>{const toast=document.querySelector('#toast');toast.textContent='Filters will be available with the backend.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3000)};render();
