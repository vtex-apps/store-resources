import { openDB } from 'idb' 

const webAppAlreadyInstalled = async () => {
  const dbPromise = openDB('webApp', 1)
  const { value = false } = await (await dbPromise).get('webApp', 'appIsFromHomeScreen')
  return value
}

export default webAppAlreadyInstalled