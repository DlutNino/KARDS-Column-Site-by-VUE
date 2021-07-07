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

        }
    },
    {
        path: '/article_01',
        component: Article,
        props: {
            title: '面向萌新的常见游戏理解误区',
            author: 'AndyEzreal#2467',
            content: "",
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
