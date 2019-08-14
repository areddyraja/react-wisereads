import { observable, action, computed } from "mobx";

class HomeStore {
  @observable names = [];
  @action addName = name => {
    this.names.push(name);
  };
  @computed get userName() {
    return this.names.toString;
  }
}
const store = new HomeStore();
export default store;
