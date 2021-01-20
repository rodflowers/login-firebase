//const axios = require("axios");
//const firebase = require("../firebase");
import axios from "axios";
import firebase from "../firebase";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const axiosAuth = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

axiosAuth.interceptors.request.use(
  async (config) => {
    let user = await firebase.auth().currentUser;
    config.headers.token = user ? await user.getIdToken(true) : "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
