// let url = 'http://kindle2flomo.90byte.com'
let url = 'http://127.0.0.1:5000'
let app = new Vue({
    el: '#app',
    data: {
        fileList: [],
        api: '',
        note_prefix: '笔记：',
        highlight_prefix: '',
        delimiter: '---------',
        form: {
            tag: '#kindle/《不拘一格》 #读书笔记',
            order: 'down'
        },
        books: [],
        current_book: -1,
        book_title: '示例：不拘一格',
        result: [
            {
                "highlight": "网飞文化的核心是“人才重于流程，创新高于效率，自由多于管控”。必须理解，这样的文化建立在一个非常重要的基础上：创造力需要自由，但自由又不能被滥用。所以网飞只招“成年人”，即那些理解自由意味着更大责任的人。",
                "note": "根本的问题放在了人才招聘上，而大多数公司都不重视这个环节。",
                "place": "位置 127"
            },
            {
                "highlight": "判断力几乎可以解决所有模棱两可的问题，而流程做不到。",
                "note": "判断力的重要性",
                "place": "位置 320"
            },
            {
                "highlight": "这就是“自由与责任”理念的核心。如果有人滥用你给予他们的自由，就必须受到惩罚，而且必须是严厉的惩罚。这样，其他员工才会引以为戒，否则，自由将毫无意义。",
                "note": "大部分公司就是不愿意拉破脸皮，才一片祥和的将就着，耗费精力，这就是内耗。",
                "place": "3下 取消差旅和经费审批 > 位置 1249"
            },
            {
                "highlight": "这确实是一项很有意义的研究。创造性工作要求在一定程度上解放你的大脑。如果你总想着要怎么做才能表现好，才能得到高额的奖金，那么你就缺少开放的认知空间，产生最好的想法和最好创意的可能性也微乎其微。结果，你反倒做得更差。",
                "place": "4 支付行业最高薪资 > 位置 1564"
            },
            {
                "highlight": "了解自身的价值，然后主动去争取应得的报酬，这是我自己的责任啊！",
                "place": "4 支付行业最高薪资 > 位置 1754"
            },
            {
                "highlight": "如果你的回答通通是否定的，那么你应该开除她（下一章，我们会谈到员工表现平平就得拿遣散费走人）；如果你的答案是肯定的，那么请不要干涉，把决定权交给她就好。",
                "note": "一直实行的就只有一个原则，优胜劣汰。",
                "place": "6 无须决策审批 > 位置 2345"
            },
            {
                "highlight": "当然，对于某些产业而言，必须保证零失误。但网飞的业务并不涉及与安全相关的产业，如医疗、核能等。我们的市场就是需要创新。从长远来看，我们面临的最大危机不是犯错误，而是缺乏创新，缺乏让客户满意的娱乐创意，这将最终导致我们被市场淘汰。",
                "place": "6 无须决策审批 > 位置 2368"
            },
            {
                "highlight": "知情指挥应当承担项目所有的责任，包括独立签署合同文件。",
                "note": "实际干活的人负责。",
                "place": "6 无须决策审批 > 位置 2580"
            },
            {
                "highlight": "你必须养成这样一个习惯——如果有把握招到一名更优秀的员工，那就果断地辞掉当前的员工。当然，要做到这一点很困难，因为在职的员工也很优秀。但是，你必须这样做。你",
                "note": "再此印证：优胜劣汰。",
                "place": "7 员工留任测试 > 位置 2801"
            },
            {
                "highlight": "与其在这样一项计划里白白浪费大笔资金，不如直接给这名员工一笔丰厚的遣散补贴，遗憾地告知他不适合这份工作，并祝愿他今后能有更好的发展。",
                "note": "将省下来的管理成本直接给员工，这个方法在一定程度上确实人性化一些。",
                "place": "7 员工留任测试 > 位置 2942"
            },
            {
                "highlight": "最广为人知的决策方式就是领导拍板。领导需要审批决策，指导过程，选拔人员。有时，他可能会直接告诉员工该做什么，并且经常进行检查，纠正那些与他的意图不符的做法；有时，他也会试着给员工更多的权力，用流程控制代替直接监督。",
                "place": "9 情景管理而非控制管理 > 位置 3401"
            },
            {
                "highlight": "《小王子》（TheLittlePrince如果你想造艘船，不要老催人去采木，忙着分配工作和发号施令。而是要激起他们对浩瀚无垠的大海的向往。",
                "place": "9 情景管理而非控制管理 > 位置 3492"
            },
            {
                "highlight": "我就拿经常对管理层所说的话来提醒自己：当你的员工做了一些蠢事，不要指责他们。相反，你应该问问自己，你在情景设定上犯了什么错：在阐释战略目标的时候，你有没有讲得足够清晰并且让员工受到鼓舞？你有没有阐明所有的可能性和风险，从而帮助你的团队做出正确的决策？你和员工在观点和目标上有没有达成一致？",
                "note": "多少管理者有这样的觉悟，从自身去找原因？其实，每个人都应该多从自身去找原因，而不是看到别人犯错而心存侥幸。",
                "place": "9 情景管理而非控制管理 > 位置 3574"
            },
            {
                "highlight": "无论哪个地区，哪个行业，大多数组织机构实行的都是这种金字塔形的决策模式。这种模式包括两个方面：一方面由老板做出决定，然后自上而下逐级传达，一直落实到金字塔底端；另一方面是低级别员工只能处理细枝末节的小问题，稍大一点的问题则需要层层上报。",
                "place": "9 情景管理而非控制管理 > 位置 3616"
            },
            {
                "highlight": "即使是美国人提供反馈，他们也几乎总是先肯定你的工作，然后再告诉你他们真正想说的内容。美国人遵循的就是诸如“三个正面评价带一个负面评价”“要看到员工的好”这一类的信条，但这会使荷兰人感到困惑。荷兰人会给你正面或负面的反馈，但没法同时既说正面的，又说负面的。",
                "place": "10 走向全球的网飞文化 > 位置 4097"
            },
            {
                "highlight": "我们的4A准则是：·目的在于帮助。·反馈具有可行性。·感激与赞赏。·接受或拒绝。现在再加上第五条：·调整、适应——根据你所处的文化环境，调整你提出和接受反馈的方式，以获得你所期待的效果。",
                "place": "10 走向全球的网飞文化 > 位置 4137"
            },
            {
                "highlight": "·在文化中庸的国家，员工进行非正式反馈的可能性不大，可以实施更为正式的反馈机制，将反馈更多地纳入正式议程。",
                "note": "我们应该属于文化中庸的国家，但似乎，没有公司愿意建立正式的反馈机制，每年的评测，感觉都是走个形式。",
                "place": "10 走向全球的网飞文化 > 位置 4150"
            },
            {
                "highlight": "人才密度和坦诚这两个概念贯穿本书始终，是本书两个最基本的概念。",
                "place": "位置 4242"
            }
        ],
        notes_length: 9,
        selectedCount: 0,
        savedCount: 0,
        asideVisable: true,
        wereadVisible: false,
        textarea: '',
        // source: '',
        // placeholder: '一个神奇的输入框。\n解析 -> 贴入微信读书笔记并解析；\n新建 -> 插入笔记到列表；\n请求 -> 贴入微信读书 Cookies，获取所有笔记'
        placeholder: '1. 打开微信读书笔记，点击导出，复制到剪贴板\n2. 粘贴到此处\n3. 点击解析按钮'
    },
    created() {

    },
    mounted() {
        this.editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
            value: 'Markdown here!',
            lineNumbers: false,
            lineWrapping: true,
            styleActiveLine: true,
            theme: 'base16-light',
            mode: 'text/x-markdown',
            viewportMargin: Infinity,
            tabSize: 2,
        });
        if (localStorage.getItem('form')) {
            try {
                form = JSON.parse(localStorage.getItem('form'))
                this.form.tag = form.tag;
                this.form.delimiter = form.delimiter;
                this.form.order = form.order;
            } catch (e) {
                localStorage.removeItem('form')
            }
        }
        if (localStorage.book_title) {
            this.book_title = localStorage.book_title;
        }
        if (localStorage.current_book){
            this.current_book = localStorage.current_book;
        }
        if (localStorage.api) {
            this.api = localStorage.api;
        }
        if (localStorage.savedCount) {
            this.savedCount = localStorage.savedCount;
        }
        if (localStorage.selectedCount) {
            this.selectedCount = localStorage.selectedCount;
        }
        if (localStorage.getItem('result')) {
            result = JSON.parse(localStorage.getItem('result'))
            this.result = result
        }
        if (localStorage.getItem('books')){
            books = JSON.parse(localStorage.getItem('books'))
            this.books = books
        }
    },
    watch: {
        book_title(newValue) {
            localStorage.book_title = newValue;
        },
        current_book(newValue){
            localStorage.current_book = newValue;
        },
        api(newValue) {
            localStorage.api = newValue;
        },
        savedCount(newValue) {
            localStorage.savedCount = newValue;
        },
        selectedCount(newValue) {
            localStorage.selectedCount = newValue;
        },
        form: {
            handler(newForm, oldForm) {
                localStorage.form = JSON.stringify(newForm)
            },
            deep: true
        },
        result(newResult) {
            localStorage.result = JSON.stringify(newResult);
        },
        books(newValue){
            localStorage.books = JSON.stringify(newValue)
        }
    },
    methods: {
        // 事件监听 监听页面的 scroll 事件，回调方法为 handleScroll
        listenerFunction(e) {
            document.addEventListener('scroll', this.handleScroll, true)
        },
        // 编写滚动条事件
        handleScroll() {
            // 获取滚动条元素对象
            let ele = document.getElementsByClassName('right')[0]
            // 获取需要固定的元素对象
            let editorNav = document.getElementsByClassName('el-textarea')[0]
            // 判断滚动条的高度（大于240，给固定元素添加 class）
            if (ele.scrollTop > 240) {
                editorNav.classList.add('fixed_div')
            } else {
                editorNav.classList.remove('fixed_div')
            }
        },
        // 销毁事件监听
        beforeDestroy() {
            document.removeEventListener('scroll', this.listenerFunction)
        },
        // 手动刷新 count
        flashCount() {
            savedCount = 0;
            selectedCount = 0;
            this.result.forEach((item, index) => {
                if (item.selected) {
                    selectedCount++;
                }
                if (item.saved) {
                    savedCount++;
                }
            })
            this.selectedCount = selectedCount;
            this.savedCount = savedCount;
        },
        saveApi() {
            if (!this.api.startsWith('https://flomoapp.com/')) {
                return this.$message.error('请设置正确的 flomo API')
            }
            this.$message.success('flomo API 设置成功')
        },
        showAside() {
            this.asideVisable = true;
        },
        hideAside() {
            this.asideVisable = false;
        },
        clickCard(item, index) {
            if (!item.saved) {
                item.selected = !item.selected
                if (item.selected) {
                    this.selectedCount++;
                } else {
                    this.selectedCount--;
                }
            }
            this.result.splice(index, 1, item)
        },
        // 获取笔记 
        get_notes(filename,index){
            this.current_book = index;
            if (filename){
                axios.get(url+'/get/'+filename).then(response => {
                    this.book_title = response.data.result.book_title.split(' ').join('_')
                    this.form.tag = "#kindle/《" + this.book_title + "》"
                    this.result = response.data.result.book_notes
                    this.flashCount();
                })
            }
        },
        uploadChange(file, fileList) {
            console.log('change')
            // this.fileList.push(file.raw)
            this.parse(file.raw)
        },
        handleRequest() {
            console.log('request')
            // var length = this.fileList.length;
            // if (length == 1) {
            //     this.parse(this.fileList[0])
            // }
        },
        parse(file) {
            if (file) {
                let formData = new FormData();
                formData.append("file", file);
                axios.post(url + '/parse', formData, {
                    "Content-Type": "multipart/form-data"
                })
                    .then(response => {
                        this.book_title = response.data.result.book_title.split(' ').join('_')
                        this.form.tag = "#kindle/《" + this.book_title + "》"
                        this.result = response.data.result.book_notes
                        let book = {
                            filename: response.data.filename,
                            book_title: this.book_title
                        }
                        this.books.push(book)
                        this.current_book = this.books.length -1;
                        this.flashCount();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                this.$message.error('请上传Kindle笔记文件');
            }
        },
        copyLink(item, index) {
            this.$copyText(item.url).then((e) => {
                this.$message.success('复制成功')
            }, (e) => {
                this.$message.success('Can not copy')
            })
        },
        // 删除
        del(item, index) {
            this.result.splice(index, 1)
            this.flashCount();
        },
        // 编辑
        edit(item, index) {
            // this.result.splice(index, 1)
            // this.flashCount();
            this.$message.info("还未开发完成")
        },
        // 编辑区内容处理
        handleEditor(command){
            let content = this.editor.getValue();
            if(command == 'flomo'){
                let formData = new FormData();
                formData.append("api", this.api);
                formData.append("content", content);
                axios.post(url + '/post_single', formData, {
                    "Content-Type": "multipart/form-data"
                }).then(response => {
                    if (response.data.code == 0) {
                        this.$message.success('导入成功')
                        let item = {}
                        item.saved = true
                        item.selected = false
                        item.place = new Date()
                        item.note = content
                        item.url = 'https://flomoapp.com/mine/?memo_id=' + response.data.memo.slug
                        this.result.unshift(item)
                        this.flashCount();
                    } else {
                        this.$message.error('导入失败：' + response.data.message + '，请检查 Flomo API 设置是否正确');
                    }
                }).catch(error => {
                    console.log(error);
                });
            }else if(command == 'md2wechat'){
                this.$message.info('你想发送：' + content)
            }
        },
        post(item, index) {
            let formData = new FormData();
            formData.append("api", this.api);
            formData.append("tag", this.form.tag);
            formData.append("delimiter", this.delimiter);
            formData.append("order", this.form.order);
            formData.append("note_prefix", this.note_prefix);
            formData.append("highlight_prefix", this.highlight_prefix);
            formData.append("note", item.note || '')
            formData.append("highlight", item.highlight || '');
            axios.post(url + '/post', formData, {
                "Content-Type": "multipart/form-data"
            }).then(response => {
                // console.log(response);
                if (response.data.code == 0) {
                    this.$message.success('导入成功')
                    item.saved = true
                    item.selected = false
                    item.url = 'https://flomoapp.com/mine/?memo_id=' + response.data.memo.slug
                    this.result.splice(index, 1, item)
                    this.flashCount();
                } else {
                    this.$message.error('导入失败：' + response.data.message + '，请检查 Flomo API 设置是否正确');
                }
            }).catch(error => {
                console.log(error);
            });
        },
        postone(item, index) {
            // api 校验
            if (!this.api) {
                return this.$message.error('请设置 Flomo API');
            }
            if (!this.api.startsWith('https://flomoapp.com/iwh/')) {
                return this.$message.error('请设置正确的 Flomo API')
            }
            if (item.saved) {
                return this.$message.info('该 MEMO 已经上传至 Flomo')
            }
            this.post(item, index);
        },
        postsome() {
            // api 校验
            if (!this.api) {
                return this.$message.error('请设置 Flomo API');
            }
            if (!this.api.startsWith('https://flomoapp.com/iwh/')) {
                return this.$message.error('请设置正确的 Flomo API')
            }
            // params
            // 上传列表数据校验
            var data = [];
            for (var i = 0; i < this.result.length; i++) {
                if (this.result[i].selected && !this.result[i].saved) {
                    data.push(this.result[i])
                }
            }
            if (data.length > 100) {
                return this.$message.error('Flomo API 每天只支持 100 条');
            }
            if (data.length == 0) {
                return this.$message.error('请点击并i选择一条 MEMO 导入')
            }
            // 逐条导入 MEMO
            for (var i = 0; i < data.length; i++) {
                this.post(data[i], i)
            }
        },
        // 读取微信读书笔记，并解析
        parseWereadNotes() {
            let formData = new FormData();
            formData.append('data', this.textarea)
            axios.post(url + '/parse_weixin', formData, {
                "Content-Type": "multipart/form-data"
            }).then(response => {
                // console.log(response);
                if (response.data.result.length == 0) {
                    return this.$message.error('输入有误，解析失败')
                }
                this.book_title = response.data.book_title.split(' ').join('_')
                this.form.tag = "#kindle/《" + this.book_title.split('：')[0] + "》"
                this.result = response.data.resul
                this.flashCount();
            }).catch(error => {
                console.log(error);
            });
        }
    }
})