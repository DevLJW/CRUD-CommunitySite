import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
  CreateDateColumn,
} from "typeorm";
import { ObjectType, Int, Field } from "@nestjs/graphql";
import { User } from "src/APIS/users/entities/user.entity";
import { FreeBoardComment } from "./FreeboardComment.entity";
@Entity() //  Board가 엔티티함수로 들어가 테이블로 만들어짐
@ObjectType() //그래프큐엘 명세서에 타입선언을 하기위한 데코레이터
export class FreeBoard {
  @PrimaryGeneratedColumn("increment") //유니크한 프라이머리키 만들기 increment는 1씩 증가하는 값 uuid는 유니크한 아이디
  @Field(() => Int) //Graphql 명세서용 타입
  number: number;
  @Column() //컬럼으로 만들기
  @Field(() => String)
  writer: string;
  @Column() //컬럼으로 만들기
  @Field(() => String)
  title: string;
  @Column() //컬럼으로 만들기
  @Field(() => String)
  content: string;
  @Column() //컬럼으로 만들기
  @Field(() => String)
  password: string;
  @Column("simple-array", { nullable: true }) // 컬럼속성(FileUrls를 기반으로 컬럼을 만든다.)
  @Field(() => [String], { nullable: true }) // FileUrls에 대한 Graphql 속성을 지정한다.
  FileUrls: string[];
  @ManyToOne(() => User)
  @Field(() => User) // 다대일
  user: User;
  @Column({ nullable: true }) //컬럼으로 만들기
  @Field(() => Int, { nullable: true })
  views: number;
  @DeleteDateColumn() //  소프트삭제 시간 기록을 위함
  deletedAt: Date;

  @CreateDateColumn() //  데이터 추가시 추가시간 자동 추가
  @Field(() => Date) // 다대일
  createdAt: Date;
}
