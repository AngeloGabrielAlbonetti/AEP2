class fi{
    constructor(){
        const saved = JSON.parse(localStorage.getItem("de"));
        this.de = Array.isArray(saved) ? saved : [];
    }

    adicao(de){
        console.log(this.de);
        this.de.push(de);
        this.save();
    }

    fre(){
        return this.de;
    }

    save(){
        localStorage.setItem("de", JSON.stringify(this.de));
    }   

    
}