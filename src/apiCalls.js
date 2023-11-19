import axios from 'axios'
const url = "https://decideapi20231119093623.azurewebsites.net";

export default class apiCalls{
    static async GetAllDecisions(){
        const res = await axios.get(`${url}/api/Decisions`)
        .catch(e=> console.log(e))
        //console.log(res)
        return res.data
    }

    static async AddDecision(toAdd){
        const res = await axios.post(`${url}/api/Decisions`, toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async AddPro(toAdd){
        const res = await axios.post(`${url}/api/Decision/Pros`, toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async AddCon(toAdd){
        const res = await axios.post(`${url}/api/Decision/Cons`, toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async FinishDecision(id){
        const res = await axios.put(`${url}/api/Decisions/${id}`, id)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async SetDecisionToPublic(id){
        const req = [{op:"replace", path:"isPublic", value:true}]
        const res = await axios.patch(`${url}/api/Decisions/${id}`, req)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }
}