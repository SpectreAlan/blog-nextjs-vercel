import prisma from '@/lib/prisma';

export default async (req, res) => {
    const result = await prisma.clipboard.create({
        data: req.body,
    });
    return res.json(result ? {ok: true} : null);
}
