export default class {
  constructor(textData: string){
    const dataGroupReg = /--------------------------------\ni= \d+\ntimeAccl= \d+\nAccl= \-{0,1}(\d|\.)+,\-{0,1}(\d|\.)+,\-{0,1}(\d|\.)+\ntimeGyro= \d+\nGyro= \-{0,1}(\d|\.)+,\-{0,1}(\d|\.)+,\-{0,1}(\d|\.)+\ntimeMag= \d+\nMag= \-{0,1}\d+,\-{0,1}\d+,\-{0,1}\d+\ntimeTemp= \d+\nTemperature= \-{0,1}(\d|\.)+\ntimeHumidity= \d+\nHumidity= (\d|\.)+\ntimePressure= \d+\nPressure= \-{0,1}(\d|\.)+/g
    const dataGroups = textData.match(dataGroupReg)

    let newData = []

    dataGroups?.forEach((dataGroup)=>{
    /*dataGroup
      --------------------------------
      i= 485
      timeAccl= 167926
      Accl= -1.24,-5.10,8.03
      timeGyro= 167930
      Gyro= 2.83,-0.61,0.42
      timeMag= 167936
      Mag= 20,65,-144
      timeTemp= 168240
      Temperature= 24.99
      timeHumidity= 168241
      Humidity= 42.29
      timePressure= 167938
      Pressure= 0.07*/      
      let newDataGroup = {}
      const dataReg = /\w+= (\d|\.|\-|,)+/g
      const datas = dataGroup.match(dataReg)
      datas?.forEach((data)=>{
      /*data
        timeTemp= 168240*/
        const keyReg = /[a-zA-z]+/
        const keyDatas = data.match(keyReg)
        const key = keyDatas?keyDatas[0]:"null"
        const valueReg = /(\d|\.|\-|,)+/
        const valueDatas = data.match(valueReg)
        const value = valueDatas?valueDatas[0]:null
        newDataGroup[key] = value
      })
      newData.push(newDataGroup)
    })

    this._data = newData
  }

  data(key){
    let newDatas = []
    this._data.forEach((dataGroup)=>{
      newDatas.push(dataGroup[key])
    })    
    return newDatas
  }

  label(key){
    let newLabels = []
    this._data.forEach((dataGroup)=>{
      newLabels.push(dataGroup[key])
    })    
    return newLabels
  }
}