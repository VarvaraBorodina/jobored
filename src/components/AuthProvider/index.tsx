import { useEffect } from "react";

import Service from "../../service";
import { getFromLocalStorage } from "../../utils/localStorage";
import { Props } from './types';

const AuthProvider: React.FC<Props> = ({children}) => {
    
    useEffect(() => {
        if(!getFromLocalStorage('access_token')) {
            Service.getAccessToken();
        } else {
            console.log('access_token exist');
        }      
    })

    return (children)
}

export default AuthProvider;