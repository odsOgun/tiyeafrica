// Signature pixel-cluster motif (echoes the brand's ID-badge crop).
// Ported from js/main.js — rendered declaratively instead of via DOM building.
const MASK = [
  0, 0, 1, 0, 0,
  0, 1, 1, 1, 0,
  1, 1, 1, 1, 1,
  0, 1, 1, 1, 0,
  0, 0, 1, 0, 0,
];
const COLORS = ['blue', 'green', 'orange'];

export default function PixelGrid() {
  let ci = 0;
  return (
    <div className="pixel-grid" id="pixelGrid">
      {MASK.map((on, i) => (
        <div
          key={i}
          className={'px ' + (on ? COLORS[ci++ % COLORS.length] : 'ghost')}
          style={{ animationDelay: i * 0.035 + 's' }}
        />
      ))}
    </div>
  );
}
