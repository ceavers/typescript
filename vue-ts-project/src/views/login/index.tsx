// src/views/login/index.tsx
import { Component, Vue,Emit,Prop,Watch } from 'vue-property-decorator'
import {Action} from 'vuex-class'

@Component
export default class LoginPage extends Vue {
    public user_name:string=''
    public password:string|number=''

    protected render() {
        return (
            <div>
                <input v-model={this.user_name} />
                <input v-model={this.password} type='password' style='margin-left:10px' />
                <button style='margin-left: 10px;' on-click={ this.login }>登录</button>
            </div>
        )
    }
    @Action('loginActions') public loginAction// 这里通过@Action('loginActions')装饰器指定loginAction是store里的loginActions方法
    public login(){
        this.loginAction({
            user_name:this.user_name,
            password:this.password
        }).then(()=>{
            this.$router.push('/home')
        })
    }
}