function generics1(arg: number): number {
  return arg;
}

function generics2(arg: string): string {
  return arg;
}

function generics3<Type>(arg: Type): Type {
  return arg;
}

function generics4<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // array .length property
  return arg;
}

const inu = generics4<string>(["a", "b", "c"]);
