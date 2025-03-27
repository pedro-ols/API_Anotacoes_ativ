import prisma from "../../prisma/client.js"

class NotaModel {

  getAll = async () => {
    return await prisma.nota.findMany()
  };

  getById = async (id) => {
    return await prisma.nota.findMany({
      where: { id }
    })
  }

  create = async ( titulo, conteudo, cor,) => {
    return await prisma.nota.create({
      data: {
        titulo,
        conteudo,
        cor, 
      },
    });
  };
  update = async (id, titulo, conteudo, cor) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          titulo, 
          conteudo,
          cor
        }
      })
      return(nota);

    } catch (error) {
      console.log("Error", error);
      throw error;
    };
  };
  setFavourite = async (id, favorita) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          favorita
        }
      })
      return(nota);

    } catch (error) {
      console.log("Error", error);
      throw error;
    };
  }

  delete = async (id) => {
    try{
      const notaDeletada = await prisma.nota.delete({
        where: { id },
      });

      return notaDeletada
    }catch (error){
      console.log("Erro ao deletar anotação", error);
      throw error;
    }
  };
}
export default new NotaModel();