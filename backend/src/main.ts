import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "./commons/filter/http-exception.filter";
import { graphqlUploadExpress } from "graphql-upload";
import cookieParser from "cookie-parser";
const bodyParser = require("body-parser");
const coolsms = require("coolsms-node-sdk").default;

const messageService = new coolsms(
  "ENTER_YOUR_API_KEY",
  "ENTER_YOUR_API_SECRET"
);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter()); //에러가 발생시 해당파일의 코드실행

  app.use(graphqlUploadExpress());
  app.enableCors({ origin: "http://localhost:3000", credentials: true });

  // app.use(bodyParser.json({ extended: false }));
  // app.use(bodyParser.urlencoded({ extended: false }));

  await app.listen(4000);
}
bootstrap();
