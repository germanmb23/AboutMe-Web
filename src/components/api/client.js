import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://aboutme-backend.herokuapp.com",
});

export default apiClient;
