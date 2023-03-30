import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ nullable: false })
	fullName: string;

	@Column({ nullable: false})
	email: string;

	@Column({ nullable: false })
	contact: string;

	@Column({default: true})
    isActive: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

    @OneToOne(() => Address, (address) => address.contact)
    @JoinColumn()
    address: Address;

	@ManyToOne(() => User, (user) => user.contacts)
	user: User;
}