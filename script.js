/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});


/* =========================================
   TIMELINE
========================================= */

const timelineData = {

    1970: {
        title: "De periode van grote gezinnen",
        text: "Nederland kende in deze periode een heel andere gezinsstructuur dan nu. Grote gezinnen kwamen vaker voor en maatschappelijke normen rondom huwelijk en kinderen waren anders."
    },

    1980: {
        title: "Een nieuwe generatie",
        text: "De Nederlandse samenleving veranderde sterk. Onderwijs en arbeid kregen een andere rol en gezinnen werden gemiddeld kleiner."
    },

    1990: {
        title: "Kinderen krijgen op latere leeftijd",
        text: "Steeds meer vrouwen begonnen later aan kinderen. Opleiding, werk en veranderingen in relaties speelden hierbij een rol."
    },

    2000: {
        title: "Een relatief hoog niveau",
        text: "Rond 2000 lag het gemiddeld kindertal per vrouw op ongeveer 1,72. Daarna begon een langere periode van daling."
    },

    2010: {
        title: "De dalende trend",
        text: "Vanaf ongeveer 2010 daalde het totaal vruchtbaarheidscijfer. De leeftijd waarop mensen kinderen krijgen bleef relatief hoog."
    },

    2025: {
        title: "Een historisch laag niveau",
        text: "In 2025 lag het gemiddeld kindertal per vrouw op 1,42. Er werden 166.588 levend geboren kinderen geregistreerd."
    }

};


const timelineButtons =
    document.querySelectorAll(".timeline-year");

const timelineYear =
    document.getElementById("timelineYear");

const timelineTitle =
    document.getElementById("timelineTitle");

const timelineText =
    document.getElementById("timelineText");


timelineButtons.forEach(button => {

    button.addEventListener("click", () => {

        const year = button.dataset.year;

        timelineButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        timelineYear.textContent = year;

        timelineTitle.textContent =
            timelineData[year].title;

        timelineText.textContent =
            timelineData[year].text;

    });

});


/* =========================================
   FERTILITEIT GRAFIEK
========================================= */

const ctx =
    document.getElementById("fertilityChart");

const fertilityChart = new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "1988",
            "1990",
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
        ],

        datasets: [

            {
                label: "Kinderen per vrouw",

                data: [
                    1.55,
                    1.62,
                    1.53,
                    1.72,
                    1.70,
                    1.79,
                    1.66,
                    1.55,
                    1.62,
                    1.49,
                    1.43,
                    1.43,
                    1.42
                ],

                borderWidth: 3,

                pointRadius: 4,

                tension: 0.35
            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        interaction: {
            intersect: false,
            mode: "index"
        },

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            y: {

                min: 1.2,
                max: 2,

                grid: {
                    color: "rgba(255,255,255,0.07)"
                },

                ticks: {
                    color: "#777"
                }

            },

            x: {

                grid: {
                    display: false
                },

                ticks: {
                    color: "#777"
                }

            }

        }

    }

});


/* =========================================
   HERO ANIMATIE
========================================= */

const canvas =
    document.getElementById("heroCanvas");

const canvasContext =
    canvas.getContext("2d");

let animationOffset = 0;


function resizeCanvas() {

    canvas.width =
        canvas.offsetWidth;

    canvas.height =
        canvas.offsetHeight;

}


window.addEventListener(
    "resize",
    resizeCanvas
);

resizeCanvas();


function drawHeroCurve() {

    canvasContext.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    canvasContext.beginPath();

    for (
        let x = 0;
        x < canvas.width;
        x++
    ) {

        const normalized =
            x / canvas.width;

        const y =
            canvas.height * 0.65
            - Math.sin(
                normalized * 10
                + animationOffset
            ) * 70
            - normalized * 180;

        if (x === 0) {
            canvasContext.moveTo(x, y);
        } else {
            canvasContext.lineTo(x, y);
        }

    }

    canvasContext.strokeStyle =
        "#9ee493";

    canvasContext.lineWidth = 2;

    canvasContext.stroke();

    animationOffset += 0.008;

    requestAnimationFrame(
        drawHeroCurve
    );

}

drawHeroCurve();


/* =========================================
   CAUSE CARDS
========================================= */

const causeCards =
    document.querySelectorAll(".cause-card");

causeCards.forEach(card => {

    card.addEventListener("click", () => {

        causeCards.forEach(c =>
            c.style.transform = ""
        );

        card.style.transform =
            "translateY(-12px) scale(1.02)";

    });

});
