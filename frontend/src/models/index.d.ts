import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DiscotecasMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddticketMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Discotecas {
  readonly id: string;
  readonly nombre?: string;
  readonly foto?: string;
  readonly estado?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Discotecas, DiscotecasMetaData>);
  static copyOf(source: Discotecas, mutator: (draft: MutableModel<Discotecas, DiscotecasMetaData>) => MutableModel<Discotecas, DiscotecasMetaData> | void): Discotecas;
}

export declare class Addticket {
  readonly id: string;
  readonly titulo?: string;
  readonly discoteca?: string;
  readonly ciudad?: string;
  readonly dia?: string;
  readonly mes?: string;
  readonly precio?: number;
  readonly instagram?: string;
  readonly n_tel_comp?: string;
  readonly n_tel_vend?: string;
  readonly estado?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Addticket, AddticketMetaData>);
  static copyOf(source: Addticket, mutator: (draft: MutableModel<Addticket, AddticketMetaData>) => MutableModel<Addticket, AddticketMetaData> | void): Addticket;
}