const ctx = document.getElementById("pie");

let yourNumber = 1

let inStocks = false

let moveGraph = 0

let v1 = 0;
let v2 = 0;
let v3 = 0;
let v4 = 0;
let v5 = 0;
let v6 = 0;
let v7 = 0;
let v8 = 0;
let v9 = 0;
let v10 = 0;
let v11 = 0;
let v12 = 0;
let v13 = 0;
let v14 = 0;
let v15 = 0;
let v16 = 0;
let v17 = 0;
let v18 = 0;
let v19 = 0;
let v20 = 0;
let v21 = 0;



const movingChart = new Chart(ctx, {
  data: {
    labels: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20", "p21"], 
    datasets: [{
      type: "bar",
      label: "vowels", 
      data: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21], 
      borderWidth: 2,
      borderColor: "blue",
      cubicInterpolationMode: "monotone",
      
    },{
      type: "line",
      label: "vowels", 
      data: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21], 
      borderWidth: 2,
      borderColor: "blue",
      cubicInterpolationMode: "monotone",
      
    }]
  }, options: {
    scales: {
      y: {
        beginAtZero: false,
        min: -10,
        max: 10,
      }
    }, animation: {
      duration: 1000, // Set duration to 0 for instant updates
      easing: 'linear' // Optional, but good to ensure linearity
  }
  }
});

function invest() {
let inStocks = true
return inStocks
}

function profit() {
  let inStocks = false
  return inStocks
}

function changeNumber() {

  moveGraph = Math.round(Math.random() * 100 - 50) 

  // let whatYourNumberWillBe = yourNumber

  // whatYourNumberWillBe *= moveGraph

  if (inStocks == true) {
    yourNumber += moveGraph
  } else {
    yourNumber = yourNumber
  }
  
  v1 = v2
  v2 = v3
  v3 = v4
  v4 = v5
  v5 = v6
  v6 = v7
  v7 = v8
  v8 = v9
  v9 = v10
  v10 = v11
  v11 = v12
  v12 = v13
  v13 = v14
  v14 = v15
  v15 = v16
  v16 = v17
  v17 = v18
  v18 = v19
  v19 = v20
  v20 = v21
  v21 = moveGraph
  movingChart.data.datasets[0].data[0] = v1;
  movingChart.update();
  movingChart.data.datasets[1].data[0] = v1;
  movingChart.update();
  movingChart.data.datasets[0].data[1] = v2;
  movingChart.update();
  movingChart.data.datasets[1].data[1] = v2;
  movingChart.update();
  movingChart.data.datasets[0].data[2] = v3;
  movingChart.update();
  movingChart.data.datasets[1].data[2] = v3;
  movingChart.update();
  movingChart.data.datasets[0].data[3] = v4;
  movingChart.update();
  movingChart.data.datasets[1].data[3] = v4;
  movingChart.update();
  movingChart.data.datasets[0].data[4] = v5;
  movingChart.update();
  movingChart.data.datasets[1].data[4] = v5;
  movingChart.update();
  movingChart.data.datasets[0].data[5] = v6;
  movingChart.update();
  movingChart.data.datasets[0].data[6] = v7;
  movingChart.update();
  movingChart.data.datasets[0].data[7] = v8;
  movingChart.update();
  movingChart.data.datasets[0].data[8] = v9;
  movingChart.update();
  movingChart.data.datasets[0].data[9] = v10;
  movingChart.update();
  movingChart.data.datasets[0].data[10] = v11;
  movingChart.update();
  movingChart.data.datasets[0].data[11] = v12;
  movingChart.update();
  movingChart.data.datasets[0].data[12] = v13;
  movingChart.update();
  movingChart.data.datasets[0].data[13] = v14;
  movingChart.update();
  movingChart.data.datasets[0].data[14] = v15;
  movingChart.update();
  movingChart.data.datasets[0].data[15] = v16;
  movingChart.update();
  movingChart.data.datasets[0].data[16] = v17;
  movingChart.update();
  movingChart.data.datasets[0].data[17] = v18;
  movingChart.update();
  movingChart.data.datasets[0].data[18] = v19;
  movingChart.update();
  movingChart.data.datasets[0].data[19] = v20;
  movingChart.update();
  movingChart.data.datasets[0].data[20] = v21;
  movingChart.update();



  document.getElementById("current-value").textContent = moveGraph

  document.getElementById("your-earnings").textContent = yourNumber

  return [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, moveGraph, whatYourNumberWillBe, yourNumber];
}

setInterval(changeNumber, 100)