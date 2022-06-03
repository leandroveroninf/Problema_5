export default class CaracteresExpeciales{

    constructor(){
        this.dt = '!@#$%ˆ&*-_+=?'.split("");
    }

    /**
     * 
     * @param {Arrays} pass 
     * @returns si existe caracteres especiales y no son concecutivos retornara true de lo contrario false
     * 
     */
    includesCarEspConceutivo(pass){
        if(!Array.isArray(pass)) throw new Error("El parametro pasado no es un arrays");
        return this.includesCarEspNoRepetido(pass) && !this.letraConsec(pass) && !this.caracEsCons(pass);
    }

    /**
     * 
     * @param {Arrays} password_ 
     * @description 
     */
     letraConsec(password_){
        const pass = password_;
        for(let i = 0; i < pass.length; i++){
            if(pass[i] === pass[i+1]) return true
        }
        return false;
    }

    caracEsCons(password_){
        const pass = password_;
        for(let i = 0; i < pass.length; i++){
            if(this.dt.includes(pass[i]) && this.dt.includes(pass[i+1])) return true
        }
        return false;
    }


    /**
     * 
     * @param {Arrays} pass 
     * @description retornara true si tiene caracteres especiales y no estan repetidos de lo contrario retornara false
     */
    includesCarEspNoRepetido(pass){
        if(!Array.isArray(pass)) throw new Error("El parametro pasado no es un arrays");
        
        const filt = pass.filter((elm)=>this.dt.includes(elm));

        if(filt.length === 0) return false;
        return new Set(filt).size === filt.length && filt.length >= 2

    }
}
