/* =====================================
   KPI COUNTER ANIMATION
===================================== */

const counters =
document.querySelectorAll("[data-target]");

counters.forEach(counter => {

    const target =
    Number(counter.getAttribute("data-target"));

    const duration = 2000;

    const step =
    target / (duration / 16);

    let current = 0;

    const updateCounter = () => {

        current += step;

        if(current >= target){

            current = target;

        }

        if(target > 1000){

            counter.textContent =
            Math.floor(current).toLocaleString();

        }else{

            counter.textContent =
            Math.floor(current);

        }

        if(current < target){

            requestAnimationFrame(updateCounter);

        }

    };

    updateCounter();

});

/* =====================================
   REVENUE CHART
===================================== */

const revenueCanvas =
document.getElementById("revenueChart");

if(revenueCanvas){

    new Chart(revenueCanvas, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],

            datasets: [{

                label: "Revenue",

                data: [
                    12000,
                    19000,
                    15000,
                    25000,
                    30000,
                    42000,
                    38000,
                    45000,
                    50000,
                    47000,
                    55000,
                    62000
                ],

                borderColor: "#3b82f6",

                backgroundColor:
                "rgba(59,130,246,.12)",

                fill: true,

                tension: .4,

                borderWidth: 3,

                pointRadius: 5,

                pointHoverRadius: 7

            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true,

                    position: "top"

                }

            },

            interaction: {

                intersect: false,

                mode: "index"

            },

            scales: {

                y: {

                    beginAtZero: true,

                    grid: {

                        color:
                        "rgba(148,163,184,.2)"
                    }

                },

                x: {

                    grid: {

                        display: false

                    }

                }

            },

            animation: {

                duration: 1800

            }

        }

    });

}

/* =====================================
   TRAFFIC DONUT CHART
===================================== */

const trafficCanvas =
document.getElementById("trafficChart");

if(trafficCanvas){

    new Chart(trafficCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "Direct",
                "Social",
                "Referral",
                "Email"
            ],

            datasets: [{

                data: [
                    42,
                    28,
                    18,
                    12
                ],

                backgroundColor: [

                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#8b5cf6"

                ],

                borderWidth: 0

            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "70%",

            plugins: {

                legend: {

                    position: "bottom"

                }

            },

            animation: {

                animateRotate: true,

                duration: 2000

            }

        }

    });

}

/* =====================================
   OPTIONAL LIVE DATA DEMO
===================================== */

/*
Uncomment if you want fake live updates

setInterval(() => {

    const usersCounter =
    document.querySelector(
        '[data-target="12540"]'
    );

    if(usersCounter){

        let current =
        Number(
            usersCounter.textContent
            .replace(/,/g,'')
        );

        current++;

        usersCounter.textContent =
        current.toLocaleString();
    }

},10000);

*/

/* =====================================
   CHART RESIZE FIX
===================================== */

window.addEventListener("resize", () => {

    Chart.helpers.each(
        Chart.instances,
        function(instance){

            instance.resize();

        }
    );

});

/* =====================================
   DASHBOARD LOADED
===================================== */

console.log(
    "%cDashboard Charts Loaded",
    "color:#10b981;font-weight:bold;"
);