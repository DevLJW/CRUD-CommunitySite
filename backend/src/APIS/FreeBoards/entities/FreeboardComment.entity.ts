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
import { FreeBoard } from "./Freeboard.entity";
@Entity() //  Board가 엔티티함수로 들어가 테이블로 만들어짐
@ObjectType() //그래프큐엘 명세서에 타입선언을 하기위한 데코레이터
export class FreeBoardComment {
  @PrimaryGeneratedColumn("increment") //유니크한 프라이머리키 만들기 increment는 1씩 증가하는 값 uuid는 유니크한 아이디
  @Field(() => Int) //Graphql 명세서용 타입
  number: number;
  @Column() //컬럼으로 만들기
  @Field(() => String)
  writer: string;

  @Column() //컬럼으로 만들기
  @Field(() => String)
  content: string;

  @ManyToOne(() => User)
  @Field(() => User) // 다대일
  user: User;

  @DeleteDateColumn() //  소프트삭제 시간 기록을 위함
  @Field(() => Date, { nullable: true }) // 다대일(프론트에서 리턴 받을때 널값이여도됨 )
  deletedAt: Date;

  @CreateDateColumn() //  데이터 추가시 추가시간 자동 추가
  @Field(() => Date) // 다대일
  createdAt: Date;

  @ManyToOne(() => FreeBoard)
  // @Field(() => FreeBoard) // FileUrls에 대한 Graphql 속성을 지정한다.
  FreeBoard: FreeBoard;

  //   @ManyToOne(() => FreeBoard)
  //   @Field(() => FreeBoard) // 다대일
  //   BoardId: FreeBoard;
}
