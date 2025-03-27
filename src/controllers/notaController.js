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

  getById = async (req, res) => {
    const { id } = req.params
    
    try {
      const nota = await notaModel.getById(parseInt(id));

      if (!nota) {
        return res.status(404).json({ erro: "Anotação não encontrada!" })
      }
      res.json(nota)
    } catch (error){
      console.log(error);
      res.status(500).json({ erro: "Erro ao buscar anotação"})
    }
  }

  create = async (req, res) => {
    const { titulo, conteudo, cor } = req.body;
    try {
      if (!titulo) {
        return res.status(400).json({ erro: "Insira um título para a anotação" });
      } else if(!conteudo){
        return res.status(400).json({ erro: "Insira um conteúdo válido para a anotação"})
      }
      const novaNota = notaModel.create(titulo, conteudo, cor);
      res.status(201).json(novaNota);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao criar anotação." })
    }
  };

  update = async (req, res) => {
    const { id } = req.params
    const { titulo, conteudo, cor } = req.body;

    try {
      const notaAtualizada = await notaModel.update(Number(id), titulo, conteudo, cor);

      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Anotação não encontrada!" })
      }

      res.json(notaAtualizada);
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao atualizar anotação" })
    }
  };

  update = async (req, res) => {
    const { id } = req.params
    const { titulo, conteudo, cor } = req.body;

    try {
      const notaAtualizada = await notaModel.update(Number(id), titulo, conteudo, cor);

      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Anotação não encontrada!" })
      }

      res.json(notaAtualizada);
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao atualizar anotação" })
    }
  };
  
  delete = async (req, res) => {
    const { id } = req.params

    try {
      const sucesso = await notaModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Anotação não encontrada!" })
      }

      res.status(200).send({ message: "Anotação deletada com sucesso"})
    } catch (error) {
      console.log(error)
      res.status(500).json({ erro: "Erro ao deletar anotação" })
    }
  };
}
export default new NotaController();
