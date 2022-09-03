export class Menu {
  private _id!: number;
  private _url!: string;
  private _displayName!: string;
  private _icon!: string;
  private _renderer!: Function;
  private _children!: Menu[];


  constructor() {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get renderer(): Function {
    return this._renderer;
  }

  set renderer(value: Function) {
    this._renderer = value;
  }

  get children(): Menu[] {
    return this._children;
  }

  set children(value: Menu[]) {
    this._children = value;
  }
}
