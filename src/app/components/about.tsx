export default function About() {
  return (
    <div className="w-full h-auto bg-white">
      <div className="flex flex-col items-center justify-center pt-32 pb-12">
        <div className="flex items-center justify-center gap-4">
          <div>
            <img src="/path.svg" alt="path" />
          </div>
          <div className="text-md font-bold uppercase">Warum uns wählen</div>
          <div>
            <img src="/path.svg" alt="path" className="w-16" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-24 px-4">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/icons/Icon → Icon.png"
              alt="icon"
              className="w-16 h-16"
            />
            <div className="text-md font-bold uppercase">Köstliches Essen</div>
            <div className="text-center text-sm max-w-xs">
              Wir verwenden nur die frischesten Zutaten für unsere Gerichte.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/icons/Icon → Icon-1.png"
              alt="icon"
              className="w-16 h-16"
            />
            <div className="text-md font-bold uppercase">FRISCHE ZUTATEN</div>
            <div className="text-center text-sm max-w-xs">
              Unsere Gerichte werden täglich frisch für Sie zubereitet.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/icons/f03wVnCYoLDS94bmuXGK52wK04.svg fill.png"
              alt="icon"
              className="w-16 h-16"
            />
            <div className="text-md font-bold uppercase">
              GEMÜTLICHES AMBIENTE
            </div>
            <div className="text-center text-sm max-w-xs">
              Genießen Sie Ihr Essen in einer entspannten und freundlichen
              Atmosphäre.
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/icons/RA1UDDdMpjRCnQ7M6QvNpBkwMB8.svg fill.png"
              alt="icon"
              className="w-16 h-16"
            />
            <div className="text-md font-bold uppercase">
              FREUNDLICHER SERVICE
            </div>
            <div className="text-center text-sm max-w-xs">
              Unser Team ist stets bemüht, Ihnen den besten Service zu bieten.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
