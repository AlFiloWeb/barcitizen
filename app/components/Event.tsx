export default function Event() {
  return (
    <section
      id="event"
      className="w-full m-auto justify-center items-center xl:px-0 flex flex-col"
    >
      <div className="w-full flex flex-wrap xl:flex-nowrap items-center gap-10 px-20 bg-[#64748B] ">
        <p className="text-2xl font-semibold my-10 text-justify xl:basis-6/12 basis-full text-white">
          El día 6 de Abril os esperamos a toda la comunidad de Star Citizen en
          el evento Bar Citizen Valencia 2024
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          ante quis leo viverra luctus. Integer volutpat purus ut ultricies
          pellentesque. Sed ut tortor at lectus efficitur elementum a et lectus.
          Fusce nibh metus, volutpat sit amet nisi et, efficitur ullamcorper
          ligula. Vivamus non ultricies diam, eu hendrerit urna.
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
    </section>
  );
}
