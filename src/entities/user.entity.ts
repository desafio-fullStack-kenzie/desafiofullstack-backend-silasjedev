import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeUpdate,
    BeforeInsert,
    JoinColumn,
    OneToOne,
    OneToMany,
} from "typeorm";

import {getRounds, hashSync} from "bcryptjs";
import {Image} from "./image.entity"
import {Contact} from "./contact.entity"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    fullName: string;

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false})
    contact: string;

    @Column({default: true})
    isActive: boolean;

    @Column({ default: false })
	isAdmin: boolean;

    @CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact;

    @OneToOne(() => Image)
    @JoinColumn()
    image: Image;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        const isEncrypted = getRounds(this.password);
        if(!isEncrypted){
            this.password = hashSync(this.password, 10);
        };
    };
};