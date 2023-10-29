
import axios from 'axios'
export default class apiCalls{
    static async GetAllDecisions(){
        const res = await axios.get('https://decisionapi.azurewebsites.net/api/Decisions')
        .catch(e=> console.log(e))
        //console.log(res)
        return res.data
    }

    static async AddDecision(toAdd){
        const res = await axios.post('https://decisionapi.azurewebsites.net/api/Decisions', toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async AddPro(toAdd){
        const res = await axios.post('https://decisionapi.azurewebsites.net/api/Decision/Pros', toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async AddCon(toAdd){
        const res = await axios.post('https://decisionapi.azurewebsites.net/api/Decision/Cons', toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async FinishDecision(id){
        const res = await axios.put(`https://decisionapi.azurewebsites.net/api/Decisions/${id}`, id)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

    static async SetDecisionToPublic(id){
        const req = [{op:"replace", path:"isPublic", value:true}]
        const res = await axios.patch(`https://decisionapi.azurewebsites.net/api/Decisions/${id}`, req)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }
}