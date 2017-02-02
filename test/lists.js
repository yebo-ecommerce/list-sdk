import { expect } from './helpers'
import { createList } from '../src/lists'

describe('Lists', function() {
  it("Should create a list", function() {
    const tenant = "demo"
    const userId = 1
    const token = "superSecretToken"
    const categories = [1]
    const name = "Sample From here"

    createList(tenant, userId, token, categories, name)
  })
})
