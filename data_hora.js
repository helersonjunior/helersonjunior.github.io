function hora() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth() + 1
    var dia = data.getDate()
  
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
  
    let horaV = hora < 10 ? "0" + hora : hora
    let minutosV = minutos < 10 ? "0" + minutos : minutos
    //let segundosV = segundos < 10 ? "0" + segundos : segundos 
  
    let mesV = mes < 10 ? "0" + mes : mes
    let diaV = dia < 10 ? "0" + dia : dia
  
  
    let d = diaV + "/" + mesV + "/" + ano
    let h = horaV + ":" + minutosV
  
    //console.log("data", h + " - " + d)
    return h + " - " + d
  }
  