




const ctx = document.getElementById("pie");

v1 = 2
v2 = 1
v3 = 2
v4 = 3
v5 = 4
v6 = 5
v7 = 6
v8 = 7
v9 = 8
v10 = 9

function changeNumber() {
    v1++
    Chart.update()
    return v1
}

new Chart(ctx, {
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

setInterval(changeNumber(), 1000)

