export class BreedingContract {
  filePath: string;
};

export type CreateBreedingContractResponse = {
  breedingContract: BreedingContract;
};

export type CreateBreedingContractStringRequest = {
  breedingContractString: string;
};

export type CreateBreedingContractStringResponse = {
  filePath: string;
};

export type GetBreedingContractByIdRequest = {
  id: number;
};

export type GetBreedingContractByIdResponse = {
  fileBytes: Uint8Array;
  filePath: string;
};

export type GetBreedingContractsByHorseIdRequest = {
  horseId: number;
};

export type GetBreedingContractsByHorseIdResponse = {
  fileBytesList: Uint8Array[];
  filePathsList: string[];
};

export type GetBreedingContractImageByHorseIdRequest = {
  horseId: number;
  authToken: string;
  imageIndex: number;
};

export type GetBreedingContractImagesByHorseIdUrlRequest = {
  horseId: number;
  authToken: string;
};

export type GetBreedingContractImageUrlsByHorseIdRequest = {
  horseId: number;
  authToken: string;
};

export type GetBreedingContractImageUrlsByHorseIdResponse = {
  imageUrls: string[];
};

export type GetBreedingContractPathsByHorseIdRequest = {
  horseId: number;
};

export type GetBreedingContractPathsByHorseIdResponse = {
  breedingContractPathsList: string[];
};

export class HorseBreedingContractPaths {
  horseId: number;
  paths: string[];
};


