import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

interface User {
    name: string
    email: string;
    password: string;
    classId: string;
}

const prisma = new PrismaClient({
    log: ['query']
})

export async function createUser(request: Request, response: Response) {

    const { name, email, password, classId }: User = request.body

    const userExists = await prisma.users.findFirst({
        where: {
            email: email
        }
    })

    if (!userExists) {
        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                password,
                classId,
            },
        })

        response.status(201).json(newUser);
    } else {
        response.status(409).json({ error: "E-mail already registered" });
    }
}

export async function login(request: Request, response: Response) {
    const { name, email, password, classId }: User = request.body;

    const userExists = await prisma.users.findFirst({
        where: {
            email: email,
            password: password,
        }
    })

    if (!userExists) {
        response.status(404).json({ error: "User does not exist or data is incorrect" })
    } else {
        response.status(200).json(userExists);
    }
}

// fazer tratamento de erros: não pode colocar um video ou um user em uma classe que não existe