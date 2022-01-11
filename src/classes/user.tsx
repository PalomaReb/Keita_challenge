async function findUser(email: String){

    let localUser:any; 
    await fetch("allowedUsers.db", { 
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

    return localUser[0];

   
    // localUser:any = USERS.filter((user:{id:number,username:String,password:String,role:String}) => user.username === email);
    // return localUser[0];
}

class UserAuth {
    authenticated : Boolean;
    role : String;

    constructor(){
        this.authenticated = false;
        this.role = "";
    }

    async login(user: {username: String, password: String}, callback:Function, error:Function){
        const newUser:any = await findUser(user.username);
        //console.log(user,newUser);
        if(newUser !== undefined && user.username === newUser.username && user.password === newUser.password){
            sessionStorage.setItem("token", btoa(newUser.username + ":" + newUser.password));
            this.authenticated = true;
            this.role = newUser.role;
            callback(); 
        } else {
            error();
        }
    }

    logout(callback:any){
        sessionStorage.removeItem("token");
        this.authenticated = false;
        this.role = "";
        callback();
    }

    isAuthenticated = ()=> {
        this.authenticated = (sessionStorage.getItem("token")) ? true : false;
        return this.authenticated;
    }
}

export default new UserAuth();