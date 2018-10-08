
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
Waiter.prototype.Work = function (x, chef) {
    console.log('服务员工作了');
    if (x) {
        if (x == 1) {
            $('#waiter').css('transform', 'translateX(140%)');
            console.log('等待客人点菜');
            $('#waiter>p').html('<p>当前状态：等待客人点菜</p>');
        } else {
            $('#waiter>p').html('<p>当前状态：记录客人点菜</p>');
            return chef.Work(x)
        }
    } else {
        $('#waiter').css('transform', 'translateX(-140%)');
        $('#waiter>p').html('<p>当前状态：取菜</p>');
        console.log('上菜');
        $('#waiter').css('transform', 'translateX(140%)');
        $('#waiter>p').html('<p>当前状态：上菜</p>');
    }
}
// 厨师类
function Chef(name, salary) {
    Clerk.call(this, null, name, salary)
}
Chef.prototype = Object.create(Clerk.prototype);
Chef.prototype.constructor = Chef;
Chef.prototype.Work = function (x) {
    console.log('厨师工作完毕，他做的是' + x.name);
}
// 顾客类
function Client() {

}
Client.prototype.OrderDishe = function (caidan) {
    console.log('点菜');

    $('#Client>p').html('<p>当前状态：点菜</p>');
    var index = Math.floor(Math.random() * caidan.length)
    sleep(3000);
    console.log('他点了' + caidan[index].name);
    $('#Client>p').html('<p>当前状态：他点了' + caidan[index].name + '</p>');
    sleep(500)
    return caidan[index];
}
// 菜类
function Dishe(name, cost, price) {
    this.name = name;
    this.cost = cost;
    this.price = price;
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
function ClientQueue() {

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
var new_waiter = new Waiter('服务员A', 3000);
var new_chef = new Chef('厨师A', 6000);
ifeRestaurant.RecruitClerk(new_waiter);
ifeRestaurant.RecruitClerk(new_chef)

// 延迟函数
function sleep12(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
};

// 工作流程 2
var ClientQueue = new ClientQueue();
var ClientA = ClientQueue.getNext();
// $('input').click(function (e) {
//     e.preventDefault();
//     // var hasclient = 1;
//     // new_waiter.Work(hasclient);

//     // var dish = ClientA.OrderDishe(caidan);

//     // new_waiter.Work(dish,new_chef);
//     // // new_waiter.Work()
//     // $('#waiter').css('transform', 'translateX(-140%)');
//     // $('#waiter>p').html('<p>当前状态：取菜</p>');
//     console.log(1);
//     document.getElementById('waiter').children[1].innerHTML() = '<p>当前状态：取菜</p>'
//     // console.log('上菜');
//     sleep(4000)
//     // $('#waiter').css('transform', 'translateX(140%)');
//     console.log(2);
    
//     // $('#waiter>p').html('<p>当前状态：上菜</p>');
// });
var btn = document.getElementsByTagName('input')[0];
var wa = document.getElementById('waiter');
    btn.onclick = function () {
    wa.style.backgroundColor = 'red'
    sleep12(3000);
    
    wa.style.backgroundColor = 'blue'
}
console.log(document.getElementsByTagName('input'));
