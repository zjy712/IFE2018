
// 餐厅类
function Restaurant(money,seat_count ,clerk_list) {
    this.money = money;
    this.seat_count = seat_count;
    this.clerk_list = clerk_list;
}
Restaurant.prototype.RecruitClerk = function(){

}
Restaurant.prototype.FireClerk = function  (){
    
}
// 职员类
function Clerk (id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Clerk.prototype.Work = function  (){
}
// 服务员类
function Waiter (){

}
Waiter.prototype.Work = function (x) {
    if(x instanceof Array){
    }
}
// 厨师类
function Chef (){

}
Chef.prototype,Work = function  (){
    
}
// 顾客类
function Client (){
    
}
Client.prototype.OrderDishe = function  (){
    
}
// 菜类
function Dishe (name,cost,price){
    this.name = name;
    this.cost = cost;
    this.price = price;
}