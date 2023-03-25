import Chart from "chart.js/auto"

export default (canvas: HTMLCanvasElement, labels: Array<string>, data)=>{
  return new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '温度',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          min: data.length - 100
        }
      }
    }
  });
}