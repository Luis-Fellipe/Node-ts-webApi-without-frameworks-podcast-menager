import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"
import * as http from "http"

const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    // Query string 
    const baseUrl = request.url?.split("?")[0]
    
    // listar podcast
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response)
    }
}

export {
    app
}