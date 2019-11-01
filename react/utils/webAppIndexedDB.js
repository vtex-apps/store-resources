import { openDB } from 'idb' 

const webAppAlreadyInstalled = async (key) => {
  const db = await openDB('webApp', 1, {
    upgrade(db) {
      db.createObjectStore('webApp', {
        keyPath: 'name',
      })
    },
  })
  const { value = false } = await (await db).get('webApp', key) || {}
  return value
}

export default webAppAlreadyInstalled