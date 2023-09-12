"use client";

import Navigation from "./components/Navigation";
import Front from "./components/Front";
import Event from "./components/Event";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { useState } from "react";
import { InView } from "react-intersection-observer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("front");

  return (
    <main className="w-full">
      <Navigation currentSection={currentSection} />

      <InView threshold={0.4} delay={200}
        onChange={(inView, entry) =>
          inView ? setCurrentSection("front") : null
        }
      >
        <Front />
      </InView>
      <InView threshold={0.6} delay={200}
        onChange={(inView, entry) =>
          inView ? setCurrentSection("event") : null
        }
      >
        <Event />
      </InView>
      <InView threshold={0.4} delay={200}
        onChange={(inView, entry) =>
          inView ? setCurrentSection("schedule") : null
        }
      >
        <Schedule />
      </InView>
      <InView threshold={0.6} delay={200}
        onChange={(inView, entry) =>
          inView ? setCurrentSection("location") : null
        }
      >
        <Location />
      </InView>
      <Footer />
    </main>
  );
}
