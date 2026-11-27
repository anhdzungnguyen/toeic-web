/* Hình minh họa đơn giản cho Part 1 (vẽ bằng SVG). Thêm cảnh mới: TOEIC.scenes.ten_canh = svg(`...`) */
window.TOEIC.scenes = (function () {
  const svg = b => '<svg viewBox="0 0 240 150" class="scene-svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' + b + '</svg>';
  const head = (x, y) => `<circle cx="${x}" cy="${y}" r="11"/>`;
  return {
    woman_desk: svg(`<path d="M20 102h200M38 102v40M202 102v40"/><rect x="122" y="48" width="64" height="42" rx="4"/><path d="M154 90v12"/><rect x="96" y="96" width="44" height="5" fill="currentColor"/>${head(66, 46)}<path d="M66 57v40M66 70l32 26M66 97h-8v45M58 97l-14 45"/><path d="M188 98h26M188 92h26M190 86h22"/>`),
    man_cup: svg(`${head(90, 36)}<path d="M90 47v50M90 97l-14 45M90 97l14 45M90 62l-18 26M90 62l24 12"/><rect x="112" y="66" width="12" height="16" rx="2"/><path d="M124 70h4v8h-4"/><rect x="160" y="22" width="60" height="70" rx="2"/><path d="M190 22v70M160 57h60M10 142h220"/>`),
    boxes: svg(`<path d="M10 142h220"/><rect x="30" y="102" width="50" height="40"/><rect x="30" y="62" width="50" height="40"/><rect x="38" y="22" width="40" height="40"/><rect x="100" y="112" width="40" height="30"/><rect x="100" y="82" width="40" height="30"/><rect x="160" y="102" width="56" height="40"/><path d="M55 102v40M55 62v40M120 112v30M188 102v40"/>`),
    handshake: svg(`<rect x="95" y="8" width="50" height="40" rx="2"/><path d="M120 8v40"/>${head(70, 40)}${head(170, 40)}<path d="M70 51v48M70 99l-12 43M70 99l12 43M170 51v48M170 99l-12 43M170 99l12 43M70 64l30 16h40l30-16"/>`),
    ladder: svg(`<path d="M10 142h220M30 10v132"/><rect x="60" y="30" width="50" height="50" rx="2"/><path d="M85 30v50M60 55h50"/><path d="M150 142l34-128M174 142l34-128"/><path d="M155 124h24M160 104h24M165 84h24M170 64h24M175 44h24"/>`),
    presenter: svg(`<rect x="130" y="14" width="96" height="70" rx="3"/><path d="M144 72v-14M162 72v-26M180 72v-20M198 72v-38M214 72v-46"/>${head(98, 40)}<path d="M98 51v46M98 97l-12 45M98 97l12 45M98 64l32-14M98 64l-18 26"/><path d="M14 142a14 14 0 0 1 28 0M46 142a14 14 0 0 1 28 0M28 112a8 8 0 1 0 0.1 0M60 112a8 8 0 1 0 0.1 0"/>`),
    table_chairs: svg(`<path d="M10 142h220"/><ellipse cx="120" cy="88" rx="62" ry="12"/><path d="M120 100v42M100 142h40"/><path d="M114 76h12l-2-14h-8z"/><path d="M116 62l-6-16M120 62v-20M124 62l6-16"/><circle cx="110" cy="44" r="4"/><circle cx="120" cy="40" r="4"/><circle cx="130" cy="44" r="4"/><path d="M36 60v82M36 104h26v38M62 104v-6"/><path d="M204 60v82M204 104h-26v38M178 104v-6"/>`)
  };
})();
