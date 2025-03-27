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
  update = async (id, titulo, conteudo, favorita, cor, atualizadaEm) => {
    try {
      const tarefa = await prisma.task.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
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
      const tarefaDeletada = await prisma.task.delete({
        where: { id },
      });

      return tarefaDeletada
    }catch (error){
      console.log("Erro ao deletar tarefa", error);
      throw error;
    }
  };
}
export default new NotaModel();