import { Vec2 } from "../src";

describe("Vec2.add()", () => {
  it("adds a number to both Komponenten und gibt eine neue Instanz zurück", () => {
    const v = new Vec2(1, 2);
    const result = v.add(3);

    // result ist Vec2 und hat korrekte Werte
    expect(result).toBeInstanceOf(Vec2);
    expect(result.x).toBe(4);
    expect(result.y).toBe(5);

    // Originalobjekt bleibt unverändert
    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
  });

  it("addiert zwei Vektoren korrekt", () => {
    const a = new Vec2(1, 2);
    const b = new Vec2(3, 5);
    const sum = a.add(b);

    expect(sum).toBeInstanceOf(Vec2);
    expect(sum.x).toBe(4);
    expect(sum.y).toBe(7);

    // sicherheitshalber: Originale bleiben unverändert
    expect(a.x).toBe(1);
    expect(a.y).toBe(2);
    expect(b.x).toBe(3);
    expect(b.y).toBe(5);
  });

  it("lässt sich auch hintereinander aufrufen (Chaining)", () => {
    const v = new Vec2(0, 0);
    const chained = v.add(1).add(new Vec2(2, 3));

    expect(chained).toBeInstanceOf(Vec2);
    expect(chained.x).toBe(3); // 0+1+2
    expect(chained.y).toBe(4); // 0+1+3
  });

  it("funktioniert mit negativen Zahlen", () => {
    const v = new Vec2(5, -5);
    const result = v.add(-2);

    expect(result.x).toBe(3);
    expect(result.y).toBe(-7);
  });
});
