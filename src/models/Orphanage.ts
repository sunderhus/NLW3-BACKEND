import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./Image";

@Entity("orphanages")
export default class Orphanage {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  // para cada orfanato temos uma ou várias imagens.

  // 1 param: Formato do objeto
  // 2 param: Na instancia desse objeto, qual o campo relaciona com o registro de orfanato
  // 3 param: configurações, onde podemos dizer o que fazer usando cascade, entre outras coisas.
  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "orphanage_id" })
  images: Image[];
}
