import mock from 'mockjs'


type MsgType = string|number
const success = (msg:MsgType='',data?:any)=>{
    return {
        code:0,
        msg,
        data
    }
}

const error = (code:number,msg:MsgType='',data?:any)=>{
    return {
        code,
        msg,
        data
    }
}

interface PostResInterface{
    body:string,
    type:'POST',
    url:string
}

//拦截请求
mock.mock(/\/api\/user\/login/,loginRes)
mock.mock(/\/api\/user\/get_info/,getInfoRes)

function loginRes(req:PostResInterface){
    const { user_name, password } = JSON.parse(req.body)
    if (user_name === 'admin' && String(password) === 'admin') {
        return success('登录成功',{user_id:101})
    } else {
        return error(1001, '用户名或密码错误')
    }
}

function getInfoRes(req:PostResInterface){
    const data =  {
        user_name:'Bukcy',
        avatar:'',
        age:20,
        sex:'男'
    }
    return success('获取成功',data)
}