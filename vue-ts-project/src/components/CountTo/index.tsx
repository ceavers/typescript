import {Component,Vue,Emit,Prop,Watch} from 'vue-property-decorator'
import CountUp from 'countup'

@Component({
    name:'CountTo'
})
export default class CountTo extends Vue{
    //组件传值中的props
    @Prop({type:Number,default:0}) public readonly start!:number
    @Prop(Number) public readonly end!:number

    @Emit('emitEvent')
    public click(event){
        return this.end
    }
    // 这里写完后效果等同于：public click(event) { this.$emit('emitEvent', event) }

    public counter:CountUp = null
    //计算属性的写法
    public get eleId(){
        return `count_to_${(this as any)._uid}`
    }

    protected render(){
        return (
            <div class='count-up-wrap' on-click={this.click}>
                <span id={this.eleId}></span>
            </div>
        )
    }

    protected mounted(){
        this.counter = new CountUp(this.eleId,this.start,this.end,0,2,{})
        this.counter.start()
    }

    public update(endVal:number):void{
        this.counter.update(endVal)
    }
}