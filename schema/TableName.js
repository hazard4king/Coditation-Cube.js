cube(`TableName`, {
  sql: `SELECT * FROM public.table_name`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {

    price: {
      sql: `price`,
      type: `count`
    },
    
    stock: {
      sql: `stock`,
      type: `count`
    },
    
    revenue: {
      sql: `revenue`,
      type: `count`
    },
    date: {
      sql: `date`,
      type: `count`
    },
    
    sales: {
      sql: `sales`,
      type: `count`
    }

  },
  
  dimensions: {
    product_id: {
      type: `string`,
      sql: `product_id`,
    },
    store_id: {
      type: `string`,
      sql: `store_id`,
    }
  },
  
  dataSource: `default`
});
