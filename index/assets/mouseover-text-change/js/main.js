new Vue({
    el: '#wrap',
    data(){
        return{
            arr: ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '=', '|', '\\', '/', '?', ':', '<', '>', ':'],
            random: [],
            text: 'Mouseover this',
            index: 0,
            textIndex: 0,
            play: false,
            length: 0,
            step: 6,
            origin: 'Mouseover this'
        }
    },
    mounted(){
        this.animate()
    },
    methods: {
        onMouseover(){
            this.play = true
            this.index = 0
            this.textIndex = 0
            this.length = this.text.length
            this.text = this.createRandomText()
            for(let i = 0; i < this.length * this.step; i++) this.random[i] = this.arr[Math.floor(Math.random() * this.arr.length)]
        },
        createRandomText(){
            let text = ''
            for(let i = 0; i < this.text.length; i++) text += this.arr[Math.floor(Math.random() * this.arr.length)]
            return text
        },
        changeText(){
            this.text = this.replaceStr(this.text, this.textIndex, this.random[this.index++])
            if(Math.floor(this.index) % this.step === 0) {
                this.text = this.replaceStr(this.text, this.textIndex, this.origin[this.textIndex])
                this.textIndex++
            }
            if(this.index >= this.random.length || this.textIndex === this.length) this.play = false
        },
        replaceStr(s, i, r){
            return s.substring(0, i) + r + s.substring(i + r.length)
        },
        render(){
            if(this.play) this.changeText()
        },
        animate(){
            this.render()
            requestAnimationFrame(this.animate)
        }
    }
})