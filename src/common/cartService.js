import wepy from 'wepy';
import store from './store';
import api from './api';
let cartService = {
    // 加入购物车
    addCart: (wid, sku_id, num) => {
        return new Promise((resolve, reject) => {
            let data = {
                    wid: wid,
                    sku_id: sku_id,
                    num: num
                },
                svid = store.get('svid');
            if (svid) {
                data.svid = svid;
            }
            data.from_uid = api.userInfo.is_agency ? api.userInfo.uid : api.from_uid;
            api.request({
                url: api.add_to_cart,
                data: data,
                method: 'POST'
            }).then(json => {
                resolve(json);
            }).catch(msg => {
                reject(msg);
            });
        });
    },
    // 删除购物车
    deleteCart: (cart_ids) => {
        return new Promise((resolve, reject) => {
            wx.showModal({
                content: '确认要删除该商品？',
                success: (res) => {
                    if (res.confirm) {
                        api.request({
                            url: api.delete_cart,
                            data: {
                                cart_ids: cart_ids
                            },
                            method: 'POST'
                        }).then(json => {
                            resolve(json);
                        });
                    }
                }
            });
        });
    },
    // 购物车下单
    confirmCart(cart_ids) {
        return new Promise((resolve, reject) => {
            api.request({
                url: api.cart_buy_woxiu,
                data: {
                    cart_ids: cart_ids
                },
                method: 'POST'
            }).then(json => {
                resolve(json);
            }).catch(msg => {
                reject(msg);
            });
        });
    },
};

export default cartService;