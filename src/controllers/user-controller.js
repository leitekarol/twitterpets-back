import { prisma } from "../helpers/utils.js";

export const index = async (req, rep) => {
  try {
    let users = await prisma.user.findMany({
      select: { email: true },
    });
    return rep.send({ data: { users } });
  } catch (error) {
    console.error("users", error);
    res.status(500).send({ error: `Cannot fetch users` });
  }
};

export const getUser = async (req, rep) => {
  try {
    const {id} = req.params
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    return rep.send(user);
  } catch (error) {
    console.error("users", error);
    res.status(500).send({ error: `Não foi possível encontrar o usuário!` });
  }
};

export const updateUser = async (req, rep) => {
  try {   
    const {id} = req.params
    const {name, username, email} = req.body;
    const user = await prisma.user.update({ 
      where: { id: Number(id) },
    data: {
      name,
      username,
      email,
      user: {connect:{id: Number(id)}},
    }});
    return rep.send(user);
  } catch (error) {
    console.error("users", error);
    rep.status(500).send({ error: `Não foi possível encontrar o usuário!` });
  }
};
