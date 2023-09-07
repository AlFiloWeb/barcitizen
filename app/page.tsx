import Front from './components/Front'
import Event from './components/Event'
import Schedule from './components/Schedule'
import Location from './components/Location'

export default function Home() {
  return (
    <main className="max-w-screen-xl m-auto flex flex-col justify-center items-center">
      <Front />
      <Event />
      <Schedule />
      <Location />
    </main>
  )
}
