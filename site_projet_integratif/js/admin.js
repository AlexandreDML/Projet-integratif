// Graph 1 
var elt = document.getElementById("myChart");

var myChart = new Chart(elt, {
  type: "line",
  data: {
    labels: [
      "150",
      "155",
      "160",
      "165",
      "170",
      "175",
      "180",
      "185",
      "190",
      "195",
      "200",
      "205",
      "210",
    ],
    datasets: [
      {
        data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        lineTension: 0,
        backgroundColor: "transparent",
        borderColor: "#007bff",
        borderWidth: 4,
        pointBackgroundColor: "#007bff",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

//graph 2
var elt2 = document.getElementById("chart-pie");

var chart_pie = new Chart(elt2, {
  type: "pie",
  data: {
    labels: ["Glucide", "Lipide", "Protide"],
    datasets: [{
      label: "Données",
      data: [488, 807, 1243],
      backgroundColor: ["rgba(66,133,244,0.6)", "rgba(148,223,215,0.6)",
        "rgba(247,127,167,0.6)"
      ],
    }, ],
  },
});

const graph_afficher = document.getElementById("btn-france");
graph_afficher.addEventListener("click", afficherFrance);

    function afficherFrance() {
      document.getElementById("graphFR").style.display = "block";
      document.getElementById("graphPerso").style.display = "none";
    }

const graph_afficher2 = document.getElementById("btn-perso");
graph_afficher2.addEventListener("click", afficherPerso);
    
    function afficherPerso() {
      document.getElementById("graphPerso").style.display = "block";
      document.getElementById("graphFR").style.display = "none";
    }