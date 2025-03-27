import prisma from "../../prisma/client.js"

class NotaModel {

  getAll = async () => {
    return await prisma.task.findMany()
  };

  create = async ( titulo, conteudo, favorita, cor, criadaEm) => {
    return await prisma.task.create({
      data: {
        titulo,
        conteudo,
        favorita,
        cor, 
        criadaEm,
      },
    });
  };
  update = async (id, titulo, conteudo, favorita, cor, atualizadaEm) => {
    try {
      const tarefa = await prisma.task.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
          descricao,
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