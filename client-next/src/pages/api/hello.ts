import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    return res.status(200).json({ message: 'Dice Game v2' });
}

export default handler;
