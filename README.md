# Granular Liquid Glass React

A React implementation of Apple's liquid glass effect with authentic refractions, chromatic aberration, and liquid-like elasticity. This is a fork of [rdev/liquid-glass-react](https://github.com/rdev/liquid-glass-react).





## Examples

| Card Example | Button Example |
|:------------:|:--------------:|
| ![image](https://github.com/user-attachments/assets/3fee564c-a1fc-442b-bffb-8fe5ea234e64) | ![image](https://github.com/user-attachments/assets/a54984d2-971d-495e-9d1e-afaa1ebe48a3) |

## Live Demo

[View live demo of original repository](https://liquid-glass.maxrovensky.com)

## Features

- **Authentic liquid glass effect** with proper edgy bending and refraction - did not change
- **Chromatic aberration** for realistic optical effects - did not change
- **Multiple refraction modes** (standard, polar, prominent, shader) - did not change
- **Configurable frost level and blur intensity**
- **Mouse tracking** with customizable containers - did not change
- **Flexible styling with arbitrary child elements**
- **Responsive design** with configurable padding and corner radius - did not change
- **Elastic animations** that mimic Apple's "liquid" feel - did not change
- **Interactive feedback** with proper hover and click effects - did not change
- **Light adaptation - works on both light and dark backgrounds**

> **Browser Support:** Safari and Firefox only partially support the effect (displacement may not be visible). Chrome and Chromium-based browsers provide the full experience.

## Installation

Clone the repository and integrate it into your project:

```bash
git clone https://github.com/Naethanial/granular-liquid-glass.git
cd granular-liquid-glass
npm install
npm run build
```

### Adding to Your Project

#### Option 1: Copy Source Files
Copy the `src/` directory contents into your project and import directly:

```tsx
import LiquidGlass from './path/to/granular-liquid-glass/src'
```

#### Option 2: Local Package Installation
Build and link the package locally:

```bash
# In the granular-liquid-glass directory
npm run build
npm link

# In your project directory
npm link granular-liquid-glass
```

#### Option 3: Direct Integration
Copy the built files from the `dist/` folder into your project after building.

## Usage

### Basic Example

```tsx
import LiquidGlass from 'granular-liquid-glass'

function App() {
  return (
    
      
        Hello, Glass!
        This content has the liquid glass effect
      
    
  )
}
```

### Interactive Button

```tsx
 alert('Glass button clicked!')}
  className="inline-block"
>
  
    Click Me
  

```

### Card Component

```tsx

  
    Glass Card
    
      Beautiful glass morphism effect with proper light refraction.
    
    
      Action
    
  

```

### Custom Mouse Container

When you want the glass effect to respond to mouse movement over a larger area:

```tsx
import { useRef } from 'react'

function App() {
  const containerRef = useRef(null)

  return (
    
      
        
          
            Glass responds to mouse anywhere in the container
          
        
      
    
  )
}
```

### Refraction Modes

```tsx
// Standard mode (default)

  Standard refraction


// Polar mode for radial effects

  Polar refraction


// Prominent mode for stronger effects

  Prominent refraction


// Shader mode for maximum accuracy (experimental)

  Shader-based refraction

```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | Content to render inside the glass container |
| `displacementScale` | `number` | `70` | Controls the intensity of the displacement effect (higher = more distortion) |
| `blurAmount` | `number` | `0.0625` | Controls the blur/frosting level (0 = clear, higher = more blur) |
| `saturation` | `number` | `140` | Controls color saturation of the glass effect (%) |
| `aberrationIntensity` | `number` | `2` | Controls chromatic aberration intensity (0 = none, higher = more rainbow effect) |
| `elasticity` | `number` | `0.15` | Controls the "liquid" elastic animation feel (0 = rigid, higher = more elastic) |
| `cornerRadius` | `number` | `999` | Border radius in pixels (999 = fully rounded) |
| `className` | `string` | `""` | Additional CSS classes to apply |
| `padding` | `string` | `"24px 32px"` | CSS padding value for internal spacing |
| `style` | `React.CSSProperties` | `{}` | Additional inline styles |
| `overLight` | `boolean` | `false` | Whether the glass is over a light background (adjusts blur) |
| `onClick` | `() => void` | `undefined` | Click handler function |
| `mouseContainer` | `React.RefObject` | `null` | Container element to track mouse movement on |
| `mode` | `"standard" \| "polar" \| "prominent" \| "shader"` | `"standard"` | Refraction mode for different visual effects |
| `globalMousePos` | `{ x: number; y: number }` | `undefined` | Manual global mouse position coordinates |
| `mouseOffset` | `{ x: number; y: number }` | `undefined` | Mouse position offset for fine-tuning |

### Mode Descriptions

- **`standard`**: Classic glass effect with balanced distortion
- **`polar`**: Radial distortion pattern, great for circular elements
- **`prominent`**: Enhanced effect with stronger visual impact
- **`shader`**: Most accurate but experimental (may be unstable)

## Development

### Project Structure

```
granular-liquid-glass/
├── src/
│   ├── index.tsx          # Main LiquidGlass component
│   ├── shader-utils.ts    # WebGL shader utilities
│   └── utils.ts          # Displacement map utilities
├── liquid-glass-example/  # Next.js example app
├── assets/               # Demo images
└── dist/                # Built files
```

### Building

```bash
npm install
npm run build
```

### Running the Example

```bash
cd liquid-glass-example
npm install
npm run dev
```

The example will be available at `http://localhost:3000`

## Browser Compatibility

| Browser | Displacement Effect | Backdrop Filter | Overall Support |
|---------|:------------------:|:---------------:|:---------------:|
| **Chrome** | Full | Full | **Complete** |
| **Edge** | Full | Full | **Complete** |
| **Safari** | Partial | Full | **Good** |
| **Firefox** | None | Full | **Limited** |

## Contributing

Contributions are welcome! Feel free to report bugs, suggest features, submit pull requests, or improve documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



[Star this repo](https://github.com/Naethanial/granular-liquid-glass) | [Report issues](https://github.com/Naethanial/granular-liquid-glass/issues) | [Request features](https://github.com/Naethanial/granular-liquid-glass/issues)

