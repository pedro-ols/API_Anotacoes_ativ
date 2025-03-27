import prisma from "../../prisma/client.js"

class NotaModel {

  getAll = async () => {
    return await prisma.nota.findMany()
  };

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
      const tarefa = await prisma.nota.update({
        where: { id },
        data: {
          titulo, 
          conteudo,
          cor
        }
      })
      return(tarefa);

    } catch (error) {
      console.log("Error", error);
      throw error;
    };
  };

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