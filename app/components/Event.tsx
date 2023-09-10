export default function Event() {
  return (
    <section
      id="event"
      className="w-full m-auto justify-center items-center xl:px-0 flex flex-col bg-[#64748B]"
    >
      <div className="max-w-screen-2xl w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-end pr-20">
          <p className="font-agencyGothicCTBold text-7xl md:text-9xl text-white text-center">
            bar citizen
            <br />
            valencia 2024
          </p>
        </div>
        <div className="max-w-screen-2xl w-full flex flex-wrap xl:flex-nowrap justify-center items-center gap-10 px-20 sm:px-0">
          <p className="text-2xl font-semibold my-10 text-justify md:text-left xl:basis-6/12 basis-full text-white">
            ¡Únete a la emoción de Star Citizen en el Bar Citizen Valencia 2024
            Este evento único, organizado por las comunidades de Al Filo y
            Krakenostrum tendrá lugar el 6 de abril de 2024 en la espectacular
            discoteca L'Umbracle, ubicada en la Ciudad de las Artes y las
            Ciencias de Valencia.
            <br />
            <br />
            L'Umbracle, con su ambiente moderno y su impresionante escenario,
            proporcionará el telón de fondo perfecto para este evento épico. Ya
            sea que seas un veterano curtido en las estrellas o un recién
            llegado entusiasmado por unirte a esta comunidad, te invitamos a
            unirte a nosotros y celebrar la exploración, el comercio y la
            amistad en este emocionante Bar Citizen.
            <br />
            <br />
            Ven y comparte tu pasión por Star Citizen con otros ciudadanos
            galácticos. Disfruta de charlas, demostraciones en vivo y la
            compañía de fanáticos como tú.
            <br />
            ¡No te lo pierdas! ¡Que la fuerza de las estrellas esté contigo!
          </p>
          <div className="shadow-black xl:basis-6/12 basis-full">
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
