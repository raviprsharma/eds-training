export default function decorate(block) {
    console.log(block, "EDS Banner")
    const cols = [...block.firstElementChild.children];
    [...cols].forEach((div)=>{
        const para = div.querySelectorAll('p');
        [...para].forEach((p, index)=>{
            index==0? p.classList.add('title') : p.classList.add('description')
        })
    })
  }
  