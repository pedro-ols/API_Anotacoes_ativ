import notaModel from "../models/notaModel.js";

class NotaController {
  getAll = async (req, res) => {
    try {
      const notas = await notaModel.getAll();
      res.json(notas);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao buscar anotações." })
    }
  };

  create = async (req, res) => {
    const { titulo, conteudo, cor } = req.body;
    try {
      if (!titulo) {
        return res.status(400).json({ erro: "Insira um título para a anotação" });
      } else if(!conteudo){
        return res.status(400).json({ erro: "Insira um conteúdo válido para a anotação"})
      }
      const novaNota = tarefaModel.create(titulo, conteudo, cor);
      res.status(201).json(novaNota);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao criar anotação." })
    }
  };

  update = async (req, res) => {
    const { id } = req.params
    const { concluida, descricao } = req.body;

    try {
      const tarefaAtualizada = await tarefaModel.update(Number(id), concluida, descricao);

      if (!tarefaAtualizada) {
        return res.status(404).json({ erro: "Tarefa não encontrada!" })
      }

      res.json(tarefaAtualizada);
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao atualizar tarefa" })
    }
  };
  
  delete = async (req, res) => {
    const { id } = req.params

    try {
      const sucesso = await tarefaModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada!" })
      }

      res.status(200).send({ message: "Tarefa deletada com sucesso"})
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao deletar tarefa" })
    }
  };
}
export default new NotaController();
