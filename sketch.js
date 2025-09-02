 var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Antonia Mardones");
                select("#aprendizaje").html("la mayoría de los diferentes programas que existen y ojala sin estresarme tanto");
            noStroke();
            }
            function draw() {
               background(255, 216, 223);
                orbitControl();
                pointLight(255,255,255, valor/3, valor/2, 50);
                specularMaterial(300);
                shininess(50);
                emissiveMaterial(50, 50, 100);
                metalness(5);
                fill(328, 100, 54);
                cylinder (valor / 30, 50);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }


