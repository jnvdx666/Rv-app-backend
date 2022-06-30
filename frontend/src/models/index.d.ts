import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AddTicket2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AddTicket2 {
  readonly id: string;
  readonly nombre?: string | null;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AddTicket2, AddTicket2MetaData>);
  static copyOf(source: AddTicket2, mutator: (draft: MutableModel<AddTicket2, AddTicket2MetaData>) => MutableModel<AddTicket2, AddTicket2MetaData> | void): AddTicket2;
}