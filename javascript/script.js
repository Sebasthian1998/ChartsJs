console.log('hello')
class datalabel {
    constructor(label,data){
        this.label=label
        this.data=data
    }
}
let datos
let newlabel=[]
let chardata={
    labeltitle:'Datos de Posts',
    color:[],
    border:[],
    width:[],
    data:[],
    labels:[],
    newdata:[],
    newlabel:[]
}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {   
      datos=json
      let datalabe=[]
      let booleano
      datos.forEach(element => {
        chardata.labels.push(element.userId) //Insertar elementos en data
        
        if(chardata.data.length==0){//Verifica que este vacio el arreglo
            datalabe=new datalabel(element.userId,1)//Inserta el primer elemento
            chardata.data.push(datalabe)
        }
        else{
            chardata.data.forEach((elemento)=>{
                if(elemento.label==element.userId) {elemento.data=elemento.data+1; booleano=true}
                else {
                    booleano=false//Para verificar que no existe
                }
            })
            if(booleano==false){
                chardata.data.push(new datalabel(element.userId,1))//Pushea el nuevo elemento creado
            }
        }
      });
      chardata.labels=[... new Set(chardata.labels)] //Eliminar elementos repetidos
      console.log(chardata.labels)
      console.log(chardata.data)
      chardata.data.forEach(e=>{
        chardata.newdata.push(e.data)//nueva data para mostrar
      })
      console.log(chardata.newdata)
      chardata.labels.forEach(e=>{
        chardata.newlabel.push(e)
      })
})
    console.log(chardata.newlabel)

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar', //bar,radar,line,mixed,area,bubble
    data: {
        labels:chardata.newlabel,// ['Red', 'Blue', 'Negrito', 'Green', 'Verde', 'Orange'], //Nombre de la columna
        datasets: [{
            label: chardata.labeltitle, //Titulo del chart
            data:  chardata.newdata, //Datos a dibujar
            backgroundColor: [ //Color de la columna
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 250, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(54, 162, 250, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [      //Color del borde
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3 //Tamaño del borde
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true //Para que empieze en un determinado valor
                }
            }]
        }
    }
});