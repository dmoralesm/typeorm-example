/*
https://codeburst.io/typeorm-by-example-part-1-6d6da04f9f23
https://medium.com/swlh/typeorm-getting-started-2ff9d0a99015
https://www.youtube.com/watch?v=xt6etYGbPpo
*/

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Todo from './entity/Todo';
import ORMConfig from './ormconfig';

console.log('hello ts!');

async function add() {
    const connection = await createConnection(ORMConfig);
    // await createConnection(ORMConfig);

    /* 
    const todo = new Todo();
    todo.name = 'A Todo';
    await todo.save();
    */

    const todo = await Todo.create({
        name: 'A Todo Create!'
    }).save();
    

    console.log(todo);

    connection.close();
    // await connection.close();
}

add();
