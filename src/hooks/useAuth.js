import { useContext } from "react"
import { AuthContext } from "../context/AuthProviderr"

const useAuth = () =>{
    return useContext(AuthContext);
}
export default useAuth;