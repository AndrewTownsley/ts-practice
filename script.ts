let user: string = 'andrew';
let member: boolean = true;
let userId: number = 123456

const names: string[] = user.split(' ')
const myValues: Array<number> = [1,2,3,4,5,6]

interface Person {
    first: string;
    last: string;
}

const newPerson: Person = {
    first: 'andrew',
    last: 'townsley'
}

const ids: Record<number, string> = {
    10: 'a',
    20: 'b',
}

ids[30] = 'c'