import Project from '../models/Project';
import Naver from '../models/Naver';

export default class ProjectController {
  async store(request, response) {
    const { naver_id } = request.params;
    const { name } = request.body;

    const naver = await Naver.findByPk(naver_id);

    if(!naver) {
      return response.status(400).json({ error: 'Naver not found' });
    }

    const [ project ] = await Project.findOrCreate({
      where: { name }
    });

    await naver.addProject(project);

    return response.json(project);
  }

  async index(request, response) {
    const projects = await Project.findAll();

    return response.json(projects)
  }

  async show(request, response) {
    const { project_id } = request.params;

    console.log(project_id)

    const project = await Project.findByPk(project_id, {
      include: { association: 'navers', attributes: ['id', 'name', 'birthdate', 'admission_date', 'job_role'], through: { attributes: [] } }
    });

    console.log(project)

    return response.json(project);
  }
}