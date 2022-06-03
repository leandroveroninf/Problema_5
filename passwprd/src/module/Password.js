import CaracteresExpeciales from "./class/CaracteresExpeciales";


/**
 * Clase con metodos de la password para poder usar un metodo en general con todos los demas incluidos o poder usar
 * cada uno individualmente
 */
export default class ClassPassword{
    
    /**
     * 
     * @param {Arrays} pass 
     */
     constructor(pass = []){
        this.objErrors = {};
        this.pass = this.isArray(pass);
    }


    passConfig(minCaracter, minNumeros){
        this._minCaracter = minCaracter;
        this._minimoNumeros = minNumeros;
    }


    /**
     * 
     * @param {Arrays} pass 
     * @description retornara true si todo sale bien, de lo contrario retornara un objeto con los errores de las password
     */
    passMaxSeguridad(pass_ = this.pass){
        const pass = pass_.split("") || this.pass;
        const caracEspe = new CaracteresExpeciales();
        if(!this.minCaracter(pass)) this.objErrors.errorLong = 'La contraseña tiene que ser mayor a 16 caracteres';
        if(!this.mayMin(pass)) this.objErrors.errorMayMin = 'La contraseña tiene que tener mayuscualas y minisculas';
        if(this.letraConsec(pass)) this.objErrors.errorConse = 'La constraseña no puede tener letras consecutivas';
        if(!this.minimoNumeros(pass)) this.objErrors.errorNumMin = 'La contraseña tiene que tener un minimo de 4 numeros';
        if(this.numConsec(pass)) this.objErrors.errorNumsConat = "La contraseña no puede tener numeros concatenados";
        if(!caracEspe.includesCarEspConceutivo(pass)) this.objErrors.errorCarrEsp = "Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.";
        if(this.sinCero(pass)) this.objErrors.errorSinCero = "No se puede usar el número 0.";
        if(this.sinEspacio(pass)) this.objErrors.errorSinEspacio = "No se puede colocar espacios.";

        const arrObj = Object.keys(this.objErrors);

        return arrObj.length === 0 ? true : this.objErrors;


    }

    minCaracter(pass = this.pass){
        const num = this._minCaracter || 16;
        return pass.length >= num;
    }

    isArray(pass){
        if(pass === undefined) throw new Error("la passwor no puede ser undefined")
        if(!Array.isArray(pass)) return pass.split("");
        return pass;
    }

    /**
     * 
     * @param {Arrays} password_ 
     * @description comprueba que si la password contiene espacio
     */
    sinEspacio(password_ = this.pass){
        password_ = this.isArray(password_);
        return password_.includes(" ");
    }
    
    /**
     * 
     * @param {Arrays} password_ 
     * @description comprueba que si la password contiene cero
     */
    sinCero(password_ = this.pass){
        password_ = this.isArray(password_);
        return password_.includes("0");
    }

    /**
     * 
     * @param {Arrays} password_ 
     * @description Comprueba si los numeros que tiene la password son consecutivos
     */
    numConsec(password_ = this.pass){
        password_ = this.isArray(password_);
        return this.letraConsec(this.numsPass(password_));
    }

    /**
     * 
     * @param {Arrays} pass 
     * @description filtra todo el array y devuelve todos los numeros de la password
     */
    numsPass(pass = this.pass){
        pass = this.isArray(pass);
        return pass.filter((elm) => !isNaN(parseInt(elm)) )
    }

    /**
     * 
     * @param {Arrays} pass 
     * @description retornara true si tiene mas de 4 numeros de lo contrario retornara false
     */
    minimoNumeros(pass = this.pass){
        pass = this.isArray(pass);
        const nums = this.numsPass(pass).length
        const num = this._minimoNumeros || 4;
        return nums >= num
    }

    /**
     * 
     * @param {Arrays} password_ 
     * @description 
     */
    letraConsec(password_ = this.pass){
        const pass = password_;
        for(let i = 0; i < pass.length; i++){
            if(pass[i] === pass[i+1]) return true
        }
        return false;
    }
    /**
     * 
     * @param {Arrays} password_
     * @description retorna el true si tiene mayusculas y minusculas
     */
    mayMin(password_ = this.pass){
        let may = false;
        let min = false;
        const espec = new CaracteresExpeciales();
        password_.forEach(elm => {

            if(!espec.dt.includes(elm) && isNaN(parseInt(elm))){
                elm == elm.toUpperCase() ? (may = true) : (min = true)
            }
        });

        return may && min
    }


}

