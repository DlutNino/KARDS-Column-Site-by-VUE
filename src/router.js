import Vue from "vue";
import VueRouter from "vue-router";
import PartMenu from "@/components/PartMenu";
import CardAnalyze from "@/components/CardAnalyze";
import Deck from "@/components/Deck";
import Article from "@/components/Article";

Vue.use(VueRouter);

const routes = [
    { path: '/extra_draw',
        component: PartMenu,
        props: {
            link_list: [{router_link: 'extra_draw/convoy_hx_175', title: 'HX 175 护航队'},
                {router_link: 'extra_draw/enemy_spotted', title: '发现敌人'},
                {router_link: 'extra_draw/lurking_danger', title: '潜在危险'}],
        },
    },
    {   path: '/kredit_operation',
        component: PartMenu,
        props: {
            link_list: [{router_link: 'kredit_operation/the_war_machine', title: '战争机器'},
                {router_link: 'kredit_operation/carrier_cover', title: '航母掩护'},
                {router_link: 'kredit_operation/war_bonds', title: '战争债券'},
                {router_link: 'kredit_operation/332nd_engineer_regiment', title: '第332工兵团'},
                {router_link: 'kredit_operation/in_hour_of_need', title: '战争需要'},
                {router_link: 'kredit_operation/depth_charges', title: '深水炸弹'},
                {router_link: 'kredit_operation/c47_skytrain', title: 'C-47 空中列车'},],
        },
    },
    {
        path: '/counter_measure',
        component: PartMenu,
        props: {
            link_list: [{router_link: 'counter_measure/sniped', title: '阻击'},
                {router_link: 'counter_measure/air_defense', title: '防空'},
                {router_link: 'counter_measure/counter_strike', title: '反袭'}]
        }
    },
    {   path: '/extra_draw/convoy_hx_175',
        component: CardAnalyze,
        props: {
            img_link: require('../static/convoy_hx_175.png'),
            text_content: "最简单最基础的过牌，三费过2，等同于奥术智慧，是标杆类的卡牌. " +
                "看上去似乎3费过2，也就是3费手牌数+1，似乎很一般. 但是要注意，过牌和正常抽牌是有天壤之别的. " +
                "你可以永远相信HX 175 护航队. ",
        },
    },
    {   path: '/extra_draw/enemy_spotted',
        component: CardAnalyze,
        props: {
            img_link: require('../static/enemy_spotted.png'),
            text_content: "钓鱼执法，永远的神",
        }
    },
    {   path: '/extra_draw/lurking_danger',
        component: CardAnalyze,
        props: {
            img_link: require('../static/lurking_danger.png'),
            text_content: "在改版之后，潜在危险的可用性有所提升",
        }
    },
    {
        path: '/kredit_operation/the_war_machine',
        component: CardAnalyze,
        props: {
            img_link: require('../static/the_war_machine.png'),
            text_content: "2费跳1，无抉择无直接附加效果，如果无法配合军需营就无法立即兑现收益（地狱俯冲者？那是什么能吃吗），又不能像战争债券一样补牌，导致战争机器在后期极易成为鬼抽. " +
                "目前在盟美的跳费卡组中，大多数玩家不携带战争机器，而是用更加灵活的航母掩护代替，但是主美的跳费卡组我依然建议携带2~3张，对于节奏型打法甚至完全可以拉满. " +
                "原因在于，盟美跳费时，主国为苏、英均可以在2费时做出大量操作，如碰瓷兵、海鸥、镰刀、间谍、甜心、第一突击队（虽然这个相对少见一点）等，且盟国卡位紧张，无法留给战争机器. " +
                "但主美时，2费可做的操作少之又少，仅有盟军研发成果、好人寥寥等少数金银卡可以在2费打出，如果不使用巧克力人过渡，2费几乎是要空过的，因此战争机器可以补齐曲线，抓住节奏反先." +
                "当然，战争机器本身如果能在2费时上手，直接打出取得反先或扩大主动权的效果也非常不错，有时2跳4可以成为一局中控制节奏的基础. ",
        }
    },
    {
        path: '/kredit_operation/carrier_cover',
        component: CardAnalyze,
        props: {
            img_link: require('../static/carrier_cover.png'),
            text_content: "",
        }
    },
    {
        path: '/kredit_operation/war_bonds',
        component: CardAnalyze,
        props: {
            img_link: require('../static/war_bonds.png'),
            text_content: "",
        }
    },
    {
        path: '/kredit_operation/332nd_engineer_regiment',
        component: CardAnalyze,
        props: {
            img_link: require('../static/332nd_engineer_regiment.png'),
            text_content: "",
        }
    },
    {
        path: '/kredit_operation/in_hour_of_need',
        component: CardAnalyze,
        props: {
            img_link: require('../static/in_hour_of_need.png'),
            text_content: "",
        }
    },
    {
        path: '/kredit_operation/depth_charges',
        component: CardAnalyze,
        props: {
            img_link: require('../static/depth_charges.png'),
            text_content: "",
        }
    },
    {
        path: '/kredit_operation/c47_skytrain',
        component: CardAnalyze,
        props: {
            img_link: require('../static/c47_skytrain.png'),
            text_content: "",
        }
    },
    {
        path: '/counter_measure/sniped',
        component: CardAnalyze,
        props: {
            img_link: require('../static/sniped.png'),
            text_content: "",
        }
    },
    {
        path: '/counter_measure/air_defense',
        component: CardAnalyze,
        props: {
            img_link: require('../static/air_defense.png'),
            text_content: "",
        }
    },
    {
        path: '/counter_measure/counter_strike',
        component: CardAnalyze,
        props: {
            img_link: require('../static/counter_strike.png'),
            text_content: "",
        }
    },
    {
        path: '/soviet_britain_control',
        component: Deck,
        props: {
            title: '控制流苏-英',
            cards: [{num: 1, kredit: 1, name: '赤色黎明'}, {num: 3, kredit: 1, name: '血红的镰刀'},
                {num: 2, kredit: 1, name: '乌拉尔工厂'}, {num: 1, kredit: 1, name: '红色旗帜'},
                {num: 1, kredit: 1, name: '工兵第329营'}, {num: 1, kredit: 2, name: '间谍组织'},
                {num: 1, kredit: 2, name: '雅克-7'}, {num: 1, kredit: 2, name: '苏联英雄'},
                {num: 3, kredit: 2, name: '步兵第845团'}, {num: 2, kredit: 2, name: '伊-15 海鸥'},
                {num: 1, kredit: 3, name: '阅兵'}, {num: 2, kredit: 3, name: '混乱'},
                {num: 1, kredit: 3, name: 'T-28'}, {num: 2, kredit: 4, name: '以剑之名'},
                {num: 2, kredit: 4, name: 'T-60'}, {num: 1, kredit: 5, name: 'BP-43装甲列车'},
                {num: 1, kredit: 6, name: 'KV-1 1941'}, {num: 1, kredit: 6, name: '海军步兵第83旅'},
                {num: 1, kredit: 6, name: '游击队'}, {num: 1, kredit: 8, name: '拖拉机厂'},
                {num: 1, kredit: 9, name: '近卫步兵第272团'}, ],
            cards_ally: [{num: 1, kredit: 2, name: '国家消防局'}, {num: 2, kredit: 3, name: '空军力量'},
                        {num: 2, kredit: 4, name: '锡福斯高地人团'}, {num: 1, kredit: 4, name: '战争迷雾'},
                        {num: 2, kredit: 7, name: '地毯式轰炸'},]
        }
    },
    {
        path: '/article_01',
        component: Article,
        props: {
            title: '面向萌新的常见游戏理解误区',
            author: 'AndyEzreal#2467',
            content: [{text: "四月间，天气寒冷晴朗，钟敲了十三下。温斯顿史密斯为了要躲寒风，紧缩着脖子，很快地溜进了胜利大厦的玻璃门，不过动作不够迅速，没有能够防止一阵沙土跟着他刮进了门。" +
                    "门厅里有一股熬白菜和旧地席的气味。门厅的一头，有一张彩色的招贴画钉在墙上，在室内悬挂略为嫌大了一些。" +
                    "画的是一张很大的面孔，有一米多宽：这是一个大约四十五岁的男人的脸，留着浓密的黑胡子，面部线条粗犷英俊。温斯顿朝楼梯走去。用不着试电梯。即使最顺利的时候，电梯也是很少开的，现在又是白天停电。这是为了筹备举行仇恨周而实行节约。温斯顿的住所在七层楼上，他三十九岁，右脚脖子上患静脉曲张，因此爬得很慢，一路上休息了好几次。每上一层楼，正对着电梯门的墙上就有那幅画着很大脸庞的招贴画凝视着。这是属于这样的一类画，你不论走到哪里，画面中的眼光总是跟着你。下面的文字说明是：老大哥在看着你。"},
                {text: "--------------------------------测试排版，换行，留白，溢出-------------------------------------------------------"},
                {text: "反转了，我也是萌新捏"}],
        }
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return routerPush.call(this, location).catch(error => error)
}

export default router;
