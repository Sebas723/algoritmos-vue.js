<script setup>
import Cards from './Cards.vue';
import Tittle from './Tittle.vue';

document.addEventListener('DOMContentLoaded', function(){
    //Tittle
    const basicAlgoritms = document.getElementById("algoritmos-basicos");
    const intermediateAlgoritms = document.getElementById("algoritmos-intermedios");
    const technicalTest = document.getElementById("pruebas-tecnicas");

    const bodyTittle = document.getElementById("tittle");

    const basicAlgortimsSection = document.querySelector(".basic-algoritms-section");
    const intermediateAlgoritmsSection = document.querySelector(".intermediate-algoritms-section");
    const technicalTestSection = document.querySelector(".technical-test-section");

    intermediateAlgoritmsSection.style.display = "none";
    technicalTestSection.style.display = "none";

    basicAlgoritms.addEventListener("click", function(e){
        bodyTittle.textContent = "Algoritmos Basicos";
        basicAlgortimsSection.style.display = "";
        intermediateAlgoritmsSection.style.display = "none";
        technicalTestSection.style.display = "none";
    });

    intermediateAlgoritms.addEventListener("click", function(e){
        bodyTittle.textContent = "Algoritmos Intermedios";
        basicAlgortimsSection.style.display = "none";
        intermediateAlgoritmsSection.style.display = "";
    });

    technicalTest.addEventListener("click", function(e){
        bodyTittle.textContent = "Pruebas Tecnicas";
        technicalTestSection.style.display = "";
        basicAlgortimsSection.style.display = "none";
        intermediateAlgoritmsSection.style.display = "none";
    });
});

</script>

<template>
    <nav>
        <ul class="menu bg-[#F5F5F5] flex p-[10px] w-[100vw] [&>a>li]:text-[22px] align-items-center [&>a>li]:mt-[20px] [&>a>li]:text-[#424242] gap-10 border-b border-black">

            <div class=" bg-black w-[80px] h-[80px] rounded-[50px] border-solid border-[5px] border-[rgb(255,166,128)]">
                <img src="../assets/img/lotus-978659_1280.jpg" alt="" class=" object-cover bg-center bg-no-repeat rounded-[50px] w-[100%] h-[100%]">
            </div>

            <a href="#">
                <li id="algoritmos-basicos">Algoritmos Basicos</li>
            </a>
            <a href="#">
                <li id="algoritmos-intermedios">Algoritmos Intermedios</li>
            </a>
            <a href="#">
                <li id="pruebas-tecnicas">Pruebas Tecnicas</li>
            </a>
        </ul>
    </nav>
</template>

<style scoped>
.menu a{
    position: relative;
    text-decoration: none;
}

.menu a::before {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, rgb(255, 166, 128), rgb(255, 166, 128));
    z-index: 1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-in-out;
}

.menu a:hover::before {
    transform: scaleX(1);
}

.hidden{
    display: none;
}

/* .show{
    display: block;
} */
</style>
