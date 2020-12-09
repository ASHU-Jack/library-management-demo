export class UserBorrowed{
    id: number = 0;
    bookIdArray: number[] = [];
    constructor(userId: number, bookIdArray: number[]){
        this.id = userId;
        this.bookIdArray = bookIdArray;
    }
}