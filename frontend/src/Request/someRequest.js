import { requestPOST, requestGET, requestRefreshAccess } from "./makeRequest";

export async function requestIfNotAuthLogout(getParamURL){
    while(true){
        let response = await requestGET(getParamURL)
        switch(response.status){
            case 200:
                return await response.json()
            case 401:
                console.log(response)
                await requestRefreshAccess()
                break
        }
    }
}