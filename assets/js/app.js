class Consultorio {
    constructor(nombre) {
        this.nombre = nombre
        this.pacientes = []
    }

    get getNombre() {
        return this.nombre
    }
    set setNombre(value) {
        return this.nombre = value
    }

    set setPacientes(pacientes){
        this.pacientes.push(pacientes)
    }

    get getPacientes(){
        return this.pacientes
    }

    buscarPacientesPorRut(rut){
        return this.pacientes.find((item)=>item.rut === rut)
    }

}
class Paciente{
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre
        this.edad = edad
        this.rut = rut
        this.diagnostico = diagnostico         
    }    
    get getNombre() {
        return this.nombre
    }    
    get getEdad(){
        return this.edad
    }    
    get getRut(){
        return this.rut
    }    
    get getDiagnostico(){
        return this.diagnostico
    }    
    set setNombre(value) {
        return this.nombre = value
    }    
    set setEdad(value) {
        return this.edad = value
    }    
    set setRut(value) {
        return this.rut = value
    }    
    set setDiagnostico(value) {
        return this.diagnostico = value
    }    
    
    
}    





const paciente = new Paciente('Pepito','21','11.111.111-1','Sano')
const consultorioUno = new Consultorio('Hospital') 
consultorioUno.setPacientes = paciente
const pacienteDos = new Paciente('Diego','24','12.345.678-9','Resfriado')
consultorioUno.setPacientes = pacienteDos
console.log(consultorioUno.getPacientes)
console.log('El rut 11.111.111-1 es:', consultorioUno.buscarPacientesPorRut('11.111.111-1'))

