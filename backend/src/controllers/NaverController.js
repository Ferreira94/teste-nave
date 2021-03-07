import Naver from '../models/Naver';

export default class NaverController {
  async store(request, response) {
    const { name, birthdate, admission_date, job_role } = request.body;

   const naver = await Naver.create({ name, birthdate, admission_date, job_role });

   return response.json(naver);
  }

  async index(request, response) {
    const navers = await Naver.findAll();

    return response.json(navers)
  }

  async show(request, response) {
    const { naver_id } = request.params;

    const naver = await Naver.findByPk(naver_id, {
      include: { association: 'projects', attributes: ['id', 'name'], through: { attributes: [] } }
    });

    return response.json(naver);
  }
}