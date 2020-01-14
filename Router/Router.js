module.exports = function(app) {
    const todoList = require('../Controller/Controller');
    const desktop = require('../Controller/DesktopController');
    const laptop = require('../Controller/LaptopController');
    // const miscellaneous = require('../Controller/MiscellaneousController');
    const miscellaneousdesktop = require('../Controller/MiscellaneousDesktopController');
    const isAuth=require('../Middleware/isAuth')
    
   
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .post(todoList.userSignin);
    
    app.route('/Singup/:SingupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

   

    app.route('/Desktop')
    .get(desktop.get_a_data)
    .post(desktop.update_a_task) 
    app.route('/delete/:id')
    .delete(desktop.delete_a_task )
    app.route('/Desktop/:Desktopid')
    .put(desktop.update_a_task)

    
    app.route('/Laptop')
    .get(laptop.get_a_data)
    .post(laptop.update_a_task)  
    app.route('/delete1/:id')
    .delete(laptop.delete_a_task )
    app.route('/Laptop/:Laptopid')
    .put(laptop.update_a_task)

    app.route('/MiscellaneousDesktop')
    .get(laptop.get_a_data)
    .post(laptop.update_a_task)  
    app.route('/delete1/:id')
    .delete(laptop.delete_a_task )
    app.route('/Miscellaneous/:Miscellaneousid')
    .put(laptop.update_a_task)


}


    