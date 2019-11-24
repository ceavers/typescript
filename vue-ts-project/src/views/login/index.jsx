import { __decorate } from "tslib";
// src/views/login/index.tsx
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
let LoginPage = class LoginPage extends Vue {
    constructor() {
        super(...arguments);
        this.user_name = '';
        this.password = '';
    }
    render() {
        return (<div>
                <input v-model={this.user_name}/>
                <input v-model={this.password} type='password' style='margin-left:10px'/>
                <button style='margin-left: 10px;' on-click={this.login}>登录</button>
            </div>);
    }
    login() {
        this.loginAction({
            user_name: this.user_name,
            password: this.password
        }).then(() => {
            this.$router.push('/home');
        });
    }
};
__decorate([
    Action('loginActions')
], LoginPage.prototype, "loginAction", void 0);
LoginPage = __decorate([
    Component
], LoginPage);
export default LoginPage;
//# sourceMappingURL=index.jsx.map