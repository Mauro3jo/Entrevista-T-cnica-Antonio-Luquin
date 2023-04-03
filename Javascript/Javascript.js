const banco ={
   cliente : [
 {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
 {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
     {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
],

}

let clienteEncontrado = banco.cliente.find(elemento=> elemento.titularCuenta=="Jacki Shurmer");
console.log(clienteEncontrado);

var valordeposito=150;
var saldocuenta=clienteEncontrado.saldoEnPesos;

function deposito(){
return clienteEncontrado.saldoEnPesos + valordeposito;
};
const saldofinaldeposito =deposito();
console.log("Depósito realizado, su nuevo saldo es:",saldofinaldeposito);

var valorextraccion=25000;

function extracción (){
return clienteEncontrado.saldoEnPesos - valorextraccion;
};
const saldofinaextracción =extracción();
if(saldofinaextracción>=0){
    console.log("Extracción realizada correctamente, su nuevo saldo es",saldofinaextracción);
}else{
    console.log("Fondos insuficientes");
}
