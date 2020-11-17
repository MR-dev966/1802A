// 类型
// 基本类型 number, boolean, string, undefined, null, symbol, any, void
let a;

a = '';


// 复杂数据类型 object, array, enum, truple, interface, function, type, unknow
// let b: Array<string | number> = ['']
let b: (string|number) [] = ['', 1]

type cc =  {
    key1: number,
    key2?: number,
    readonly key3: number
}
let c:cc = {
    key1: 100,
    key3: 500
}

// c.key3 = 600;

enum Direction {
    'up' = 100,
    'down' = 101,
    'left' = 200,
    'right' = 'hello world'
}

let d: Direction = Direction.right;

let e: [number, string, boolean, number []] = [1, '', false, []];

interface IProps {
    callback: ()=>{}
}

function sum<T, R>(a: T, b: R): [T, R]{
    return [a, b]
}

sum<number, string>(1, '');

function swap<T, R>([a, b]: [T, R]): [R, T]{
    return [b, a]
}

swap([1, '']);

function swapArray<T extends Array<Y>, R extends Array<Z>, Y, Z>(a: T , b: R): [Z, Y]{
    return [b[0], a[0]]
}

swapArray([''], [123])

let f: any;
f[1], f.object, f()

let g:unknown;
// g[1], g.object, g()

g = 100;
g = 'string';

// 操作，& 交叉类型, | 联合类型
let h: [] | {} = []

interface IDispatchProps{
    a: ()=>void
}
interface IStateProps{
    b: number
}
let i: IDispatchProps&IStateProps = {
    a: ()=>{},
    b: 100
};

// 类型推断 as
function infer(a: {a:number}, b: {b:number}){
    return a.a+b.b;
}

infer('' as unknown as {a:number}, {} as {b:number});


interface PropsType{
    handleClick: (e: any)=>void, // 函数声明
    [propName: string]: string|Function // 索引类型
}

let j: PropsType = {
    handleClick: ()=>{},
    0: '100',
    'chenmanjie': ()=>{}
}