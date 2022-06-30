// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AddTicket2 } = initSchema(schema);

export {
  AddTicket2
};