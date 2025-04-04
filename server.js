/* import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('Hello, world!')

    return response.end()
})

server.listen(3333) */

import { fastify } from 'fastify'
import { DataBaseMemory } from './database-memory.js'


const server = fastify()
const database = new DataBaseMemory

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

server.get('/videos', (request, reply) => {
    const search = request.query.search
    console.log(search)
    const videos = database.list(search)
    return videos
})

server.put('/videos/:id', (request, reply) => {
    const id = request.params.id
    const { title, description, duration } = request.body

    const video = database.update(id, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const id = request.params.id
    database.delete(id)
    return reply.status(204).send()
})

server.listen({
    port: 3333
})