import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';
//import { sequelize } from '../instances/pg';
import { Op } from 'sequelize';
import { User } from '../models/User';
import { stringify } from 'querystring';


export const home = async (req: Request, res: Response) => {

    let users = await User.findAll({
        attributes: ['name', 'age']
    });

    let query = await User.findAll();

    let showUsers = await User.findAll({
        attributes: ['name', 'age']
    });

    res.render('pages/home', {
        users
    });
};


export const CreateNewUser = async (req:Request, res: Response) => {
    let newUserName: string = req.body.name;
    let newUserAge: number = parseInt(req.body.age);

    if(newUserName) {
        let firstLetterUpperCase = newUserName[0].toUpperCase();        
        const newUser = User.build({
            name: firstLetterUpperCase + newUserName.slice(1),
            age: newUserAge
        });
        await newUser.save();                
    }
    res.redirect('/');
}