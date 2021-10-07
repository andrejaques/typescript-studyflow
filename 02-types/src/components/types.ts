// boolean (true / false).
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`).
let message: string;
message = `foo ${isOpen}`;

// number (inter, float, hex, binary).
let total: number;
total = 0xff0;

// array.
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3, 4, 5];

// tuple.
let title: [number, string];
title = [1, "foo"];

// enum.
enum Colors {
  white = '#fff',
  black = '#000'
};

// any - *nao usar.
let coisa: any;
coisa = true;
coisa = [1];
coisa = 1;
coisa = "1";

// void - não retorna nada.
function logger(): void {
  console.log('foo')
};

// null / undefined - *não usar diretamente.
type Bowl = string | undefined;

// never
function error(): never {
  throw new Error("error")
};

// object - not string or number or boolean.
let cart: object;
cart = {
  key: "fi"
};
