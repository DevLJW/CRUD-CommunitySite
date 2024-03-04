import { Module } from "@nestjs/common";
import { FreeBoardsResolver } from "./FreeBoards.resolver";
import { FreeBoardsService } from "./FreeBoards.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FreeBoard } from "./entities/Freeboard.entity";
import { User } from "../users/entities/user.entity";
import { FreeBoardComment } from "./entities/FreeboardComment.entity";

@Module({
  imports: [TypeOrmModule.forFeature([FreeBoard, User, FreeBoardComment])],
  providers: [FreeBoardsResolver, FreeBoardsService],
})
export class FreeBoardsModule {}
