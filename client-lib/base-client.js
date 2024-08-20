import { useFetch } from "@vueuse/core";
import { useCommonStore } from "../store/common";
import { get } from "lodash";
import axios from "axios";
import { GET } from "@client-lib/constants";
class BaseClient {
  constructor() {
    this.base_url = "http://localhost:3000/";
  }
  raiseRequest(url, method) {
    const commonStore = useCommonStore();
    return new Promise((resolve, reject) => {
      commonStore.setLoader(true);
      setTimeout(() => {
        axios({
          method: "get",
          url,
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => reject(err))
          .finally(() => commonStore.setLoader(false));
      }, 5000);
    }).catch((err) => console.log(err));
  }

  get(url) {
    const promise = new Promise((resolve, reject) => {
      this.raiseRequest(url, GET).then((response) => {
        resolve(response);
      });
    });

    return promise;
  }
}

export default BaseClient;
