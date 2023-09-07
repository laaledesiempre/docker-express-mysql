export type HttpMethod = "GET" | "POST" | "UPDATE" | "DELETE"
export interface FormProp {
  id: Boolean;
  ApiUrl: string;
  method: HttpMethod;
  name: Boolean;
  age?: Boolean;
  description?: Boolean
}
