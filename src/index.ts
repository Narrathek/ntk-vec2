/**
 * Represents a two-dimensional vector with x and y components,
 * providing common vector operations such as addition, scaling,
 * normalization, and more.
 */
export class Vec2 {
  public x: number;
  public y: number;

  /**
   * Creates a new Vec2 instance.
   *
   * @param x - The x component (default is 0).
   * @param y - The y component (default is 0).
   */
  constructor (x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Returns a new Vec2 by adding either a scalar or another Vec2 to this vector.
   *
   * @param other - A number to add to both components, or another Vec2 to add component-wise.
   * @returns A new Vec2 instance representing the sum.
   */
  add(other: number): Vec2;
  add(other: Vec2): Vec2;
  add(other: Vec2 | number): Vec2 {
    if (typeof other === 'number') {
      return new Vec2(
        this.x + other,
        this.y + other
      );
    }

    return new Vec2(
      this.x + other.x,
      this.y + other.y
    );
  }

  /**
   * Adds a scalar or another Vec2 to this vector in place.
   *
   * @param other - A number to add to both components, or another Vec2 to add component-wise.
   * @returns This Vec2 instance after mutation (for chaining).
   */
  addSelf(other: number): this;
  addSelf(other: Vec2): this;
  addSelf(other: Vec2 | number): this {
    if (typeof other === 'number') {
      this.x += other;
      this.y += other;
    } else {
      this.x += other.x;
      this.y += other.y;
    }
    return this;
  }

  /**
   * Returns a new Vec2 by subtracting either a scalar or another Vec2 from this vector.
   *
   * @param other - A number to subtract from both components, or another Vec2 to subtract component-wise.
   * @returns A new Vec2 instance representing the difference.
   */
  subtract(other: number): Vec2;
  subtract(other: Vec2): Vec2;
  subtract(other: Vec2 | number): Vec2 {
    if (typeof other === 'number') {
      return new Vec2(this.x - other, this.y - other);
    }
    return new Vec2(this.x - other.x, this.y - other.y);
  }

  /**
   * Subtracts a scalar or another Vec2 from this vector in place.
   *
   * @param other - A number to subtract from both components, or another Vec2 to subtract component-wise.
   * @returns This Vec2 instance after mutation (for chaining).
   */
  subtractSelf(other: number): this;
  subtractSelf(other: Vec2): this;
  subtractSelf(other: Vec2 | number): this {
    if (typeof other === 'number') {
      this.x -= other;
      this.y -= other;
    } else {
      this.x -= other.x;
      this.y -= other.y;
    }
    return this;
  }

  /**
   * Returns a new Vec2 by multiplying this vector by a scalar or another Vec2 component-wise.
   *
   * @param other - A number to scale both components by, or another Vec2 for component-wise multiplication.
   * @returns A new Vec2 instance representing the product.
   */
  multiply(other: number): Vec2;
  multiply(other: Vec2): Vec2;
  multiply(other: Vec2 | number): Vec2 {
    if (typeof other === 'number') {
      return new Vec2(this.x * other, this.y * other);
    }
    return new Vec2(this.x * other.x, this.y * other.y);
  }

  /**
   * Multiplies this vector by a scalar or another Vec2 in place.
   *
   * @param other - A number to scale both components by, or another Vec2 for component-wise multiplication.
   * @returns This Vec2 instance after mutation (for chaining).
   */
  multiplySelf(other: number): this;
  multiplySelf(other: Vec2): this;
  multiplySelf(other: Vec2 | number): this {
    if (typeof other === 'number') {
      this.x *= other;
      this.y *= other;
    } else {
      this.x *= other.x;
      this.y *= other.y;
    }
    return this;
  }

  /**
   * Returns a new Vec2 by dividing this vector by a scalar or another Vec2 component-wise.
   *
   * @param other - A number to divide both components by, or another Vec2 for component-wise division.
   * @returns A new Vec2 instance representing the quotient.
   */
  divide(other: number): Vec2;
  divide(other: Vec2): Vec2;
  divide(other: Vec2 | number): Vec2 {
    if (typeof other === 'number') {
      return new Vec2(this.x / other, this.y / other);
    }
    return new Vec2(this.x / other.x, this.y / other.y);
  }

  /**
   * Divides this vector by a scalar or another Vec2 in place.
   *
   * @param other - A number to divide both components by, or another Vec2 for component-wise division.
   * @returns This Vec2 instance after mutation (for chaining).
   */
  divideSelf(other: number): this;
  divideSelf(other: Vec2): this;
  divideSelf(other: Vec2 | number): this {
    if (typeof other === 'number') {
      this.x /= other;
      this.y /= other;
    } else {
      this.x /= other.x;
      this.y /= other.y;
    }
    return this;
  }

  /**
   * Computes the dot product of this vector with another vector.
   *
   * @param other - The Vec2 instance to perform the dot product with.
   * @returns The scalar dot product: x1*x2 + y1*y2.
   */
  dot(other: Vec2): number {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * Returns a new vector scaled by the given scalar.
   *
   * @param scalar - The factor to multiply both components by.
   * @returns A new Vec2 instance with components (x * scalar, y * scalar).
   */
  scale(scalar: number): Vec2 {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  /**
   * Scales this vector in place by the given scalar.
   *
   * @param scalar - The factor to multiply both components by.
   * @returns This Vec2 instance after scaling (for chaining).
   */
  scaleSelf(scalar: number): this {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  /**
   * Returns a new vector in the same direction with length 1.
   *
   * @throws {Error} If the vector has zero length.
   * @returns A new Vec2 instance normalized to unit length.
   */
  normalize(): Vec2 {
    const len = Math.hypot(this.x, this.y);
    if (len === 0) {
      throw new Error("Cannot normalize a zero-length vector");
    }
    return new Vec2(this.x / len, this.y / len);
  }

  /**
   * Normalizes this vector in place so that its length becomes 1.
   *
   * @throws {Error} If the vector has zero length.
   * @returns This Vec2 instance after normalization (for chaining).
   */
  normalizeSelf(): this {
    const len = Math.hypot(this.x, this.y);
    if (len === 0) {
      throw new Error("Cannot normalize a zero-length vector");
    }
    this.x /= len;
    this.y /= len;
    return this;
  }

  /**
   * Calculates the Euclidean length (magnitude) of this vector.
   *
   * @returns The length √(x² + y²).
   */
  length(): number {
    return Math.hypot(this.x, this.y);
  }

  /**
   * Calculates the squared length of this vector.
   * Useful for performance-sensitive comparisons when the exact length is not required.
   *
   * @returns The squared length (x² + y²).
   */
  lengthSquared(): number {
    return this.x * this.x + this.y * this.y;
  }

  /**
   * Returns a new vector that is this vector rotated around the origin by the given angle.
   *
   * @param theta - Rotation angle in radians (positive is counter-clockwise).
   * @returns A new Vec2 instance representing the rotated vector.
   */
  rotate(theta: number): Vec2 {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    return new Vec2(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }

  /**
   * Rotates this vector in place by the given angle around the origin.
   *
   * @param theta - Rotation angle in radians (positive is counter-clockwise).
   * @returns This Vec2 instance after rotation (for chaining).
   */
  rotateSelf(theta: number): this {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    const x = this.x * cos - this.y * sin;
    const y = this.x * sin + this.y * cos;
    this.x = x;
    this.y = y;
    return this;
  }

  
  /**
   * Linearly interpolates between this vector and another vector.
   *
   * @param other - The target Vec2.
   * @param t - Interpolation factor between 0 and 1.
   * @returns A new Vec2 representing (1 - t)*this + t*other.
   */
  lerp(other: Vec2, t: number): Vec2 {
    return new Vec2(
      this.x + (other.x - this.x) * t,
      this.y + (other.y - this.y) * t
    );
  }

  /**
   * Linearly interpolates towards another vector in place.
   *
   * @param other - The target Vec2.
   * @param t - Interpolation factor between 0 and 1.
   * @returns This Vec2 instance after interpolating.
   */
  lerpSelf(other: Vec2, t: number): this {
    this.x += (other.x - this.x) * t;
    this.y += (other.y - this.y) * t;
    return this;
  }

  /**
   * Computes the squared Euclidean distance from this vector to another.
   * Useful when you need to compare distances without the cost of a square root.
   *
   * @param other - The Vec2 to measure to.
   * @returns The squared distance (dx² + dy²).
   */
  distanceSquaredTo(other: Vec2): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return dx * dx + dy * dy;
  }

  /**
   * Computes the Euclidean distance from this vector to another.
   *
   * @param other - The Vec2 to measure to.
   * @returns The distance √(dx² + dy²).
   */
  distanceTo(other: Vec2): number {
    return Math.hypot(this.x - other.x, this.y - other.y);
  }

  /**
   * Projects this vector onto another vector.
   *
   * @param other - The Vec2 to project onto.
   * @returns A new Vec2 representing the projection of this onto other.
   */
  projectOnto(other: Vec2): Vec2 {
    const denom = other.x * other.x + other.y * other.y;
    if (denom === 0) {
      throw new Error("Cannot project onto a zero-length vector");
    }
    const scalar = (this.x * other.x + this.y * other.y) / denom;
    return new Vec2(other.x * scalar, other.y * scalar);
  }

  /**
   * Returns a vector perpendicular (rotated +90°) to this vector.
   *
   * @returns A new Vec2 that is perpendicular to this one.
   */
  perpendicular(): Vec2 {
    return new Vec2(-this.y, this.x);
  }

  /**
   * Computes the signed angle in radians between this vector and another.
   * Positive result means other is counter-clockwise from this.
   *
   * @param other - The Vec2 to measure the angle to.
   * @returns The angle in radians between -π and +π.
   */
  angleBetween(other: Vec2): number {
    const dot = this.x * other.x + this.y * other.y;
    const det = this.x * other.y - this.y * other.x; // determinant for sign
    return Math.atan2(det, dot);
  }

  /**
   * Creates a new Vec2 instance with the same components as this vector.
   *
   * @returns A new Vec2 instance identical to this one.
   */
  clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  /**
   * Converts this vector to a two-element array.
   *
   * @returns An array [x, y] representing the vector components.
   */
  toArray(): number[] {
    return [this.x, this.y];
  }

  /**
   * Returns a string representation of this vector.
   *
   * @returns A string in the format "(x, y)".
   */
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  /**
   * Creates a zero vector (0, 0).
   *
   * @returns A new Vec2 instance at the origin.
   */
  static zero() {
    return new Vec2(0, 0);
  }

  /**
   * Creates a unit vector along the x-axis (1, 0).
   *
   * @returns A new Vec2 instance representing the x-axis unit vector.
   */
  static unitX() {
    return new Vec2(1, 0);
  }

  /**
   * Creates a unit vector along the y-axis (0, 1).
   *
   * @returns A new Vec2 instance representing the y-axis unit vector.
   */
  static unitY() {
    return new Vec2(0, 1);
  }

  /**
   * Creates a vector from an angle and length.
   *
   * @param theta - The angle in radians (measured from the positive x-axis).
   * @param length - The length of the vector (default is 1).
   * @returns A new Vec2 instance with components (cos(theta) * length, sin(theta) * length).
   */
  static fromAngle(theta: number, length: number = 1): Vec2 {
    return new Vec2(
      Math.cos(theta) * length,
      Math.sin(theta) * length
    );
  }
}

/// |||||||||||||||||||||||||||||||||||||||| VEC3 ||||||||||||||||||||||||||||||||||||||||

/**
 * Represents a three-dimensional vector with x, y, and z components,
 * providing common vector operations such as addition, scaling,
 * normalization, cross product, and more.
 */
export class Vec3 {
  public x: number;
  public y: number;
  public z: number;

  /**
   * Creates a new Vec3 instance.
   *
   * @param x - The x component (default is 0).
   * @param y - The y component (default is 0).
   * @param z - The z component (default is 0).
   */
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Returns a new Vec3 by adding either a scalar or another Vec3 to this vector.
   *
   * @param other - A number to add to all components, or another Vec3 to add component-wise.
   * @returns A new Vec3 instance representing the sum.
   */
  add(other: number): Vec3;
  add(other: Vec3): Vec3;
  add(other: Vec3 | number): Vec3 {
    if (typeof other === 'number') {
      return new Vec3(this.x + other, this.y + other, this.z + other);
    }
    return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  /**
   * Adds a scalar or another Vec3 to this vector in place.
   *
   * @param other - A number to add to all components, or another Vec3 to add component-wise.
   * @returns This Vec3 instance after mutation (for chaining).
   */
  addSelf(other: number): this;
  addSelf(other: Vec3): this;
  addSelf(other: Vec3 | number): this {
    if (typeof other === 'number') {
      this.x += other;
      this.y += other;
      this.z += other;
    } else {
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
    }
    return this;
  }

  /**
   * Returns a new Vec3 by subtracting either a scalar or another Vec3 from this vector.
   *
   * @param other - A number to subtract from all components, or another Vec3 to subtract component-wise.
   * @returns A new Vec3 instance representing the difference.
   */
  subtract(other: number): Vec3;
  subtract(other: Vec3): Vec3;
  subtract(other: Vec3 | number): Vec3 {
    if (typeof other === 'number') {
      return new Vec3(this.x - other, this.y - other, this.z - other);
    }
    return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  /**
   * Subtracts a scalar or another Vec3 from this vector in place.
   *
   * @param other - A number to subtract from all components, or another Vec3 to subtract component-wise.
   * @returns This Vec3 instance after mutation (for chaining).
   */
  subtractSelf(other: number): this;
  subtractSelf(other: Vec3): this;
  subtractSelf(other: Vec3 | number): this {
    if (typeof other === 'number') {
      this.x -= other;
      this.y -= other;
      this.z -= other;
    } else {
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
    }
    return this;
  }

  /**
   * Returns a new Vec3 by multiplying this vector by a scalar or another Vec3 component-wise.
   *
   * @param other - A number to scale all components by, or another Vec3 for component-wise multiplication.
   * @returns A new Vec3 instance representing the product.
   */
  multiply(other: number): Vec3;
  multiply(other: Vec3): Vec3;
  multiply(other: Vec3 | number): Vec3 {
    if (typeof other === 'number') {
      return new Vec3(this.x * other, this.y * other, this.z * other);
    }
    return new Vec3(this.x * other.x, this.y * other.y, this.z * other.z);
  }

  /**
   * Multiplies this vector by a scalar or another Vec3 in place.
   *
   * @param other - A number to scale all components by, or another Vec3 for component-wise multiplication.
   * @returns This Vec3 instance after mutation (for chaining).
   */
  multiplySelf(other: number): this;
  multiplySelf(other: Vec3): this;
  multiplySelf(other: Vec3 | number): this {
    if (typeof other === 'number') {
      this.x *= other;
      this.y *= other;
      this.z *= other;
    } else {
      this.x *= other.x;
      this.y *= other.y;
      this.z *= other.z;
    }
    return this;
  }

  /**
   * Returns a new Vec3 by dividing this vector by a scalar or another Vec3 component-wise.
   *
   * @param other - A number to divide all components by, or another Vec3 for component-wise division.
   * @returns A new Vec3 instance representing the quotient.
   */
  divide(other: number): Vec3;
  divide(other: Vec3): Vec3;
  divide(other: Vec3 | number): Vec3 {
    if (typeof other === 'number') {
      return new Vec3(this.x / other, this.y / other, this.z / other);
    }
    return new Vec3(this.x / other.x, this.y / other.y, this.z / other.z);
  }

  /**
   * Divides this vector by a scalar or another Vec3 in place.
   *
   * @param other - A number to divide all components by, or another Vec3 for component-wise division.
   * @returns This Vec3 instance after mutation (for chaining).
   */
  divideSelf(other: number): this;
  divideSelf(other: Vec3): this;
  divideSelf(other: Vec3 | number): this {
    if (typeof other === 'number') {
      this.x /= other;
      this.y /= other;
      this.z /= other;
    } else {
      this.x /= other.x;
      this.y /= other.y;
      this.z /= other.z;
    }
    return this;
  }

  /**
   * Computes the dot product of this vector with another vector.
   *
   * @param other - The Vec3 instance to perform the dot product with.
   * @returns The scalar dot product: x1*x2 + y1*y2 + z1*z2.
   */
  dot(other: Vec3): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  /**
   * Computes the cross product of this vector with another vector.
   *
   * @param other - The Vec3 to cross with.
   * @returns A new Vec3 representing this × other.
   */
  cross(other: Vec3): Vec3 {
    return new Vec3(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }

  /**
   * Computes the cross product in place of this vector with another.
   *
   * @param other - The Vec3 to cross with.
   * @returns This Vec3 instance after mutation (for chaining).
   */
  crossSelf(other: Vec3): this {
    const x = this.y * other.z - this.z * other.y;
    const y = this.z * other.x - this.x * other.z;
    const z = this.x * other.y - this.y * other.x;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  /**
   * Returns a new vector scaled by the given scalar.
   *
   * @param scalar - The factor to multiply all components by.
   * @returns A new Vec3 instance with components (x * scalar, y * scalar, z * scalar).
   */
  scale(scalar: number): Vec3 {
    return new Vec3(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  /**
   * Scales this vector in place by the given scalar.
   *
   * @param scalar - The factor to multiply all components by.
   * @returns This Vec3 instance after scaling (for chaining).
   */
  scaleSelf(scalar: number): this {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }

  /**
   * Returns a new vector in the same direction with length 1.
   *
   * @throws {Error} If the vector has zero length.
   * @returns A new Vec3 instance normalized to unit length.
   */
  normalize(): Vec3 {
    const len = Math.hypot(this.x, this.y, this.z);
    if (len === 0) {
      throw new Error("Cannot normalize a zero-length vector");
    }
    return new Vec3(this.x / len, this.y / len, this.z / len);
  }

  /**
   * Normalizes this vector in place so that its length becomes 1.
   *
   * @throws {Error} If the vector has zero length.
   * @returns This Vec3 instance after normalization (for chaining).
   */
  normalizeSelf(): this {
    const len = Math.hypot(this.x, this.y, this.z);
    if (len === 0) {
      throw new Error("Cannot normalize a zero-length vector");
    }
    this.x /= len;
    this.y /= len;
    this.z /= len;
    return this;
  }

  /**
   * Calculates the Euclidean length (magnitude) of this vector.
   *
   * @returns The length √(x² + y² + z²).
   */
  length(): number {
    return Math.hypot(this.x, this.y, this.z);
  }

  /**
   * Calculates the squared length of this vector.
   * Useful for performance-sensitive comparisons when the exact length is not required.
   *
   * @returns The squared length (x² + y² + z²).
   */
  lengthSquared(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  /**
   * Linearly interpolates between this vector and another vector.
   *
   * @param other - The target Vec3.
   * @param t - Interpolation factor between 0 and 1.
   * @returns A new Vec3 representing (1 - t)*this + t*other.
   */
  lerp(other: Vec3, t: number): Vec3 {
    return new Vec3(
      this.x + (other.x - this.x) * t,
      this.y + (other.y - this.y) * t,
      this.z + (other.z - this.z) * t
    );
  }

  /**
   * Linearly interpolates towards another vector in place.
   *
   * @param other - The target Vec3.
   * @param t - Interpolation factor between 0 and 1.
   * @returns This Vec3 instance after interpolating (for chaining).
   */
  lerpSelf(other: Vec3, t: number): this {
    this.x += (other.x - this.x) * t;
    this.y += (other.y - this.y) * t;
    this.z += (other.z - this.z) * t;
    return this;
  }

  /**
   * Computes the squared Euclidean distance from this vector to another.
   * Useful when you need to compare distances without the cost of a square root.
   *
   * @param other - The Vec3 to measure to.
   * @returns The squared distance (dx² + dy² + dz²).
   */
  distanceSquaredTo(other: Vec3): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const dz = this.z - other.z;
    return dx * dx + dy * dy + dz * dz;
  }

  /**
   * Computes the Euclidean distance from this vector to another.
   *
   * @param other - The Vec3 to measure to.
   * @returns The distance √(dx² + dy² + dz²).
   */
  distanceTo(other: Vec3): number {
    return Math.hypot(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  /**
   * Projects this vector onto another vector.
   *
   * @param other - The Vec3 to project onto.
   * @returns A new Vec3 representing the projection of this onto other.
   */
  projectOnto(other: Vec3): Vec3 {
    const denom = other.x * other.x + other.y * other.y + other.z * other.z;
    if (denom === 0) {
      throw new Error("Cannot project onto a zero-length vector");
    }
    const scalar = (this.dot(other)) / denom;
    return new Vec3(other.x * scalar, other.y * scalar, other.z * scalar);
  }

  /**
   * Creates a new Vec3 instance with the same components as this vector.
   *
   * @returns A new Vec3 instance identical to this one.
   */
  clone(): Vec3 {
    return new Vec3(this.x, this.y, this.z);
  }

  /**
   * Converts this vector to a three-element array.
   *
   * @returns An array [x, y, z] representing the vector components.
   */
  toArray(): [number, number, number] {
    return [this.x, this.y, this.z];
  }

  /**
   * Returns a string representation of this vector.
   *
   * @returns A string in the format "(x, y, z)".
   */
  toString(): string {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }

  /**
   * Creates a zero vector (0, 0, 0).
   *
   * @returns A new Vec3 instance at the origin.
   */
  static zero(): Vec3 {
    return new Vec3(0, 0, 0);
  }

  /**
   * Creates a unit vector along the x-axis (1, 0, 0).
   *
   * @returns A new Vec3 instance representing the x-axis unit vector.
   */
  static unitX(): Vec3 {
    return new Vec3(1, 0, 0);
  }

  /**
   * Creates a unit vector along the y-axis (0, 1, 0).
   *
   * @returns A new Vec3 instance representing the y-axis unit vector.
   */
  static unitY(): Vec3 {
    return new Vec3(0, 1, 0);
  }

  /**
   * Creates a unit vector along the z-axis (0, 0, 1).
   *
   * @returns A new Vec3 instance representing the z-axis unit vector.
   */
  static unitZ(): Vec3 {
    return new Vec3(0, 0, 1);
  }
}
