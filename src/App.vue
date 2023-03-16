<template>
  <div>
    aaa
    <canvas ref="mainGraph"></canvas>
  </div>
</template>
<script lang="ts" setup>
import Chart from "chart.js/auto"

import { onMounted, ref } from "vue"

const mainGraph = ref<HTMLCanvasElement>()

const mainLabel = [1, 2, 3, 4, 5, 6]
const mainData = [12, 19, 3, 5, 2, 3]

onMounted(()=>{
  console.log(mainGraph.value);
  if(mainGraph.value != undefined){    
    new Chart(mainGraph.value, {
      type: 'line',
      data: {
        labels: mainLabel,
        datasets: [{
          label: 'たぶん何かのデータ',
          data: mainData,
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
  }
})
</script>