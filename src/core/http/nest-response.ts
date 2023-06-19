export class NestResponse {
  status: number;
  headers: object;
  body: object;

  constructor(resposta: NestResponse) {
    Object.assign(this, resposta);
  }
}
