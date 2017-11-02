new Vue({
    el: 'image-slider',
    data: {
        images: [
            { link: 'img/1.png', caption: 'image caption 1' },
            { link: 'img/2.png', caption: '**image caption 2**' },
            { link: 'img/3.png', caption: 'image caption 3' }
        ], 
        currentNumber: 0,
        timer: null
    },

    ready: function() {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 1000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    }
});