/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
  const d6Mean = document.querySelector('#d6-rolls-mean');
  const d6Median = document.querySelector('#d6-rolls-median');
  const d6Mode = document.querySelector('#d6-rolls-mode');
  const d6Img = document.querySelector('#d6-roll')

  const doubleD6Mean = document.querySelector('#double-d6-rolls-mean');
  const doubleD6Median = document.querySelector('#double-d6-rolls-median');
  const doubleD6Mode = document.querySelector('#double-d6-rolls-mode');
  const doubleD6Img1 = document.querySelector('#double-d6-roll-1')
  const doubleD6Img2 = document.querySelector('#double-d6-roll-2')

  const d12Mean = document.querySelector('#d12-rolls-mean');
  const d12Median = document.querySelector('#d12-rolls-median');
  const d12Mode = document.querySelector('#d12-rolls-mode');
  const d12Img = document.querySelector('#d12-roll')

  const d20Mean = document.querySelector('#d20-rolls-mean');
  const d20Median = document.querySelector('#d20-rolls-median');
  const d20Mode = document.querySelector('#d20-rolls-mode');
  const d20Img = document.querySelector('#d20-roll')

function defaultDisplay(){
  //D6 defult display
  d6Mean.innerText = 'NA'
  d6Median.innerText = 'NA'
  d6Mode.innerText = 'NA'
  d6Img.src = 'images/start/d6.png'

  // 2D6 defult display
  doubleD6Mean.innerText = 'NA'
  doubleD6Median.innerText = 'NA'
  doubleD6Mode.innerText = 'NA'
  doubleD6Img1.src = 'images/start/d6.png'
  doubleD6Img2.src = 'images/start/d6.png'

  // D12 defult display
  d12Mean.innerText = 'NA'
  d12Median.innerText = 'NA'
  d12Mode.innerText = 'NA'
  d12Img.src = 'images/start/d12.jpeg'

  // D20 defult display
  d20Mean.innerText = 'NA'
  d20Median.innerText = 'NA'
  d20Mode.innerText = 'NA'
  d20Img.src = 'images/start/d20.jpg'
}
defaultDisplay()

/*******************
 * EVENT LISTENERS *
 *******************/

//rolling d6
const sixRoller = document.querySelector('#d6-roll');
sixRoller.addEventListener('click', rollD6)

function rollD6(){
  const sixResult = document.querySelector('img#d6-roll');
  const d6 = getRandomNumber(6);
  // let counter = 0
  // setTimeout(function (){
  //   while(counter <= 10){
  //   const randD6 = getRandomNumber(6)
  //   sixResult.src = `images/d6/${randD6}.png`
  //   console.log(counter, '-', randD6)
  //   counter++
  //   }
    
  // },200)
  sixResult.src = `images/d6/${d6}.png`
  sixes.push(d6);
  console.log(sixes);
  d6Mean.innerText = getMean(sixes)
  d6Median.innerText = getMedian(sixes)
  d6Mode.innerText = getMode(sixes)
}


//rolling 2d6
const doubleSixesRoller1 = document.querySelector('#double-d6-roll-1');
const doubleSixesRoller2 = document.querySelector('#double-d6-roll-2');
doubleSixesRoller1.addEventListener('click', doubleD6Roll)
doubleSixesRoller2.addEventListener('click', doubleD6Roll)

function doubleD6Roll(){
  const doubleSixesResult1 = document.querySelector('img#double-d6-roll-1');
  const doubleSixesResult2 = document.querySelector('img#double-d6-roll-2');
  const d61 = getRandomNumber(6);
  const d62 = getRandomNumber(6);
  doubleSixesResult1.src = `images/d6/${d61}.png`
  doubleSixesResult2.src = `images/d6/${d62}.png`
  let rolled2D6 = d61 + d62
  doubleSixes.push(rolled2D6);
  console.log(doubleSixes);
  doubleD6Mean.innerText = getMean(doubleSixes)
  doubleD6Median.innerText = getMedian(doubleSixes)
  doubleD6Mode.innerText = getMode(doubleSixes)
}

//rolling d12
const twelveRoller = document.querySelector('#d12-roll');
twelveRoller.addEventListener('click', function(){
  const twelveResult = document.querySelector('img#d12-roll');
  const d12 = getRandomNumber(12);
  twelveResult.src = `images/numbers/${d12}.png`
  twelves.push(d12);
  console.log(twelves);
  d12Mean.innerText = getMean(twelves)
  d12Median.innerText = getMedian(twelves)
  d12Mode.innerText = getMode(twelves)
})

//rolling d20
const twentiesRoller = document.querySelector('#d20-roll');
twentiesRoller.addEventListener('click', function(){
  const twentiesResult = document.querySelector('img#d20-roll');
  const d20 = getRandomNumber(20);
  twentiesResult.src = `images/numbers/${d20}.png`
  twenties.push(d20);
  console.log(twenties);
  d20Mean.innerText = getMean(twenties)
  d20Median.innerText = getMedian(twenties)
  d20Mode.innerText = getMode(twenties)
})


/******************
 * RESET FUNCTION *
 ******************/
const reset = document.querySelector('#reset-button');
reset.addEventListener('click', function(){
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
  
  defaultDisplay()
})



/****************
 * MATH SECTION *
 ****************/

function getMean(arr){
  let result = 0
  for( a of arr){
    result += a
  }
  return (result/arr.length).toFixed(2)
}

function getMedian(arr){
  arr = arr.sort()
  console.log(arr, 'sorted')
  let result = arr[0]
  let temp = Math.floor(arr.length/2)
  if(arr.length %2 == 0){
    result = (arr[temp] + arr[temp-1])/2
  }
  else if (arr.length === 1){
    return result.toFixed(2)
  }
  else{
    result = arr[temp]
  }
  return result.toFixed(2)
}

function getMode(arr){
  let result = arr[0]
  let max = 0
  for(let i=0; i<arr.length; i++){
      let counter = 0
      for(let j=i+1; j<arr.length; j++){
          if(arr[j] == arr[i]){
          counter++
          }
      }
      if (counter > max){
          result = arr[i]
          max = counter
      }
      arr = arr.filter(a => a != arr[i])
      i--
  }
  return result.toFixed(2)
}