const App = {
    data() {
        return {
            loading: true,
            inis: 500,
            pc: true,
            im: 1,
            // download

        };
    },
    watch: {
        downlad: function() {
            if (this.downlad.select_info == 1) {

            }
        }
    },
    methods: {
        open_url() {
            location.href = "https://newsupport.lenovo.com.cn/driveList.html?fromsource=driveList&selname=LJ2655DN"
        },
        open() {
            ElementPlus.ElNotification({
                title: '警告',
                message: '为了您的观感，请旋转屏幕，横屏下观看',
                type: 'warning',
                position: 'top-left',
            })
        },
        open_msg() {
            ElementPlus.ElMessageBox.confirm(
                    '请选择查看的页面',
                    '选项', {
                        confirmButtonText: '手机端',
                        cancelButtonText: '电脑端',
                        type: 'warning',
                    }
                )
                .then(() => {
                    ElementPlus.ElMessage({
                        type: 'info',
                        message: '已切换',
                    })
                    this.im = 2
                })
                .catch(() => {
                    ElementPlus.ElMessage({
                        type: 'info',
                        message: '已切换',
                    })
                    this.im = 1
                })
        }
    },
    mounted() {
        var that = this
        that.im = 0
        that.open_msg();
        var height = window.screen.height
        var width = window.screen.width
        var that = this
        var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
        var browser = navigator.userAgent.toLowerCase();
        var isMobile = false;
        for (var i = 0; i < mobileAgent.length; i++) {
            if (browser.indexOf(mobileAgent[i]) != -1) {
                isMobile = true;
                that.pc = false
                    //alert(mobileAgent[i]);
                if (height >= "720") {
                    that.inis = 300
                } else if (height >= "480") {
                    that.inis = 250
                } else {
                    that.inis = 190
                }
            }
        }
        if (isMobile) {
            if (window.orientation == "90" | window.orientation != "-90") {
                that.open();
            }
        }
        setTimeout(function() {
            that.loading = false
        }, 1200);
    },
};
const app = Vue.createApp(App);
app.use(ElementPlus);
app.mount("#app");