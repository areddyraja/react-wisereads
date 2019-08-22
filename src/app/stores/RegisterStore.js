import { observable, action, computed, ObservableMap } from "mobx";
import RegisterService from "../services/registrationService";
import CommonService from "../services/commonService";
import { INVALID_CRED_MSG, BOOTSTRAP_ALERT_CLASS } from "../stores/constants";

class LoginStore {
  @observable user = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: "",
    genderId: "",
    userStatusId: 1,
    password: "",
    confirmPassword: "",
    roleId: 4,
    companyName: ""
  };
  @observable registerMsg = "";
  @observable registerMsgClass = "";
  @observable registerSuccess = false;
  @observable genderList = [
    {
      gender_id: 1,
      gender: "male"
    },
    {
      gender_id: 2,
      gender: "female"
    }
  ];

  constructor() {
    this.onloadData();
  }

  @action onloadData = () => {
    CommonService.getComboBoxes(["gender"])
      .then(response => {
        console.log(JSON.stringify(response));
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  @action registerNewUser = user => {
    this.registerMsg = "";
    this.registerMsgClass = "";
    console.log(JSON.stringify(user));
    delete user["confirmPassword"];
    user.roleId = 4;
    user.userStatusId = 1;
    user.createdBy = user.email;
    RegisterService.registerNewUser(user)
      .then(response => {
        console.log(JSON.stringify(response));
        const {
          data: { message }
        } = response;
        this.registerMsg = message;
        this.registerMsgClass = BOOTSTRAP_ALERT_CLASS + "success";
        const {
          data: {
            resultsMap: { sessionToken, userDetails }
          }
        } = response;
        this.registerSuccess = true;
      })
      .catch(error => {
        this.registerMsg = INVALID_CRED_MSG;
        this.registerMsgClass = BOOTSTRAP_ALERT_CLASS + "danger";
        console.log(JSON.stringify(error));
      });
  };

  @computed get userName() {
    return "";
  }
}
const store = new LoginStore();
export default store;
