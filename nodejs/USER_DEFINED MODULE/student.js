// var std_id = "12345";
// var std_name = "xyz";
// var std_dept = "cse";
// //by default sb private 
// var getname = function(){
//     return std_name;
// }
// module.exports.id = std_id;
// module.exports.name = std_name;
// module.exports.dept = std_dept;
// // module.exports.getname = getname;

// module.exports = {
//     name : 'hridoy',
//     id : '17-33814-1',
//     dept : 'cs',
//     getName : function(){
//         return this.id;
//     }
// }
// var car = {
//     name : 'kuddys',
//     id   : '17-33',
//     dept : 'CSE',
// }


module.exports = function(){
    return{
        name : 'hridoy',
        id : '17-33814-1',
        dept : 'cs',
        getName : function(){
            return this.id;
        }
    }
}


