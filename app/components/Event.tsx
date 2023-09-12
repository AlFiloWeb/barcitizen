export default function Event() {
  return (
    <section id="event" className="w-full flex justify-center p-5 2xl:p-0">
      <div className="max-w-screen-2xl w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-end">
          <p className="font-agencyGothicCTBold text-7xl md:text-9xl text-[#094A67] text-right">
            bar citizen
            <br />
            valencia 2024
          </p>
        </div>
        <div className="max-w-screen-2xl w-full flex flex-wrap xl:flex-nowrap justify-center items-center gap-10">
          <p className="text-xl font-semibold my-5 2xl:text-justify md:text-left xl:basis-6/12 basis-full xl:order-2">
            ¡Hola Ciudadano del verso! quieres sentir toda la emoción de la
            comunidad española de Star Citizen?
            <br />
            <br />
            Al filo y Krakenostrum con la colaboracion de CIG, estan montando el
            Bar Citizen mas grande que se ha hecho hasta la fecha en España! con
            la intención de que todos los amantes de Star Citizen pasemos una
            gran velada entre colegas, Habrá eventos, sorteos, demostraciones en
            directo, cabinas de simulación y más! para disfrutar como nunca de
            nuestro amado Star Citizen, entre otras actividades!
            <br />
            <br />
            El 6 de Abril de 2024 en la discoteca L&apos;ubracle, en Valencia,
            con su ambiente moderno y su impresionante escenario al mas puro
            estilo New Babbage será el lugar del evento, La entrada y Parking
            serán GRATUITOS y tambien el acceso a todas las actividades del
            mismo. Seas un veterano o un recién llegado a la comunidad, te
            invitamos a unirte a nosotros y pasar una velada épica disfrutando
            de la mejor compañia!
            <br />
            Ven y comparte tu pasión por Star Citizen con otros ciudadanos
            galácticos como tú!.¡No te lo pierdas!
          </p>
          <div className="shadow-2xl shadow-black basis-full xl:basis-6/12 mb-20 xl:mb-0">
            <iframe
              className="aspect-video w-full h-auto"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rGrvUyF98yE?si=mA1rgB6z7qVJZZvI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
