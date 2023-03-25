import Chart from "chart.js/auto"

export default (title: string, canvas: HTMLCanvasElement|undefined, labels: Array<string>, data: Array<string>, isThreeAxisData?: boolean)=>{
  if(canvas != undefined){
    let xDatas: Array<string> = []
    let yDatas: Array<string> = []
    let zDatas: Array<string> = []
    let chartData: Array<any> = []
    if(isThreeAxisData == true){
      data.forEach((threeAxisData)=>{
        const threeAxisDataArray = threeAxisData.split(",")
        xDatas.push(threeAxisDataArray[0])
        yDatas.push(threeAxisDataArray[1])
        zDatas.push(threeAxisDataArray[2])
      })

      chartData = [
        {
          data: xDatas,
          borderWidth: 1,
          label: "x"
        },
        {
          data: yDatas,
          borderWidth: 1,
          label: "y"
        },
        {
          data: zDatas,
          borderWidth: 1,
          label: "z"
        }
      ]
    }else{
      chartData = [{
        data: data,
        borderWidth: 1,
        label: "データ"
      }]
    }
    return new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: chartData
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: title
          }
        },
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
  }else{
    console.error("グラフの要素が足りないよ");
  }
}