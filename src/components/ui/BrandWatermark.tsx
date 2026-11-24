/** Large faded "HAIR SKULL" lettering used as a photo placeholder */
export default function BrandWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none text-center font-serif text-5xl leading-none tracking-[0.15em] text-gold/10 select-none sm:text-6xl md:text-8xl"
    >
      <div>HAIR</div>
      <div>SKULL</div>
    </div>
  );
}
