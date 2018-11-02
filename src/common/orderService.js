import api from './api';
let orderService = {
    payOrder(order_id, sn, from) {
        if (api.isClick) return;
        api.isClick = true;
        wx.showToast({
            title: '正在启动支付...',
            icon: 'loading',
            duration: 10000
        });
        let data = {
            order_id: order_id
        };
        from = from || '';
        if (from) {
            data.from = from;
        }
        return new Promise((resolve, reject) => {
            api.request({
                url: api.immediatelyPayment,
                data: data,
                method: 'POST'
            }).then(json => {
                let reqData = {
                    order_id: order_id,
                    sn: sn,
                    buid: api.buid
                };
                if (from) {
                    reqData.from = from;
                }
                api.request({
                    url: api.livePay,
                    data: reqData,
                    method: 'POST'
                }).then(json => {
                    wx.hideToast();
                    wx.requestPayment({
                        'timeStamp': json.timeStamp,
                        'nonceStr': json.nonceStr,
                        'package': json.package,
                        'signType': json.signType,
                        'paySign': json.paySign,
                        complete: (res) => {
                            if (res.errMsg.indexOf('cancel') != -1) {
                                reject(res);
                            } else if (res.errMsg.indexOf('ok') != -1) {
                                resolve(res);
                            }
                            api.isClick = false;
                        }
                    });
                });
            }).catch(msg => {
                wx.hideToast();
                api.isClick = false;
                if (!msg) return;
                api.showModal(msg);
            });
        });
    },
    confirmOrder(order_id, type) {
        type = type || 'goods';
        let content = '确认已收到商品？';
        if (type != 'goods') {
            content = '确认商家已经完成服务？';
        }
        return new Promise((resolve, reject) => {
            wx.showModal({
                content: content,
                success: (res) => {
                    if (res.confirm) {
                        api.request({
                            url: api.receive,
                            data: {
                                order_id: order_id
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
    cancelOrder(order_id) {
        return new Promise((resolve, reject) => {
            wx.showModal({
                content: '确定要取消订单吗？',
                success: (res) => {
                    if (res.confirm) {
                        api.request({
                            url: api.comm_cancel_order,
                            data: {
                                order_id: order_id
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
    deleteOrder(order_id) {
        return new Promise((resolve, reject) => {
            wx.showModal({
                content: '确认要删除该订单？',
                success: (res) => {
                    if (res.confirm) {
                        api.request({
                            url: api.delete_order,
                            data: {
                                order_id: order_id
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
    
    format(time) {
        let hour = time < 0 ? 0 : parseInt(time / 1000 / 3600),
            min = time < 0 ? 0 : parseInt((time / 1000 - hour * 3600) / 60),
            sec = time < 0 ? 0 : parseInt(time / 1000 - hour * 3600 - min * 60);
        hour = hour < 10 ? '0' + hour : hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        return hour + ':' + min + ':' + sec;
    },
    copyOrderCode(sn) {
        wx.setClipboardData({
            data: sn,
            success: () => {
                wx.showToast({
                    title: '已成功复制'
                });
            }
        });
    },
};

export default orderService;