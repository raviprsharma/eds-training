import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js'; 
export default async  function decorate(block) {
    console.log(block, "Place holder")
    const placeholders = await fetchPlaceholders(''); 
    console.log(placeholders)
    const cols = [...block.firstElementChild.children];
    [...cols].forEach((div)=>{
        const para = div.querySelectorAll('p');
        [...para].forEach((p, index)=>{
            index==0? p.classList.add('title') : p.classList.add('description')
        })
    })
  }
  