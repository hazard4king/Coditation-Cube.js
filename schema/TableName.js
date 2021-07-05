// cube(`TableName`, {
//   sql: `SELECT * FROM public.table_name`,
  
//   preAggregations: {
//     // Pre-Aggregations definitions go here
//     // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
//   },
  
 
// });

import { fetchtableSchema } from './fetchSchema';

asyncModule(async () => {
  const tableSchema = await fetchtableSchema();
  const tablename='TableName'
  cube(tablename, tableSchema);

});