import { openDB } from 'idb' 

const getWebAppData = async (key) => {
  const dbPromise = openDB('webApp', 1)
  const { value = false } = await (await dbPromise).get('webApp', key)
  return value
}

export default getWebAppData