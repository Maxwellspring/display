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
let v22 = 0;
let v23 = 0;
let v24 = 0;
let v25 = 0;
let v26 = 0;
let v27 = 0;
let v28 = 0;
let v29 = 0;
let v30 = 0;
let v31 = 0;
let v32 = 0;
let v33 = 0;
let v34 = 0;
let v35 = 0;
let v36 = 0;
let v37 = 0;
let v38 = 0;
let v39 = 0;
let v40 = 0;
let v41 = 0;
let v42 = 0;
let v43 = 0;
let v44 = 0;
let v45 = 0;
let v46 = 0;
let v47 = 0;
let v48 = 0;
let v49 = 0;
let v50 = 0;
let v51 = 0;
let v52 = 0;
let v53 = 0;
let v54 = 0;
let v55 = 0;
let v56 = 0;
let v57 = 0;
let v58 = 0;
let v59 = 0;
let v60 = 0;
let v61 = 0;
let v62 = 0;
let v63 = 0;
let v64 = 0;
let v65 = 0;
let v66 = 0;
let v67 = 0;
let v68 = 0;
let v69 = 0;
let v70 = 0;
let v71 = 0;
let v72 = 0;
let v73 = 0;
let v74 = 0;
let v75 = 0;
let v76 = 0;
let v77 = 0;
let v78 = 0;
let v79 = 0;
let v80 = 0;
let v81 = 0;
let v82 = 0;
let v83 = 0;
let v84 = 0;
let v85 = 0;
let v86 = 0;
let v87 = 0;
let v88 = 0;
let v89 = 0;
let v90 = 0;
let v91 = 0;
let v92 = 0;
let v93 = 0;
let v94 = 0;
let v95 = 0;
let v96 = 0;
let v97 = 0;
let v98 = 0;
let v99 = 0;
let v100 = 0;
let v101 = 0;




const movingChart = new Chart(ctx, {
  data: {
    labels: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20", "p21", "p22", "p23", "p24", "p25", "p26", "p27", "p28", "p29", "p30", "p31", "p32", "p33", "p34", "p35", "p36", "p37", "p38", "p39", "p40", "p41", "p42", "p43", "p44", "p45", "p46", "p47", "p48", "p49", "p50", "p51", "p52", "p53", "p54", "p55", "p56", "p57", "p58", "p59", "p60", "p61", "p62", "p63", "p64", "p65", "p66", "p67", "p68", "p69", "p70", "p71", "p72", "p73", "p74", "p75", "p76", "p77", "p78", "p79", "p80", "p81", "p82", "p83", "p84", "p85", "p86", "p87", "p88", "p89", "p90", "p91", "p92", "p93", "p94", "p95", "p96", "p97", "p98", "p99", "p100"], 
    datasets: [{
      type: "pie",
      label: "Very", 
      data: [], 
      borderWidth: 2,
      borderColor: "blue",
      cubicInterpolationMode: "monotone",
      
    },{
      type: "line",
      label: "Cool", 
      data: [], 
      borderWidth: 2,
      borderColor: "blue",
      cubicInterpolationMode: "monotone",
      pointStyle: false,
      fill: {
        target: 'origin',
        above: 'rgb(157, 199, 253)',   // Area will be red above the origin
        below: 'rgb(29, 53, 97)' 
      }
      
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

function updateChart(variable, bar) {
  movingChart.data.datasets[0].data[variable] = bar;
  movingChart.data.datasets[1].data[variable] = bar;
}

function changeNumber() {

  // moveGraph = Math.round(Math.random() * 40 - 20) 
  moveGraph = Math.random() * 40 - 20

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
  v21 = v22
  v22 = v23
  v23 = v24
  v24 = v25
  v25 = v26
  v26 = v27
  v27 = v28
  v28 = v29
  v29 = v30
  v30 = v31
  v31 = v32
  v32 = v33
  v33 = v34
  v34 = v35
  v35 = v36
  v36 = v37
  v37 = v38
  v38 = v39
  v39 = v40
  v40 = v41
  v41 = v42
  v42 = v43
  v43 = v44
  v44 = v45
  v45 = v46
  v46 = v47
  v47 = v48
  v48 = v49
  v49 = v50
  v50 = v51
  v51 = v52
  v52 = v53
  v53 = v54
  v54 = v55
  v55 = v56
  v56 = v57
  v57 = v58
  v58 = v59
  v59 = v60
  v60 = v61
  v61 = v62
  v62 = v63
  v63 = v64
  v64 = v65
  v65 = v66
  v66 = v67
  v67 = v68
  v68 = v69
  v69 = v70
  v70 = v71
  v71 = v72
  v72 = v73
  v73 = v74
  v74 = v75
  v75 = v76
  v76 = v77
  v77 = v78
  v78 = v79
  v79 = v80
  v80 = v81
  v81 = v82
  v82 = v83
  v83 = v84
  v84 = v85
  v85 = v86
  v86 = v87
  v87 = v88
  v88 = v89
  v89 = v90
  v90 = v91
  v91 = v92
  v92 = v93
  v93 = v94
  v94 = v95
  v95 = v96
  v96 = v97
  v97 = v98
  v98 = v99
  v99 = v100
  v100 = moveGraph
  updateChart(0, v1)
  updateChart(1, v2)
  updateChart(2, v3)
  updateChart(3, v4)
  updateChart(4, v5)
  updateChart(5, v6)
  updateChart(6, v7)
  updateChart(7, v8)
  updateChart(8, v9)
  updateChart(9, v10)
  updateChart(10, v11)
  updateChart(11, v12)
  updateChart(12, v13)
  updateChart(13, v14)
  updateChart(14, v15)
  updateChart(15, v16)
  updateChart(16, v17)
  updateChart(17, v18)
  updateChart(18, v19)
  updateChart(19, v20)
  updateChart(20, v21)
  updateChart(21, v22)
  updateChart(22, v23)
  updateChart(23, v24)
  updateChart(24, v25)
  updateChart(25, v26)
  updateChart(26, v27)
  updateChart(27, v28)
  updateChart(28, v29)
  updateChart(29, v30)
  updateChart(30, v31)
  updateChart(31, v32)
  updateChart(32, v33)
  updateChart(33, v34)
  updateChart(34, v35)
  updateChart(35, v36)
  updateChart(36, v37)
  updateChart(37, v38)
  updateChart(38, v39)
  updateChart(39, v40)
  updateChart(40, v41)
  updateChart(41, v42)
  updateChart(42, v43)
  updateChart(43, v44)
  updateChart(44, v45)
  updateChart(45, v46)
  updateChart(46, v47)
  updateChart(47, v48)
  updateChart(48, v49)
  updateChart(49, v50)
  updateChart(50, v51)
  updateChart(51, v52)
  updateChart(52, v53)
  updateChart(53, v54)
  updateChart(54, v55)
  updateChart(55, v56)
  updateChart(56, v57)
  updateChart(57, v58)
  updateChart(58, v59)
  updateChart(59, v60)
  updateChart(60, v61)
  updateChart(61, v62)
  updateChart(62, v63)
  updateChart(63, v64)
  updateChart(64, v65)
  updateChart(65, v66)
  updateChart(66, v67)
  updateChart(67, v68)
  updateChart(68, v69)
  updateChart(69, v70)
  updateChart(70, v71)
  updateChart(71, v72)
  updateChart(72, v73)
  updateChart(73, v74)
  updateChart(74, v75)
  updateChart(75, v76)
  updateChart(76, v77)
  updateChart(77, v78)
  updateChart(78, v79)
  updateChart(79, v80)
  updateChart(80, v81)
  updateChart(81, v82)
  updateChart(82, v83)
  updateChart(83, v84)
  updateChart(84, v85)
  updateChart(85, v86)
  updateChart(86, v87)
  updateChart(87, v88)
  updateChart(88, v89)
  updateChart(89, v90)
  updateChart(90, v91)
  updateChart(91, v92)
  updateChart(92, v93)
  updateChart(93, v94)
  updateChart(94, v95)
  updateChart(95, v96)
  updateChart(96, v97)
  updateChart(97, v98)
  updateChart(98, v99)
  updateChart(99, v100)
  updateChart(100, v101)


  movingChart.update();

  document.getElementById("current-value").textContent = moveGraph

  document.getElementById("your-earnings").textContent = yourNumber

  return [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, moveGraph, whatYourNumberWillBe, yourNumber];
}

setInterval(changeNumber, 100)