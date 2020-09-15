export class Game {
    constructor(
        public data:Array<number>,
        public dataSize:number
    ){ }
}
export class User{
    constructor(
        public name:string,
        public id:number,
        public score:number,
        public isDisabled:boolean,
        public scores:Array<number>
    ){ }
}
export class common{
    constructor(
        public winnerMessage:string,
    ){ }
}