import {USERS} from "../allowedUsers";

function findUser(email: String){
    /*
    fetch("allowedUsers.db", { 
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
    })
    .then((r) => {
        if(!r.ok){
            return "there is no data";
        }
        return r.json();
    })
    .then((d) => {
        localUser = d.filter((user:{id:number,username:String,password:String,role:String}) => user.username === email);
        console.log(localUser);
    });
    */
   
    const localUser:any = USERS.filter((user:{id:number,username:String,password:String,role:String}) => user.username === email);
    return localUser[0];
}

class UserAuth {

    authenticated : Boolean;
    role : String;

    constructor(){
        this.authenticated = false;
        this.role = "";
    }

    login(user: {username: String, password: String}, callback:any, error:any){
        const newUser:any = findUser(user.username);
        //console.log(user,newUser);
        if(newUser !== undefined && user.username === newUser.username && user.password === newUser.password){
            localStorage.setItem("token", btoa(newUser.username + ":" + newUser.password));
            this.authenticated = true;
            this.role = newUser.role;
            callback(); 
        } else {
            error();
        }
    }

    logout(callback:any){
        localStorage.removeItem("token");
        this.authenticated = false;
        this.role = "";
        callback();
    }

    isAuthenticated = () => this.authenticated;   
}

export default new UserAuth();