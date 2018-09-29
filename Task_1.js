
// 餐厅类
function Restaurant(money,seat_count ,clerk_list) {
    this.money = money;
    this.seat_count = seat_count;
    this.clerk_list = clerk_list;
}
function Restaurant(obj){
    this.money = obj.money;
    this.seat_count = obj.seat_count;
    this.clerk_list = obj.clerk_list;
}
// 招聘
Restaurant.prototype.RecruitClerk = function(newclerk){
    this.clerk_list.push(newclerk)
}
// 开除
Restaurant.prototype.FireClerk = function  (clerk){
    var index = this.clerk_list.indexOf(clerk);
    this.clerk_list.splice(index,1);
}
// 职员类
function Clerk (id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Clerk.prototype.Work = function  (){
    console.log('职员工作了');
}
// 服务员 继承于职员
function Waiter(name, salary) {
    Clerk.call(thia,null,name,salary)
}
Waiter.prototype = Object.create(Clerk.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.Work = function (x) {
    console.log('服务员工作了');
    if(x instanceof Array){
        console.log('服务员记录客人点菜');
    }
    console.log('服务员上菜');
    
}
// 厨师类
function Chef (name,salary){
    Clerk.call(this,null,name,salary)
}
Chef.prototype = Object.create(Clerk.prototype);
Chef.prototype.constructor = Chef;
Chef.prototype.Work = function (x) {
    console.log('厨师工作了');
    
}
// 顾客类
function Client (){
    
}
Client.prototype.OrderDishe = function  (){
    console.log('顾客点餐');
}
// 菜类
function Dishe (name,cost,price){
    this.name = name;
    this.cost = cost;
    this.price = price;
}