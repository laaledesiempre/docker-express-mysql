export type HttpMethod = "GET" | "POST" | "UPDATE" | "DELETE"
export interface FormProp {
  ApiUrl: string;
  method: HttpMethod;
  name: Boolean;
  age?: Boolean;
  description?: Boolean
}
