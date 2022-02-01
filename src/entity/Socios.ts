import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Socios {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    photo: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    startDate: Date;
}
