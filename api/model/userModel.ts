import sampleData from "./sampleData.json"

export type UserData = {
    login: string
    password: string
}

export default class User {
    constructor() { }

    static users:UserData[] = sampleData

    static findOne(login: string, password: string) {
        const user = User.users.find(user=> user.login === login && user.password === password);
        if (user) {console.log(user.login);return user.login}
        
        return null
    }
}