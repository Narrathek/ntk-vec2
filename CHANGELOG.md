# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.1.1 (2025-07-13)
#### Added
- **Vec2.cross** – 2D “cross product” (returns the scalar z-component).
- **Vec3** class, providing full 3D vector support:
  - **Instance methods**:
    - `add`, `addSelf`
    - `subtract`, `subtractSelf`
    - `multiply`, `multiplySelf`
    - `divide`, `divideSelf`
    - `dot`
    - `cross`, `crossSelf`
    - `scale`, `scaleSelf`
    - `normalize`, `normalizeSelf`
    - `length`, `lengthSquared`
    - `lerp`, `lerpSelf`
    - `distanceTo`, `distanceSquaredTo`
    - `projectOnto`
    - `clone`, `toArray`, `toString`
  - **Static factory methods**:
    - `zero()`, `unitX()`, `unitY()`, `unitZ()`