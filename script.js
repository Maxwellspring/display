const ctx = document.getElementById("pie");

v1 = 1
v2 = 2
v3 = 3
v4 = 4
v5 = 5
v6 = 6
v7 = 7
v8 = 8
v9 = 9
v10 = 10

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

