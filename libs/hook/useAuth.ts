import { useContext } from "react";
import { AuthorizeContext } from "../AuthorizeProvider";

export default function useAuth() {
    const { authenticated, roles, setAuthorize, initLoading , setInitLoading} = useContext(AuthorizeContext);
    return { authenticated, roles, setAuthorize, initLoading, setInitLoading };
}