import Front from "./components/Front";
import Event from "./components/Event";
import Schedule from "./components/Schedule";
import Location from "./components/Location";

export default function Home() {
  return (
    <main className="w-full">
      <Front />
      <Event />
      <Schedule />
      <Location />
    </main>
  );
}
