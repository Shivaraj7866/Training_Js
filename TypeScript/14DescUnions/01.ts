interface circle {
  kind: "circle";
  radius: number;
}

interface square {
  kind: "square";
  side: number;
}

interface rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = circle | square | rectangle;

function trueShape(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;

    default:
      const _nothing: never = shape;
      return _nothing;
  }
}

console.log(trueShape({
  side: 2.5,
  kind: "square",
}));

console.log(trueShape({kind:"rectangle",length:25,width:25}))
