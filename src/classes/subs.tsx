class Subs {
  id: number;
  origin: String;
  destination: String;
  value: number;
  approved: Boolean;

  constructor() {
    this.id = 0;
    this.origin = "";
    this.destination = "";
    this.value = 0;
    this.approved = false;
  }

  // function created to get all the subsidies in the local storage since the subs do not have to be stored in any bbdd.
  getSubs() {
    return localStorage.getItem("subsidies") !== null
      ? JSON.parse(localStorage.getItem("subsidies") || "")
      : [];
  }

  // function created to add all new subsidies created into the local storage.
  addSub(sub: Subs, callback: Function, error: Function) {
    // validar objeto - datos de objeto correcto
    if (
      typeof sub.id === "number" &&
      sub.origin !== "" &&
      sub.destination !== "" &&
      sub.value > 0
    ) {
      let subsidies: Array<Subs> = this.getSubs();
      subsidies.push(sub);
      this.storeSubs(subsidies);
      callback();
    } else {
      error();
    }
  }

  // status of subsidy changed in this function from not approved to approved.
  approveSub(id: number, callback: Function) {
    if (typeof id === "number" && id >= 0) {
      let subApproved: Array<Subs> = this.getSubs();
      if (subApproved.length > 0) {
        const ix: number = subApproved.findIndex(
          (item: Subs) => item.id === id
        );
        subApproved[ix].approved = true;
        this.storeSubs(subApproved);
        callback();
      }
    }
  }

  // function created to delete the subsidy targeted.
  deleteSub(id: number, callback: Function) {
    if (typeof id === "number" && id >= 0) {
      let deleteSub: Array<Subs> = this.getSubs();
      if (deleteSub.length > 0) {
        const ix: number = deleteSub.findIndex((item: Subs) => item.id === id);
        deleteSub.splice(ix, 1);
        this.storeSubs(deleteSub);
        callback();
      }
    }
  }
  // save all subs into the local Storage this is it´s own function since it is used several times in other functions.
  storeSubs(subs: Array<Subs>) {
    localStorage.setItem("subsidies", JSON.stringify(subs));
  }
}
export default new Subs();
