
class Subs{

    origin: String;
    destination: String;
    value: number;
    approved: Boolean;
    
    constructor() {
        this.origin = '';
        this.destination = '';
        this.value = 0;
        this.approved = false;
    }

    //Metodos
    // listar subs :)
    // agregar subs :)
    // cambiar de estado sub :)
    // eliminar sub :)

 
    getSubs(){
        return (localStorage.getItem('subsidies') !== null) ? JSON.parse(localStorage.getItem('subsidies') || "") : [];
    }

    addSub(sub:Subs, callback:Function, error:Function){
        // validar objeto - datos de objeto correcto
        if(sub.origin!=='' && sub.destination !== '' && sub.value > 0){
            let subsidies:Array<Subs> = this.getSubs();
            subsidies.push(sub);
            this.storeSubs(subsidies);
            callback();
        } else {
            error();
        }
    }

    approveSub(index:number, callback:Function){
        if(typeof index === 'number' && index >= 0){
           let subApproved:Array<Subs> = this.getSubs();
           if (subApproved.length > 0){
               subApproved[index].approved = true;
               this.storeSubs(subApproved);
               callback();
           }
        }
    }

    deleteSub(index:number, callback:Function){
        if(typeof index === "number" && index >=0){
            let deleteSub:Array<Subs> = this.getSubs();
            if(deleteSub.length > 0 && index < deleteSub.length){
                deleteSub.splice(index,1);
                this.storeSubs(deleteSub);
                callback();
            }
        }
    }

    storeSubs(subs:Array<Subs>){
        localStorage.setItem("subsidies", JSON.stringify(subs));
    }

}
export default new Subs();