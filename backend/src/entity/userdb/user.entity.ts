import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usertable')
export class UserTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  twitter: string;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  created_at!: Date;
}
