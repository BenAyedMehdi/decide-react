import axios from 'axios'
export default class apiCalls {
    static async GetAllDecisions() {
        const res = await axios
            .get('https://localhost:7139/api/Decisions')
            .catch((e) => console.log(e))
        //console.log(res)
        return res.data
    }

    static async AddDecision(toAdd) {
        const res = await axios
            .post('https://localhost:7139/api/Decisions', toAdd)
            .catch((e) => console.log(e))
        console.log(res)
        return res.data
    }

    static async AddPro(toAdd) {
        const res = await axios
            .post('https://localhost:7139/api/Decision/Pros', toAdd)
            .catch((e) => console.log(e))
        console.log(res)
        return res.data
    }

    static async AddCon(toAdd) {
        const res = await axios
            .post('https://localhost:7139/api/Decision/Cons', toAdd)
            .catch((e) => console.log(e))
        console.log(res)
        return res.data
    }

    static async FinishDecision(id) {
        const res = await axios
            .put(`https://localhost:7139/api/Decisions/${id}`, id)
            .catch((e) => console.log(e))
        console.log(res)
        return res.data
    }
}
