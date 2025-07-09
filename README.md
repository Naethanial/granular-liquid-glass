# Granular Liquid Glass React

A React component that recreates Apple’s "liquid glass" effect with real refraction, chromatic aberration, and liquid-like elasticity.

> **Note:** This project is a community fork of [rdev/liquid-glass-react](https://github.com/rdev/liquid-glass-react). All credit for the original idea and implementation goes to the upstream author. My fork focuses on maintenance, granular configurability, and documentation improvements.

---

## Preview

| Card Example | Button Example |
|:------------:|:--------------:|
| ![Card](https://github.com/user-attachments/assets/3fee564c-a1fc-442b-bffb-8fe5ea234e64) | ![Button](https://github.com/user-attachments/assets/a54984d2-971d-495e-9d1e-afaa1ebe48a3) |

## Live Demo

A live demo is available at the original author’s site: <https://liquid-glass.maxrovensky.com>

---

## Features

- Liquid-glass distortion with edge bending & refraction
- Chromatic aberration
- Four refraction modes: `standard`, `polar`, `prominent`, `shader`
- Adjustable blur / frost, saturation, corner-radius & padding
- Mouse tracking with optional external container
- Elastic animations for touch & cursor interactions
- Works on both light and dark backgrounds

---

## Installation

```bash
# once published on npm
npm install granular-liquid-glass

# – or – clone & build locally
 git clone https://github.com/Naethanial/granular-liquid-glass.git
 cd granular-liquid-glass
 npm install && npm run build
```

### Using the source directly

```tsx
// After cloning the repo
import LiquidGlass from "./path/to/granular-liquid-glass/src";
```

---

## Usage

### Basic

```tsx
import LiquidGlass from 'granular-liquid-glass';

function App() {
  return (
    <LiquidGlass>
      <h1>Hello, Glass!</h1>
      <p>This content is refracted through liquid glass!</p>
    </LiquidGlass>
  );
}
```

### Interactive Button

```tsx
<LiquidGlass onClick={() => alert('Glass button clicked!')} className="inline-flex cursor-pointer px-6 py-3">
  Click Me
</LiquidGlass>
```

### Card

```tsx
<LiquidGlass className="w-72 flex-col gap-2">
  <h2 className="font-semibold">Glass Card</h2>
  <p>Beautiful glass morphism effect with proper light refraction.</p>
  <button className="mt-auto">Action</button>
</LiquidGlass>
```

### Custom Mouse Container

```tsx
import { useRef } from 'react';

function Example() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-96">
      <LiquidGlass mouseContainer={containerRef} className="absolute inset-0 flex items-center justify-center">
        Responds to mouse anywhere in the container
      </LiquidGlass>
    </div>
  );
}
```

### Refraction Modes

```tsx
// Default
<LiquidGlass mode="standard">Standard refraction</LiquidGlass>

// Radial distortion
<LiquidGlass mode="polar">Polar refraction</LiquidGlass>

// Stronger edge effect
<LiquidGlass mode="prominent">Prominent refraction</LiquidGlass>

// Highest fidelity (experimental)
<LiquidGlass mode="shader">Shader-based refraction</LiquidGlass>
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **required** | Content rendered inside the glass |
| `displacementScale` | `number` | `70` | Distortion intensity |
| `blurAmount` | `number` | `0.0625` | Frost/blur level (0 = clear) |
| `saturation` | `number` | `140` | Color saturation (%) |
| `aberrationIntensity` | `number` | `2` | Chromatic aberration intensity |
| `elasticity` | `number` | `0.15` | How “liquid” the glass moves |
| `cornerRadius` | `number` | `999` | Border-radius (px) |
| `className` | `string` | `""` | Additional CSS classes |
| `padding` | `string` | `"24px 32px"` | Padding inside the glass |
| `style` | `React.CSSProperties` | `{}` | Inline styles |
| `overLight` | `boolean` | `false` | Set to `true` when on light background |
| `onClick` | `() => void` | — | Click handler |
| `mouseContainer` | `React.RefObject` | — | Track mouse movement on this container |
| `mode` | `'standard' \| 'polar' \| 'prominent' \| 'shader'` | `'standard'` | Refraction mode |
| `globalMousePos` | `{ x: number; y: number }` | — | Manually supply mouse position |
| `mouseOffset` | `{ x: number; y: number }` | — | Fine-tune mouse offset |

---

## Development

```bash
# build the library
npm install
npm run build

# run the Next.js example
cd liquid-glass-example
npm install
npm run dev  # http://localhost:3000
```

---

## Browser Support

| Browser  | Displacement | Backdrop Filter | Overall |
|----------|:------------:|:---------------:|:-------:|
| Chrome   | ✅ | ✅ | **Best** |
| Edge     | ✅ | ✅ | **Best** |
| Safari   | ⚠️ Partial | ✅ | Good |
| Firefox  | ❌ | ✅ | Limited |

---

## Contributing

Pull requests and issue reports are welcome! 

## License

[MIT](LICENSE)
