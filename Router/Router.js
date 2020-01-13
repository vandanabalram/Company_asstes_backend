module.exports = function(app) {
    const todoList = require('../Controller/Controller');
    const desktop = require('../Controller/DesktopController');
    const laptop = require('../Controller/LaptopController');
    const miscellaneous = require('../Controller/MiscellaneousController');
    const isAuth=require('../Middleware/isAuth')
    
   
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .get(todoList.userSignin);
    
    app.route('/Singup/:SingupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

   

    app.route('/Desktop')
    .get(desktop.get_a_data)
    .post(desktop.update_a_task) 
    app.route('/delete/:id')
    .delete(desktop.delete_a_task )
    .put(desktop.update_a_task)

    
    app.route('/Laptop')
    .get(laptop.get_a_data)
    .post(laptop.update_a_task)  
    app.route('/delete/:id')
    .delete(laptop.delete_a_task1 )
    .put(laptop.update_a_task)

    

    app.route('/Miscellaneous')
    .get(miscellaneous.get_a_data)
    .post(miscellaneous.update_a_task)  
    app.route('/delete/:id')
    .delete(miscellaneous.delete_a_task )
    .put(miscellaneous.update_a_task)

    
    };


    