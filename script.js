const smallCups = document.querySelectorAll(".cup-small");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
updatebigcups();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => fillcups(idx));
  // console.log(cup,idx);
});
function fillcups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    //   console.log(idx2,idx);
    } else {
      cup.classList.remove("full");
    }
  });
  updatebigcups();

}

function updatebigcups(){
    const fullcups = document.querySelectorAll('.cup.cup-small.full').length;
    const allcups = smallCups.length;
    // console.log(fullcups,allcups);
    if(fullcups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullcups / allcups * 330}px`;
        percentage.innerHTML = `${fullcups / allcups * 100}%`
    }
    if(fullcups === allcups){
        remained.style.visibility ='hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility ='visible';
        liters.innerHTML = `${2-(250 * fullcups / 1000)}L`
    }

}