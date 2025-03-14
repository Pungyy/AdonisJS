/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '#controllers/posts_controller'
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.get('/posts',[PostsController, 'render'])
