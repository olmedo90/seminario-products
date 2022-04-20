//101
const image2 = document.createElement('Vaso.jpg')
image2.src  = '/images/Vaso.jpg';
const products=[
        {id:1,
        NombrePr:'Vaso',
        ImagenPr: image2,
        DescripcionP:'Vaso de vidrio'},
        {id:2,
        NombrePr:'Taza',
        ImagenPr:'',
        DescripcionP:'Taza de porcelana'},
        {id:3,
        NombrePr:'Botella de leche',
        ImagenPr:'',
        DescripcionP:'Leche entera de 1L'
        },
        {id:4,
        NombrePr:'Manzanas',
        ImagenPr:'',
        DescripcionP:'10 Manzanas'},
        {id:5,
        NombrePr:'Cepillo Dental',
        ImagenPr:'',
        DescripcionP:'Cepillo dental'}
];
var btn=document.getElementById("Boton");
var disableButton = function() { this.disabled = true; };
btn.addEventListener('click', disableButton , false);
function MostrarProd(){
    for(var i=0;i<products.length;i++){
        let transactionTableRef=document.getElementById("transactionTable");
        let newTransactionRowRef= transactionTableRef.insertRow(-1);
        let newIDCellRef=newTransactionRowRef.insertCell(0);
        newIDCellRef.textContent=products[i].id;

        let newNombrePCellRef=newTransactionRowRef.insertCell(1);
        newNombrePCellRef.textContent=products[i].NombrePr;
        
        let newImagenPCellRef=newTransactionRowRef.insertCell(2);
        newImagenPCellRef.textContent=products[i].ImagenPr.src;

        let newDescripcionPCellRef=newTransactionRowRef.insertCell(3);
        newDescripcionPCellRef.textContent=products[i].DescripcionP;
    }
}