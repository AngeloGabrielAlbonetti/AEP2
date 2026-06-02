class fi{
    constructor(){
        const de = JSON.parse(localStorage.getItem("de"));
    }

    adicao(de){
        this.de.push(de);
    }

    fre(){
        return this.de;
    }

    save(){
        localStorage.setItem("de", JSON.stringify(this.de));
    }

    
}