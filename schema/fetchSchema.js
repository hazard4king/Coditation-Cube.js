export const fetchtableSchema = async () => {
    return Promise.resolve({
      sql: () => `SELECT * FROM public.table_name`,
      
  measures: {
    price: {
      sql: () =>`price`,
      type: `count`
    },
    
    stock: {
        sql: () =>`stock`,
      type: `count`
    },
    
    revenue: {
        sql: ()=> `revenue`,
      type: `count`,
    },
    date: {
        sql: ()=>  `date`,
      type: `count`,
    },
    
    sales: {
        sql: ()=> `sales`,
      type: `count`
    }
  },
  
  dimensions: {
    product_id: {
        sql: ()=> `product_id`,
      type: `string`
    },
    store_id: {
        sql: ()=> `store_id`,
      type: `string`
    }
  }
      
    });
  };
