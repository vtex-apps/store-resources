import { openDB } from 'idb' 

const webAppAlreadyInstalled = async () => {
  const db = await openDB('webApp', 1, {
    upgrade(db) {
      db.createObjectStore('webApp', {
        keyPath: 'name',
      })
    },
  })
  const { value = false } = await (await db).get('webApp', 'appIsFromHomeScreen') || {}
  return value
}

export default webAppAlreadyInstalled