export class Product {
  private _currentCover: File | null = null;

  private constructor(
    public readonly id: string,
    public name: string,
    public description: string,
    public address: string,
    public readonly imageCover: string,
    public readonly token?: string,
    public readonly allowAccess?: boolean
  ) {}

  clone() {
    return new Product(
      this.id,
      this.name,
      this.description,
      this.address,
      this.imageCover,
      this.token
    );
  }

  static create(props: CreationProps) {
    const product = new Product(
      crypto.randomUUID(),
      props.name,
      props.description,
      props.address,
      '',
      undefined,
      true
    );
    product.currentCover = props.cover;
    return product;
  }

  static hydrate(props: HydrateProps) {
    return new Product(
      props.id,
      props.name,
      props.description,
      props.address,
      props.imageCover,
      props.token,
      props.allowAccess
    );
  }

  update(props: UpdateProps) {
    this.name = props.name;
    this.address = props.address;
    this.description = props.description;
    this.currentCover = props.cover;
  }

  get currentCover() {
    return this._currentCover;
  }

  set currentCover(file: File | null) {
    this._currentCover = file;
  }
}

type CreationProps = {
  name: string;
  description: string;
  address: string;
  cover: File | null;
};

type HydrateProps = {
  id: string;
  imageCover: string;
  name: string;
  description: string;
  address: string;
  token?: string;
  allowAccess?: boolean;
};

type UpdateProps = CreationProps;
