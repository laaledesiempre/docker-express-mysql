import { ApiForm } from "../components/ApiForm"
export const Mainpage = () => {
  return (<>
    <ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: true, description: true }} />
    <ApiForm config={{ ApiUrl: "", method: "GET", name: false, age: true, description: true }} />
    <ApiForm config={{ ApiUrl: "", method: "GET", name: true, age: false, description: false }} />
  </>
  )
}
