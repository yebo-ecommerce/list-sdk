import { curry } from 'ramda'
import { post } from 'axios'

export const createList = curry(function (tenant, userId, token, categories, name) {
  const query = `
    mutation createList {
      createList(tenant: "demo", list: {
        name: "Sample",
        users: [ { ref: 1, token: "" } ],
        categories: [ 1 ]
      }) {
        id
        name
      }
    }
  `

  // url = "ws://peperoni_web_1/ws?token=#{token}"

  // const host = 'http://127.0.0.1'
  // const host = 'lists_web_1'
  const host = 'http://lists_web_1'

  post(host, {
    operationName: "createList",
    query: query
  }).then(resp => console.log(resp.data))
    .catch(e => console.log("ERROR =====>", e))

})

