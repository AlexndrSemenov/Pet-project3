import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {




  
  name: string;
}

export default function getById( req: NextApiRequest, res: NextApiResponse<Data> ) {
  res.statusCode = 200 ;
  res.setHeader('Content-Type', 'application/json');
  res.end(req.query.id);
}
