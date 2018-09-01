export class Category {

    id: string;
    name: string;
    description: string;
    permittedUsers: string[];
    createdBy: string;

    constructor(id: string, name: string, description: string='', permittedUsers: string[], createdBy: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.permittedUsers = permittedUsers;
        this.createdBy = createdBy;
    }
}