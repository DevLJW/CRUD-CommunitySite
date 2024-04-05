import { Storage } from "@google-cloud/storage";
import { Injectable } from "@nestjs/common";
import { FileUpload } from "graphql-upload";

interface IFileServiceUpload {
  file: FileUpload;
}

@Injectable()
export class FilesService {
  async upload({ file }: IFileServiceUpload): Promise<string> {
    // 1. 파일을 클라우드 스토리지에 저장하는 로직

    const bucket = "exbackend-storage";

    //  1.1 스토리지 세팅하기
    const storage = new Storage({
      projectId: "backend-404303",
      keyFilename: "gcp-file-storage.json",
    }).bucket(bucket); //버킷 : 폴더

    //  1.2 스토리지에 파일 업로드하기
    //전체데이터가 다 들어올떄까지 기다린다(비동기방식)
    const results = await new Promise<string>((resolve, reject) => {
      file
        .createReadStream()
        .pipe(storage.file(file.filename).createWriteStream())
        .on("finish", () => {
          resolve(`${bucket}/${file.filename}`);
        })
        .on("error", () => {
          reject("실패");
          reject();
        });
    });

    console.log("파일 전송이 완료 되었습니다.");
    return results;
  }
}
