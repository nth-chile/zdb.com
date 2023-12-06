import ClientPlayer from "../../src/ClientPlayer"
import getData from 'fs-shows/dist/fs-shows-gcloud'
// import getData from '../../../fs-shows/dist/fs-shows-gcloud'
import 'fs-shows/dist/style.css'

export default async function Shows() {
  const data = await getData('zdb-shows')

  return <ClientPlayer
    title="Live Shows"
    data={data}
    backPath="/"
    basePath="/shows"
    yearsDirectory={false}
  />
}