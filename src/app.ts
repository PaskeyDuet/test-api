import { Request, Response } from 'express';
const database = require('./services/database');
const express = require('express');

const app = express();

app.get('/categories', async (req: Request, res: Response) => {
  try {
    const result = await database.pool.query(
      `SELECT p.id, p.name, p.description, p.price, p.currency, 
      p.quantity, p.active, p.created_date, p.updated_date,
    	(SELECT ROW_TO_JSON(category_obj) FROM(
		  SELECT id, name FROM category WHERE id = p.category_id
	) category_obj) AS category 
   FROM product p`,
    );
    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
});

app.listen(3000, () => console.log('SERVER IS ON'));
