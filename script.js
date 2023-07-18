// Calling People Sum

const peopleSum = document.getElementById('peopleSum');

// Adding Increments Function

const plusSum = document.getElementById('plusSum');
let countNum = 1

plusSum.addEventListener('click', ()=>{
  countNum ++
  peopleSum.textContent = countNum;
})

// Adding Decrement Function

const minusSum = document.getElementById('minusSum');

minusSum.addEventListener('click', () => {
  if (countNum > 1) {
    countNum--
  }
  peopleSum.textContent = countNum
})


// Calling Calclute Button Functions

const calcluteBtn = document.getElementById('calcluteBtn')
calcluteBtn.addEventListener('click', ()=>{
  // Calling Bill & Tip Function
  
  const totalBill = Number(document.getElementById('totalBill').value);
  const totalTip = Number(document.getElementById('totalTip').value);
  let tip = totalTip * totalBill/100
  let totalperson = peopleSum.innerHTML

 // Displaying Total Bills And Tips
 document.getElementById('sumBill').textContent = totalBill;
  document.getElementById('sumTip').textContent = tip;
  let tax = document.getElementById('sumTax').textContent = (totalBill+5)/100
  document.getElementById('totalPerPerson').textContent = ((totalBill + tip + tax)/totalperson).toFixed(2)
})