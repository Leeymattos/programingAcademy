import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

interface Video {
    url: string;
    title: string;
    classId: string;
}

const prisma = new PrismaClient({
    log: ['query']
});

export async function createVideo(request: Request, response: Response) {
    const { url, title, classId }: Video = request.body;

    const videoExists = await prisma.videos.findFirst({
        where: {
            url: url
        },
    });


    if (!videoExists) {

        const newVideo = await prisma.videos.create({
            data: {
                url,
                title,
                classId
            }
        });
        return response.status(201).json(newVideo);
    } else {
        return response.status(409).json({ error: "Video already exists" })
    }


}

export async function ListVideos(request: Request, response: Response) {
    const classId = request.headers.authorization;

    try {
        const videos = await prisma.videos.findMany({
            where: {
                classId: classId,
            }
        });

        response.status(200).json(videos);
    } catch (error) {
        console.log(error);
    }

}

// fazer tratamento de erros: não pode colocar um video ou um user em uma classe que não existe