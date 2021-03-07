import { Router } from 'express';
import NaverController from './controllers/NaverController';
import ProjectController from './controllers/ProjectController';

const router = Router();

const naverController = new NaverController();
const projectController = new ProjectController();

router.post('/navers', naverController.store);
router.get('/navers', naverController.index);
router.get('/naver/:naver_id/projects', naverController.show);

router.post('/naver/:naver_id/projects', projectController.store);
router.get('/project/:project_id/navers', projectController.show);
router.get('/projects', projectController.index);

export { router };