import wepy from 'wepy';
let baseUrl = "http://sdkdemo.artqiyi.com",
    videoUrl = "http://test.yimizhibo.tv";
// let baseUrl = 'https://yimi.artqiyi.com',
// videoUrl = 'https://www.yimizhibo.tv';
export default {
    baseUrl: baseUrl,
    videoUrl,
    // 主播首页
    short_video_list: `${videoUrl}/api/v1/short_video_list`,
    // 视频相关
    short_video_recommend: `${videoUrl}/api/v1/short_video_recommend`,
    short_video_info: `${videoUrl}/api/v1/short_video_info`,
    thumbs_up: `${videoUrl}/api/v1/thumbs_up`,
    video_comment_list: `${videoUrl}/api/v1/video_comment_list`,
    video_comment: `${videoUrl}/api/v1/video_comment`,
    // 用户相关
    userinfo: `${videoUrl}/api/v1/userinfo`,
    applet_login: `${videoUrl}/api/v1/applet_login`,
    get_sdk_zbinfo: `${videoUrl}/api/v1/get_sdk_zbinfo`,
    // 地址相关接口
    get_address_list: `${baseUrl}/mobile/order/get_address_list`,
    add_addr_from_woxiu: `${baseUrl}/mobile/order/add_addr_from_woxiu`,
    edit_act_addr: `${baseUrl}/mobile/order/edit_act_addr`,
    del_addr: `${baseUrl}/mobile/order/del_addr`,
    get_region: `${baseUrl}/region/region/get_region`,
    get_address_info: `${baseUrl}/mobile/order/get_address_info`,
    // 订单相关接口
    order_list: `${baseUrl}/mobile/order/order_list`,
    order_detail: `${baseUrl}/mobile/order/order_detail`,
    comm_cancel_order: `${baseUrl}/mobile/order/comm_cancel_order`,
    delete_order: `${baseUrl}/mobile/order/delete_order`,
    receive: `${baseUrl}/mobile/order/receive`,
    logistics: `${baseUrl}/mobile/order/logistics`,
    refund_apply: `${baseUrl}/mobile/order/refund_apply`,
    refund_apply_info: `${baseUrl}/mobile/order/refund_apply_info`,
    refund_detail: `${baseUrl}/mobile/order/refund_detail`,
    // 商城下单流程相关接口
    goods: `${baseUrl}/mobile/index/goods`,
    selection_goods: `${baseUrl}/mobile/index/selection_goods`,
    goodsDetail: `${baseUrl}/mobile/index/goodsDetail`,
    buy_now_woxiu: `${baseUrl}/mobile/order/buy_now_woxiu`,
    immediatelyPayment: `${baseUrl}/mobile/order/immediatelyPayment`,
    livePay: `${baseUrl}/open/index/livePay`,
    comm_submit_order_buy_now_woxiu: `${baseUrl}/mobile/order/comm_submit_order_buy_now_woxiu`,
    // 拼团
    grouponDetail: `${baseUrl}/mobile/index/grouponDetail`,
    groupon_goods: `${baseUrl}/mobile/index/groupon_goods`,
    buy_now_groupon: `${baseUrl}/mobile/order/buy_now_groupon`,
    comm_submit_order_buy_now_groupon: `${baseUrl}/mobile/order/comm_submit_order_buy_now_groupon`,
    selection_groupon_goods: `${baseUrl}/mobile/index/selection_groupon_goods`,
    groupon_list: `${baseUrl}/mobile/index/groupon_list`,
    get_groupon_by_order: `${baseUrl}/mobile/index/get_groupon_by_order`,
    // 常见问题
    categories: `${baseUrl}/index/help/categories/buyer`,
    articles: `${baseUrl}/index/help/articles`,
    // 购物车相关
    get_cart_list: `${baseUrl}/mobile/order/get_cart_list`,
    get_cart_num: `${baseUrl}/mobile/order/get_cart_num`,
    love_goods: `${baseUrl}/mobile/index/love_goods`,
    add_to_cart: `${baseUrl}/mobile/order/add_to_cart`,
    delete_cart: `${baseUrl}/mobile/order/delete_cart`,
    update_cart_goods_num: `${baseUrl}/mobile/order/update_cart_goods_num`,
    update_order_goods_num: `${baseUrl}/mobile/order/update_order_goods_num`,
    cart_buy_woxiu: `${baseUrl}/mobile/order/cart_buy_woxiu`,
    comm_submit_order_buy_cart: `${baseUrl}/mobile/order/comm_submit_order_buy_cart`,
    // 申请合伙人
    send_verification: `${videoUrl}/api/v1/send_verification`,
    join_agent: `${videoUrl}/api/v1/join_agent`,
    get_supplier_info: `${videoUrl}/api/v1/get_supplier_info`,
    expand_order: `${baseUrl}/mobile/order/expand_order`,
    agent_apply: `${videoUrl}/api/v1/agent_apply`,
    // 其他
    group_list: `${baseUrl}/mobile/index/group_list`,
    get_banner: `${videoUrl}/api/v1/get_banner`,
    get_expand_qrcode: `${videoUrl}/weixin/authorization/get_expand_qrcode`,
    get_merchants_qrcode: `${videoUrl}/weixin/authorization/get_merchants_qrcode`,
    // 提现
    user_bank_card: `${videoUrl}/api/v1/user_bank_card`,
    bank_card_info: `${videoUrl}/api/v1/bank_card_info`,
    edit_bank_card: `${videoUrl}/api/v1/edit_bank_card`,
    withdraw_apply: `${videoUrl}/api/v1/withdraw_apply`,
    withdraw_apply_log: `${videoUrl}/api/v1/withdraw_apply_log`,
    // 预约商品
    goods_comment: `${baseUrl}/mobile/index/goods_comment`,
    goods_comment_list: `${baseUrl}/mobile/index/goods_comment_list`,
    // 企业名片
    get_enterprise_card: `${videoUrl}/api/v1/get_enterprise_card`,
    get_applet_config: `${videoUrl}/api/v1/get_applet_config`,
    // 代理列表
    get_user_agent: `${videoUrl}/api/v1/get_user_agent`,
    // 印刷
    buy_now_print: `${baseUrl}/mobile/order/buy_now_print`,
    comm_submit_order_buy_now_print: `${baseUrl}/mobile/order/comm_submit_order_buy_now_print`,
    // 咨询
    save_business_consulution: `${videoUrl}/api/v1/save_business_consulution`,
    // 附近分店
    get_shop_near: `${videoUrl}/api/v2/get_shop_near`,
    get_shop_log: `${videoUrl}/api/v1/get_shop_log`,
    // 首页快捷导航
    get_navigation: `${videoUrl}/api/v1/get_navigation`,
    // 加盟咨询
    save_consultation_msg: `${videoUrl}/api/v1/save_consultation_msg`,
    // 到店自提
    get_verification_order: `${baseUrl}/mobile/order/get_verification_order`,
    // 会员
    get_member_rights: `${videoUrl}/api/v1/get_member_rights`,
    // 知识产权
    brand_consult: `${videoUrl}/api/v1/brand_consult`,
    bind_wx_phone: `${videoUrl}/api/v1/bind_wx_phone`, // 绑定微信手机
    patent_consult: `${videoUrl}/api/v1/patent_consult`,
    annual_fee_remit: `${videoUrl}/api/v1/annual_fee_remit`,
    goods_consult: `${baseUrl}/mobile/index/goods_consult`,
    publish_demand: `${videoUrl}/api/v1/publish_demand`,
    get_intel: `${videoUrl}/api/v1/get_intel`, // 类别查询
    search_intel: `${videoUrl}/api/v1/search_intel`,
    subsidies_consult: `${videoUrl}/api/v1/subsidies_consult`,

    // 登录
    getSession(code) {
        return this.request({
            url: this.applet_login,
            method: 'POST',
            data: {
                act: 1,
                code: code,
                buid: this.buid,
                isTest: this.isTest
            }
        });
    },
    // 获取用户信息
    getUserInfo() {
        let tokenkey = wx.getStorageSync('tokenkey') || '';
        let requestData = {
            url: this.userinfo,
            data: {
                act: 1,
                tokenkey: tokenkey
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded',
            }
        };
        return wepy.request(requestData);
    },
    checkLogin(smData) {
        var goback=smData?smData.isgoback:true;
        return new Promise((resolve, reject) => {
            this.getUserInfo().then(json => {
                var data = json.data.data;
                if (data.latest_shop_id) this.latest_shop_id = data.latest_shop_id;
                if (data.uid) {
                    this.userInfo = data;
                    resolve(data);
                } else {
                    wx.setStorageSync('sdk_zbinfo', '');
                    wepy.login()
                        .then(res => this.getSession(res.code))
                        .then(res => {
                            wx.setStorageSync('tokenkey', res.tokenkey);
                            if (res.uid) {
                                wx.setStorageSync('uid', res.uid);
                            }
                            this.getUserInfo().then(json => {
                                var data = json.data.data;
                                if (data.latest_shop_id) this.latest_shop_id = data.latest_shop_id;
                                if (data.uid) {
                                    this.userInfo = data;
                                    resolve(data);
                                }
                            });
                        });
                }
            }).catch(e => {
                this.loading.hide();
                this.showModal('网络开小差了～', () => {
                    if(goback){
                        let currentPages = getCurrentPages();
                        if (currentPages.length > 1) {
                            wx.navigateBack();
                        }
                    }

                });
            });
        });
    },
    /*
        封装统一返回处理
    */
    renderResult(res, resolve, reject, again, data) {
        let resData = res.data || '{}';
        if (typeof resData == 'string') {
            resData = JSON.parse(resData);
        }
        if (resData.state.code == 10401) {
            if (again) {
                reject('Something is wrong');
                return;
            }
            return wepy.login()
                .then(loginRes => this.getSession(loginRes.code))
                .then(res => {
                    wx.setStorageSync('tokenkey', res.tokenkey);
                    if (res.uid) {
                        wx.setStorageSync('uid', res.uid);
                    }
                    return this.request(data, true);
                }).catch(reject);
        } else {
            if (resData.state.code == 10400) {
                reject(resData.state.msg);
            }
            resolve(resData.data);
        }
    },
    /*
        封装request
    */
    request(data, again) {
        let tokenkey = wx.getStorageSync('tokenkey') || '',
            reqData = data.data || {},
            filePath = data.filePath || '';
        let isgoback = data.isgoback|| true;
        reqData.tokenkey = tokenkey;
        let requestData = {
            url: data.url,
            header: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            data: reqData,
            method: data.method || 'GET'
        };
        if (filePath) {
            requestData = {
                url: data.url,
                filePath: filePath,
                name: data.name,
                header: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                formData: reqData
            };
        }

        return new Promise((resolve, reject) => {
            if (filePath) {
                wepy.uploadFile(requestData).then(res => {
                    this.renderResult(res, resolve, reject, again, data);
                }).catch(e => {
                    this.loading.hide();
                    this.showModal('网络开小差了～', () => {
                        console.log(isgoback);
                        if(isgoback){
                            let currentPages = getCurrentPages();
                            if (currentPages.length > 1) {
                                wx.navigateBack();
                            }
                        }
                    });
                });
            } else {
                wepy.request(requestData).then(res => {
                    this.renderResult(res, resolve, reject, again, data);
                }).catch(e => {
                    this.loading.hide();
                    this.showModal('网络开小差了～', () => {
                        console.log(isgoback);
                        if(isgoback) {
                            let currentPages = getCurrentPages();
                            if (currentPages.length > 1) {
                                wx.navigateBack();
                            }
                        }
                    });
                });
            }
        });
    },
    buid: 12, //29859
    isClick: false,
    userInfo: {},
    version: 0,
    from_uid: 0,
    isTest: 1,
    lastPage: '',
    shop_id: 0,
    latest_shop_id: 0,
    location_info: {},
    getQrcodeImage(id, type) {
        let data = {
            buid: this.buid,
            shop_id: this.shop_id
        }, url = this.get_expand_qrcode;
        if (type == 'video') {
            data.svid = id;
        } else if (type == 'join_consult') {
            url = this.get_merchants_qrcode;
        } else {
            data.bid = id;
        }
        return this.request({
            url: url,
            data: data
        });
        //return this.request({
        //    url: 'https://www.yimizhibo.tv/weixin/authorization/get_expand_qrcode',
        //    data: {
        //        buid: 22907,
        //        shop_id: this.shop_id,
        //        bid: 88131
        //    }
        //});
    },
    renderNum(num) {
        if (num > 10000) {
            num = parseFloat(num / 10000).toFixed(1) + '万';
        }
        return num;
    },
    showModal(content, callback) {
        wx.showModal({
            content: content,
            showCancel: false,
            confirmText: '确定',
            success: (res) => {
                if (res.confirm) {
                    callback && callback();
                }
            }
        });
    },
    showToast(title, callback) {
        wx.showToast({
            title: title,
            icon: 'none',
            success: (res) => {
                callback && callback();
            }
        });
    },
    navigateTo(url) {
        if (!url) return;
        if (url.indexOf('mall/index') != -1) {
            wx.switchTab({
                url: url
            });
        } else {
            if (this.isClick) return;
            this.isClick = true;
            const navigateObj = {
                url: url,
                complete: () => {
                    setTimeout(() => {
                        this.isClick = false;
                    }, 1000);
                }
            };
            wx.navigateTo(navigateObj);
        }
    },
    renderStar(level) {
        let d = level % 1,
            arr, stars = [];
        if (d) {
            arr = Array.from(Array(5)).map(_ => --level > 0 ? 1 : (d > 0 ? d-- : 0));
        } else {
            arr = Array.from(Array(5)).map(_ => level-- > 0 ? 1 : (d > 0 ? d-- : 0));
        }
        arr.map(item => {
            stars.push(item == 1 ? 'full' : (item == 0 ? 'zero' : 'half'));
        });
        return stars;
    },
    isEmptyObject(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    },
    loading: {
        show() {
            wx.showLoading();
        },
        hide() {
            wx.hideLoading();
        }
    },
    userLogin(type, e) {
        return new Promise((resolve, reject) => {
            const login = (code, res) => {
                this.request({
                    url: this.applet_login,
                    data: {
                        act: 1,
                        code: code,
                        iv: res.iv,
                        encryptedData: res.encryptedData,
                        buid: this.buid
                    },
                    method: 'POST'
                }).then(json => {
                    wx.setStorageSync('tokenkey', json.tokenkey);
                    this.getUserInfo().then(res => {
                        this.userInfo = res.data.data;
                        resolve(res);
                    });
                });
            };
            let res = e.detail;
            if (res.errMsg.indexOf('ok') == -1) return;
            wepy.login().then(loginRes => {
                login(loginRes.code, res);
            });
        });
    },
    setBackgroundColor(frontColor, backgroundColor) {
        wx.setNavigationBarColor({
            frontColor: frontColor,
            backgroundColor: backgroundColor,
            animation: {
                duration: 400,
                timingFunc: 'easeIn'
            }
        });
    },
    setTitle(title) {
        console.log(title);
        wx.setNavigationBarTitle({
            title: title
        });
    },
    getBackgroundColor() {
        let tokenkey = wx.getStorageSync('tokenkey') || '';
        return new Promise((resolve, reject) => {
            wepy.request({
                url: this.get_applet_config,
                data: {
                    act: 1,
                    buid: this.buid,
                    shop_id: this.shop_id,
                    tokenkey
                }
            }).then(json => {
                resolve(json.data.data);
            });
        });
    },
    format(second_time) {
        const add0 = (m) => m >= 10 ? m : `0${m}`;
        let day, hour, min, sec = parseInt(second_time);
        if (parseInt(second_time) > 60) {
            sec = parseInt(second_time) % 60;
            min = parseInt(second_time / 60);
            if (min > 60) {
                min = parseInt(second_time / 60) % 60;
                hour = parseInt(parseInt(second_time / 60) / 60);
                if (hour > 24) {
                    hour = parseInt(parseInt(second_time / 60) / 60) % 24;
                    day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
                }
            }
        }
        return {
            day: add0(day || 0),
            hour: add0(hour || 0),
            min: add0(min || 0),
            sec: add0(sec || 0)
        };
    },
    hexToRgba(hex, al) {
        var hexColor = /^#/.test(hex) ? hex.slice(1) : hex,
            alp = hex === 'transparent' ? 0 : Math.ceil(al),
            r, g, b;
        hexColor = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(hexColor) ? hexColor : 'fffff';
        if (hexColor.length === 3) {
            hexColor = hexColor.replace(/(\w)(\w)(\w)/gi, '$1$1$2$2$3$3');
        }
        r = hexColor.slice(0, 2);
        g = hexColor.slice(2, 4);
        b = hexColor.slice(4, 6);
        r = parseInt(r, 16);
        g = parseInt(g, 16);
        b = parseInt(b, 16);
        return {
            hex: '#' + hexColor,
            alpha: alp,
            rgba: 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (alp / 100).toFixed(2) + ')'
        };
    },
    pageScrollTo(px, ms = 300) {
        wx.pageScrollTo({
            scrollTop: px,
            duration: ms
        })
    },
}
