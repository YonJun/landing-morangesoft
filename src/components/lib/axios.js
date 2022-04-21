import axios from "axios";
import { baseURL } from "./constants";

export const customAxios = axios.create({
  baseURL: baseURL,
  headers: {
    proyecto: "17sd%s#7913G%FJ600",
    "Content-Type": "application/json",
  },
});
