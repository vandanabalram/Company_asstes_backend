module.exports = function(app) {
    const todoList = require('../Controller/Controller');
     const isAuth=require('../Middleware/isAuth')
    
   
     app.route('/Singup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .post(todoList.userSignin,isAuth);
    
    app.route('/Singup/:SingupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    };