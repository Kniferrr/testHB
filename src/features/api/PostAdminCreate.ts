import { api } from "@/app/Api";

export const PostAdminCreate = async () => {
  const response = await api.post("api/Admin/create?value=10");
  return response;
};
