const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");

// const data = [
//     {id: 1, txt: `That is, "There is nothing intricate or complicated in it that may be beyond anyone's understanding nor is there anything that deviates from the straight path of the Truth and thus cause hesitation in the mind of a truth-loving person."`},
//     {id: 2, txt: `"Those people" includes the Christians, the Jews and the mushrik Arabs who assigned offspring to Allah.`},
//     {id: 3, txt: "_____"}
// ]

const data = [...document.getElementsByClassName('sdfootnotesym')];
const footNotes = []
for (let i = 0; i < data.length; ++i)
{
  footNotes[i] = {
    'id': i + 1,
    'txt': data[i].nextSibling.textContent.replace(/\n/g, '')
  }
}
console.log(footNotes);

let tooltipID;
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseenter", (e) => {

    tooltipID = e.target.getAttribute('data-id');
    tooltipContainer.classList.add("fade-in");
    tooltipContainer.style.left = `${e.pageX}px`;
    tooltipContainer.style.top = `${e.pageY}px`;
    tooltipContainer.innerText = footNotes[tooltipID - 1].txt;

  });

  tooltip.addEventListener("mouseout", (e) => {
    tooltipContainer.classList.remove("fade-in");
  });
});

tooltipContainer.addEventListener('mouseenter', () => {

    tooltipContainer.classList.add("fade-in");

})
tooltipContainer.addEventListener('mouseout', () => {
    
    tooltipContainer.classList.remove("fade-in");

})