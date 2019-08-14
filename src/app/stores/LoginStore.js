import { observable, action, computed } from "mobx";
import LoginService from "../services/loginservice";
import { INVALID_CRED_MSG, BOOTSTRAP_ALERT_CLASS } from "../stores/constants";

class LoginStore {
  @observable user = { userName: "", password: "" };
  @observable loginMsg = "";
  @observable loginMsgClass = "";
  @observable loginSuccess = false;

  @action validateLogin = user => {
    this.loginMsg = "";
    this.loginMsgClass = "";
    LoginService.login(user)
      .then(response => {
        console.log(JSON.stringify(response));
        const {
          data: { message }
        } = response;
        this.loginMsg = message;
        this.loginMsgClass = BOOTSTRAP_ALERT_CLASS + "success";
        const {
          data: {
            resultsMap: { sessionToken, userDetails }
          }
        } = response;
        localStorage.setItem("userToken", sessionToken);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        this.loginSuccess = true;
      })
      .catch(error => {
        this.loginMsg = INVALID_CRED_MSG;
        this.loginMsgClass = BOOTSTRAP_ALERT_CLASS + "danger";
        console.log(JSON.stringify(error));
      });

    //this.names.push(name);
    console.log(JSON.stringify(user));
  };
  @computed get userName() {
    return "";
  }
}
const store = new LoginStore();
export default store;
