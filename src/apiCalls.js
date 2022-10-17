
import axios from 'axios'
export default class apiCalls{
    static async GetAllDecisions(){
        await axios.get('https://localhost:7139/api/Decisions')
        .then(res => {
          console.log(res.data)
          return res.data
         }).catch(err => console.log(err))
         return null
        }
}