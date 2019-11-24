import { __decorate } from "tslib";
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
import CountUp from 'countup';
let CountTo = class CountTo extends Vue {
    constructor() {
        super(...arguments);
        // 这里写完后效果等同于：public click(event) { this.$emit('emitEvent', event) }
        this.counter = null;
    }
    click(event) {
        return this.end;
    }
    //计算属性的写法
    get eleId() {
        return `count_to_${this._uid}`;
    }
    render() {
        return (<div class='count-up-wrap' on-click={this.click}>
                <span id={this.eleId}></span>
            </div>);
    }
    mounted() {
        this.counter = new CountUp(this.eleId, this.start, this.end, 0, 2, {});
        this.counter.start();
    }
    update(endVal) {
        this.counter.update(endVal);
    }
};
__decorate([
    Prop({ type: Number, default: 0 })
], CountTo.prototype, "start", void 0);
__decorate([
    Prop(Number)
], CountTo.prototype, "end", void 0);
__decorate([
    Emit('emitEvent')
], CountTo.prototype, "click", null);
CountTo = __decorate([
    Component({
        name: 'CountTo'
    })
], CountTo);
export default CountTo;
//# sourceMappingURL=index.jsx.map