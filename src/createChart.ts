import Chart from "chart.js/auto"

const labelColor = "rgb(255 255 255 / 0.4)"

export default (title: string, canvas: HTMLCanvasElement|undefined, labels: Array<string>, data: Array<string>, isThreeAxisData?: boolean, defaultPressure?: number)=>{
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
      if(title == "気圧"){
        let newData: Array<Number> = []
        data.forEach((value)=>{
          newData.push(Number(value) + defaultPressure)
        })
        console.log(newData)
        chartData = [{
          data: newData,
          borderWidth: 1,
          label: "データ"
        }]
      }else{
        chartData = [{
          data: data,
          borderWidth: 1,
          label: "データ"
        }]
      }
    }
    return new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: chartData
      },
      options: {
        color: "white",
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: title,
            color: "white"
          }
        },
        scales: {
          y: {
            ticks: {
              color: labelColor
            },
            beginAtZero: true
          },
          x: {
            ticks: {
              color: labelColor
            },
            min: data.length - 100
          }
        }
      }
    });
  }else{
    console.error("グラフの要素が足りないよ");
  }
}