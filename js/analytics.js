/* =====================================
   ANALYTICS CHARTS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       REVENUE TREND
    ========================== */

    const revenueCanvas =
    document.getElementById("revenueChart");

    if(revenueCanvas){

        new Chart(revenueCanvas,{

            type:"line",

            data:{
                labels:[
                    "Jan","Feb","Mar",
                    "Apr","May","Jun",
                    "Jul","Aug","Sep",
                    "Oct","Nov","Dec"
                ],

                datasets:[{

                    label:"Revenue",

                    data:[
                        12000,
                        18000,
                        15000,
                        22000,
                        26000,
                        31000,
                        35000,
                        39000,
                        42000,
                        47000,
                        52000,
                        61000
                    ],

                    borderColor:"#3b82f6",

                    backgroundColor:
                    "rgba(59,130,246,.15)",

                    fill:true,

                    tension:.4

                }]
            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                plugins:{
                    legend:{
                        display:true
                    }
                }

            }

        });

    }

    /* ==========================
       USER GROWTH
    ========================== */

    const growthCanvas =
    document.getElementById("growthChart");

    if(growthCanvas){

        new Chart(growthCanvas,{

            type:"bar",

            data:{

                labels:[
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ],

                datasets:[{

                    label:"New Users",

                    data:[
                        120,
                        190,
                        140,
                        250,
                        310,
                        280,
                        360
                    ],

                    backgroundColor:"#10b981"

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        });

    }

    /* ==========================
       TRAFFIC SOURCES
    ========================== */

    const trafficCanvas =
    document.getElementById("trafficChart");

    if(trafficCanvas){

        new Chart(trafficCanvas,{

            type:"doughnut",

            data:{

                labels:[
                    "Organic",
                    "Social",
                    "Referral",
                    "Ads"
                ],

                datasets:[{

                    data:[
                        45,
                        25,
                        15,
                        15
                    ],

                    backgroundColor:[
                        "#3b82f6",
                        "#10b981",
                        "#f59e0b",
                        "#ef4444"
                    ]

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false

            }

        });

    }

    /* ==========================
       DEVICE BREAKDOWN
    ========================== */

    const deviceCanvas =
    document.getElementById("deviceChart");

    if(deviceCanvas){

        new Chart(deviceCanvas,{

            type:"pie",

            data:{

                labels:[
                    "Desktop",
                    "Mobile",
                    "Tablet"
                ],

                datasets:[{

                    data:[
                        55,
                        35,
                        10
                    ],

                    backgroundColor:[
                        "#6366f1",
                        "#06b6d4",
                        "#f97316"
                    ]

                }]

            },

           
        });

    }

});

/* =====================================
   DEBUG
===================================== */

console.log(
    "%cAnalytics Loaded",
    "color:#8b5cf6;font-weight:bold;"
);