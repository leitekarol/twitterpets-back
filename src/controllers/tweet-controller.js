
import { prisma } from "../helpers/utils.js";

export const createTweet = async (req, rep) => {
    try {
        const { body } = req.body
        const { id } = req.user
        console.log(body);
        console.log(id);

        const tweetCreated = await prisma.tweet.create({
          data: {
            body,
            user: { connect: { id: Number(id) } }
          },
        });
      
        return rep.send(tweetCreated).status(200);
      } catch (error) {
        rep.status(500).send({error: `Não possível criar o tweet.`});
      }
    };


    export const getAllTweet = async (req, rep) => {
      const { take, skip} = req.query;
      let data={ orderBy: {id: "desc"}};
      if (take) data.take = Number(take);
      if (skip) data.skip = Number(skip);

        try {
            const listweets = await prisma.tweet.findMany(data);
            return rep.send(listweets).status(200);
        } catch (error) {
          rep.status(500).send({error: `Não possível listar os tweets.`});
        }
      };

   export const deleteTweet = async (req, rep) => {
       try {
           const {id} = req.params
           const tweetDeleted = await prisma.tweet.delete({
               where: { id: Number(id)}
           })
           return rep.send(tweetDeleted).status(200);
       } catch (error) {
        rep.status(500).send({error: `Não possível deletar o tweet.`});
       }
   };

   export const listUserTweet = async (req, rep) => {
       try {
           const { id } = req.params
           const userTweet = await prisma.tweet.findMany({
               where:{  user_id: Number(id)}
           })
           return rep.send(userTweet).status(200);
       } catch (error) {
        rep.status(500).send({error: `Não possível listar os tweets deste usuário.`});
       }
   };