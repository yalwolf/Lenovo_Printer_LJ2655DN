const App = {
    data() {
        return {
            loading: true,
            pc: true,
            // download
            downlad: {
                info: {
                    Filename: "Lenovo LJ2405D_2455D_2605D_2655DN_2400_2405_WIN driver.rar",
                    Filelink: "https://driverdl.lenovo.com.cn/lenovo/DriverFilesUploadFloder/50000/Lenovo%20LJ2405D_2455D_2605D_2655DN_2400_2405_WIN%20driver.rar",
                    Os: "winXP、win7、win8、win8.1、win10",
                    FileSize: "57.34 MB"
                }
            }

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
        File_Download() {
            var that = this
            if (that.pc == false) {
                ElementPlus.ElMessageBox.confirm(
                        '该文件为PC程序，请在PC端下载',
                        '警告', {
                            confirmButtonText: '知道了',
                            cancelButtonText: '强制下载',
                            type: 'warning',
                        }
                    )
                    .then(() => {})
                    .catch(() => {
                        location.href = that.downlad.info.Filelink
                    })
                return;
            } else {
                location.href = that.downlad.info.Filelink
            }
        },
    },
    mounted() {
        var that = this
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
            }
        }
        setTimeout(function() {
            that.loading = false
        }, 1200);
    },
};
const app = Vue.createApp(App)
app.use(ElementPlus)
app.mount("#app");