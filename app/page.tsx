import Background from '@/src/Background'

export default async function Home() {
  return (
    <Background className="zdb-page">
      <main className="text-center flex flex-col justify-center align-middle w-full h-full text-stone-400">
        <ul className="links mx-auto">
          <li>
            <a className="hover:underline " href="https://zannadu.bandcamp.com/" target="_blank" aria-label="bandcamp">
              Bandcamp
            </a>
          </li>
          <li>
            <a className="hover:underline " href="https://www.youtube.com/playlist?list=PLmzAQacNC7E3TFFxDnnlnFaXg0uBuTjbp" target="_blank" aria-label="youtube">
              YouTube
            </a>
          </li>
          <li>
            <a className="hover:underline " href="https://www.instagram.com/zannaduband/" target="_blank" aria-label="instagram">
              Instagram
            </a>
          </li>
          <li>
            <a className="hover:underline " href="mailto:jaredsalzano@gmail.com" target="_blank" aria-label="email">
              Email
            </a>
          </li>
          <li>
            <a className="hover:underline " href="shows" aria-label="shows">
              Stream past shows
            </a>
          </li>
        </ul>
      </main>
    </Background>
  )
}
