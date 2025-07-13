# ntk-vec

A tiny, fully-typed 2D/3D vector math library for TypeScript & JavaScript.

## Install

```bash
npm install ntk-vec
```

## Examples

### Basic 2D operations
```typescript
import { Vec2 } from 'ntk-vec';

const a = new Vec2(1, 2);
const b = new Vec2(3, 5);

// add, subtract, length, toString
const sum       = a.add(b);
const diff      = b.subtract(a);
const distance  = a.distanceTo(b);
console.log(sum.toString());      // "(4, 7)"
console.log(diff.toString());     // "(2, 3)"
console.log(distance.toFixed(2)); // "3.61"
```

### Rotate & interpolate

```typescript
import { Vec2 } from 'ntk-vec';

// fromAngle: unit vector at 45°
const dir = Vec2.fromAngle(Math.PI / 4);

// rotate a point and lerp towards another
const p1 = new Vec2(5, 0).rotate(Math.PI / 6);
const p2 = new Vec2(0, 5);
const mid = p1.lerp(p2, 0.5);

console.log(dir.toString()); // "(0.7071…, 0.7071…)"
console.log(p1.toString());  // "(4.33…, 2.5)"
console.log(mid.toString()); // e.g. "(2.165…, 3.75)"
```