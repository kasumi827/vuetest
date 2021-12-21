'use strict';

{
    var app = new Vue({
        el: "#app",
        data: {
            count: 0,
            message: '',
            checked: false,
            selectedValues: [],
            jobs: [
                { name: "エンジニア" },
                { name: "プログラマー" },
                { name: "デザイナー" },
            ],
            newJobName: '',
            },
        methods: {
            countUp: function () {
                this.count++;
            },
            countDown: function () {
                this.count -= 1;
            },
            addJob: function () {
                this.jobs.push({
                    name: this.newJobName
                });
                this.newJobName = '';
            },
        }
    });
}