import { refreshAccessURL } from "../URL/URL";

export default async function makeRequest(url, method, body){
    let request
    switch (method) {
        case 'GET':
            console.log("Запрос на подачу")
            request = await requestGET(url)
            break;
        case 'POST':
            request = null
            break;
    }
    switch (request.status) {
        case 200:
            break;
        case 401:
            console.log("Запрос на рефреш")
            await requestRefreshAccess()
            request = await requestGET(url)
    }
    return request
}

export async function requestGET(url) {
    let request = await fetch(url, {
        credentials: 'include',
        method: 'GET',
    });
    return request
}

export async function requestPOST(url, body) {
    let request = await fetch(url, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
    });
    return request
}

export async function requestRefreshAccess() {
    let refreshToken = localStorage.getItem('refresh_token')
    let body = {
        'refresh_token': refreshToken
    }
    await requestPOST(refreshAccessURL, body)
}