// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Kerrell Stiff" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// access the button with id of 'add gb'
const plusBtn = document.querySelector('#add-gb')
// access the button with id of 'add cc'
const ccplusBtn = document.querySelector('#add-cc')
// access the button with id of 'minus cc'
// const minusBtn = document.querySelector('#minus-cc')
// access the button with id of 'total cc'
const cctotal = document.querySelector('#qty-cc')
// access the button with id of 'minus gb'
const minusBtn = document.querySelector('#minus-gb')
const gbtotal = document.querySelector('#qty-gb')
// access the button with id of 'total gb'
const totalBtn = document.querySelector('#qty-gb')
const ssplusBtn = document.querySelector('#add-sugar')
const sugartotal = document.querySelector('#qty-sugar')
// add event listener to the '+' button
const gbminusBtn = document.querySelector('#minus-gb')
const total = document.querySelector('#qty-total')
let totalcookies = 0

gbminusBtn.addEventListener('click', function(){
    gb = gb-1
    gbtotal.textContent =gb
})

plusBtn.addEventListener('click', function(){
    gb = gb+1
gbtotal.textContent = gb
// total.addEventListener('click', function(){
    totalcookies = gb+cc+sugar
    total.textContent = totalcookies
})




// add event listener to the '+' button
ccplusBtn.addEventListener('click', function(){
    cc = cc+1
    cctotal.textContent = cc
    totalcookies = gb+cc+sugar
    total.textContent = totalcookies
})

ssplusBtn.addEventListener('click', function(){
    sugar = sugar+1
    sugartotal.textContent = sugar
    totalcookies = gb+cc+sugar
    total.textContent = totalcookies




})
// add evnt listener to the '-' button
minusBtn.addEventListener('click', function(){
    totalcookies = gb+cc+sugar
    total.textContent = totalcookies
})











// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`