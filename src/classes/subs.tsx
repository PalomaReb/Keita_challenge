class Subs {
  id: number;
  origin: String;
  destination: String;
  value: number;
  approved: Boolean;

  constructor() {
    this.id = this.getSubs().length;
    this.origin = "";
    this.destination = "";
    this.value = 0;
    this.approved = false;
  }

  getSubs() {
    return localStorage.getItem("subsidies") !== null
      ? JSON.parse(localStorage.getItem("subsidies") || "")
      : [];
  }

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

  storeSubs(subs: Array<Subs>) {
    localStorage.setItem("subsidies", JSON.stringify(subs));
  }
}
export default new Subs();
