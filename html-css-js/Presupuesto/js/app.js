const ingresos = [
    new Ingreso('Salary',2100.00),
    new Ingreso('Saled Car',1500.00)
];

const egresos = [
    new Egreso('Rent',900),
    new Egreso('Clothes', 400)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEngresos = () => {
    let totalEngresos = 0;
    for (let egreso of egresos){
        totalEngresos += egreso.valor;
    }
    return totalEngresos;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEngresos();
    let porcentajeEgreso = totalEngresos() / totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEngresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});

}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:2})
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.idIngreso})'></ion-icon>
            </button>
        </div>
    </div>
</div>
`;
return ingresoHTML;
}

const eliminarIngreso = (idIngreso) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.idIngreso === idIngreso);
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div> 
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEngresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarEgreso(${egreso.idEgreso})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (idEgreso) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.idEgreso === idEgreso);
    egresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if (descripcion.value !== '' && valor.value !== ''){
        if (tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value,+valor.value))
            cargarCabecero();
            cargarIngresos();
        } else if (tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value,+valor.value))
            cargarCabecero();
            cargarEgresos();
        }
    }
}