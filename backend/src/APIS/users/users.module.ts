import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import CoolMessageService from "coolsms-node-sdk";

@Module({
  imports: [TypeOrmModule.forFeature([User]), CoolMessageService],
  providers: [UsersResolver, UsersService, CoolMessageService],
  exports: [UsersService], //모듈 내부에 가지고 있는 UsersService내보내기
})
export class UsersModule {}
