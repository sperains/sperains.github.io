interface Student {
  name: string;
  age: number;
}

// 1. 把一个类型的每个属性都变为可空的
type Nullable<T> = {
  [Property in keyof T]: T[Property] | null;
};

// 2. 把一个类型的每个属性都变为只读的
type Readonly1<T> = {
  readonly [Property in keyof T]: T[Property];
};

// 3. 把一个类型的属性都变为可选的
type Optional<T> = {
  [Property in keyof T]?: T[Property];
};

// 4. 把一个类型的每项都变为Promise
type ToPromise<T> = {
  [K in keyof T]: Promise<T[K]>;
};

interface Fetcher {
  getObject(done: (data: unknown, elapsedTime: number) => void): void;
}

let a: Fetcher = {
  getObject() {},
};

a.getObject((data) => {
  console.log(data);
});

interface SaveAction {
  type: "save";
}

interface LoadAction {
  type: "load";
}

type Action = SaveAction | LoadAction;
type ActionType = Action["type"];

type User = {
  name: string;
  password: string;
  address: string;
  phone: string;
};

type UserPartial = {
  name?: string;
  password?: string;
  address?: string;
  phone?: string;
};


type Item = { 
  a: string;
  b: number;
  c: boolean;
}

type T1 = { [P in "x" | "y"]: number};
type T2 = { [P in "x" | "y"]: P};
type T3 = { [P in "a" | "b"]: Item[P]};
type T4 = { [P in keyof Exclude<Item, 'a'>]: Item[P]}