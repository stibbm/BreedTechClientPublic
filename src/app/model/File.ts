export class File {
  id: number;
  s3FilePath: string;
  s3BucketName: string;
  parentId: number;
  parentType: string;
};

export type GetFileRequest = {
  fileId: number;
};

export type GetFileResponse = {
  file: File;
};

export type GetFilesByParentRequest = {
  parentId: number;
  parentType: string;
};

export type GetFilesByParentResponse = {
  filesList: File[];
};


