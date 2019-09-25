import { IAction } from "./IAction";

export abstract class ActionBase implements IAction {

  private _type: string;

  private _payload: any;

  public constructor(type: string, payload: any = null) {
    this._type = type;
    this._payload = payload;
  }

  getType(): string {
    return this._type;
  }

}
