const ctx = document.getElementById("pie");

let v1 = 2
let v2 = 1
let v3 = 2
let v4 = 3
let v5 = 4
let v6 = 5
let v7 = 6
let v8 = 7
let v9 = 8
let v10 = 9



const movingChart = new Chart(ctx, {
    type: "line", data: {
        labels: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"], datasets: [{
            label: "vowels", data: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10], borderWidth: 1
        }]
    }, options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function changeNumber() {
    v1++
    movingChart.data.datasets[0].data[0] = v1
    movingChart.update()
    movingChart.data.datasets[1].data[1] = v2
    movingChart.update()
    movingChart.data.datasets[2].data[2] = v3
    movingChart.update()
    movingChart.data.datasets[3].data[3] = v4
    movingChart.update()
    movingChart.data.datasets[4].data[4] = v5
    movingChart.update()
    movingChart.data.datasets[5].data[5] = v6
    movingChart.update()
    return v1;
}

setInterval(changeNumber, 1000)

/*

const ctx = document.getElementById("pie");

let v1 = 2; // Use let for variables that will change
const v2 = 1; // Use const for variables that will not change
const v3 = 2;
const v4 = 3;
const v5 = 4;
const v6 = 5;
const v7 = 6;
const v8 = 7;
const v9 = 8;
const v10 = 9;

// Store the chart instance
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"],
    datasets: [{
      label: "vowels",
      data: [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function changeNumber() {
  v1++;  // Increment v1

  // Update the chart data
  myChart.data.datasets[0].data[0] = v1; // Update the first data point (v1)
  myChart.update(); // Redraw the chart

  return v1; // Return the updated value (optional)
}

setInterval(changeNumber, 1000); // Pass the function itself, not the result of calling it*/