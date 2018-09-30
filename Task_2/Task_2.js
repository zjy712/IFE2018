
// 餐厅类
function Restaurant(money, seat_count, clerk_list) {
    this.money = money;
    this.seat_count = seat_count;
    this.clerk_list = clerk_list;
}
function Restaurant(obj) {
    this.money = obj.money;
    this.seat_count = obj.seat_count;
    this.clerk_list = obj.clerk_list;
}
// 招聘
Restaurant.prototype.RecruitClerk = function (newclerk) {
    this.clerk_list.push(newclerk)
}
// 开除
Restaurant.prototype.FireClerk = function (clerk) {
    var index = this.clerk_list.indexOf(clerk);
    this.clerk_list.splice(index, 1);
}
// 职员类
function Clerk(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
Clerk.prototype.Work = function () {
    console.log('职员工作了');
}
// 服务员 继承于职员
function Waiter(name, salary) {
    Clerk.call(this, null, name, salary)  
}
Waiter.prototype = Object.create(Clerk.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.prototype.Work = function (x,chef) {
    console.log('服务员工作了');
    if (x) {
        console.log('记录客人点菜');
        return chef.Work(x)
    } else
        console.log('上菜');
}
// 厨师类
function Chef(name, salary) {
    Clerk.call(this, null, name, salary)
}
Chef.prototype = Object.create(Clerk.prototype);
Chef.prototype.constructor = Chef;
Chef.prototype.Work = function (x) {
    console.log('厨师工作完毕，他做的是'+x.name);
}
// 顾客类
function Client(){
    
}
Client.prototype.OrderDishe = function (caidan) {
    var index = Math.floor(Math.random() * caidan.length)
    console.log('他点了'+ caidan[index].name);
    return caidan[index];
}
// 菜类
function Dishe(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
}
// 延迟时间
function deleay() {
    setTimeout(function () {
        return true
    },3000)
}
// 菜单

var caidan = [
    {
        name: '宫保鸡丁',
        chengbeng: 15,
        price: 20,
        time: 4,
    },
    {
        name: '红烧肉',
        chengbeng: 20,
        price: 30,
        time: 5
    },
    {
        name: '火龙果',
        chengbeng: 10,
        price: 15,
        time: 4
    },
    {
        name: '青椒肉丝',
        chengbeng: 16,
        price: 25,
        time: 8
    }
]

// 顾客队列
function ClientQueue(){

}
ClientQueue.prototype.getNext = function () {
    console.log('来了一位顾客');
    return new Client();
}

var ifeRestaurant = new Restaurant({
    money: 1000000,
    seat_count: 20,
    clerk_list: []
})
var new_waiter = new Waiter('服务员A',3000);
var new_chef = new Chef('厨师A',6000);
ifeRestaurant.RecruitClerk(new_waiter);
ifeRestaurant.RecruitClerk(new_chef)


// 工作流程 2

$('#waiter').css({'right':0,'left':'10px'})