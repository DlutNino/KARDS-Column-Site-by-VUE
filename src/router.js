import Vue from "vue";
import VueRouter from "vue-router";
import PartMenu from "@/components/PartMenu";
import CardAnalyze from "@/components/CardAnalyze";

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