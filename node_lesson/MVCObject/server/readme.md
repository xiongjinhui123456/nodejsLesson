## 接口文档
### 用户相关接口文档
    - 登录后才可使用的接口, 需要在请求头中通过authorization携带token
#### 用户数据表字段
 - 字段及类型约束
    + username   用户名  String   required  unique
    + pwd         密码    String   required
    + email       邮箱    String   required
    + gender      性别    String   ['男','女','保密']      默认'保密'
    + age         年龄    Number  默认18
    + tel        手机号    Number  默认空''
    + avator      头像     String  默认default.jpg
    + createTime   注册时间  Date  required
    + flag         激活状态  Number 1/0(1表示已激活，0表示未激活，未激活状态不能登录，但是数据库有数据，所以不能同名注册)

#### 用户注册
 - 请求地址：/user/register
 - 请求方式：post
 - 请求携带数据
    + username   注册的用户名  String  必填
    + pwd     注册密码      String   必填
    + rpwd     确认密码      String   必填
    + Email     绑定邮箱      String   必填
     + 注意: 注册成功后立即发送邮箱激活邮件,点击激活邮件后才可正常使用该账号
  - 响应数据(json)
    + `{code:1,meassage:'注册成功，请发送邮件激活账号}`

#### 用户激活接口
  - 请求地址：/user/verify
  - 请求方式：post
  - 请求携带的数据：
    + uid      用户的id   String  必填
    + pwd      用户密码    String  必填

#### 用户登录
  - 请求地址：/user/login
  - 请求方式：post
  - 请求携带的数据：
    + name      用户名/邮箱   String  必填
    + pwd       用户密码      String   必填
  - 响应数据(json)
    + `{code:1,message:'登录成功',token:'xxxx',info:'用户数据'}`

#### 用户详情获取（登录后才能使用的接口）
  - 请求地址：/user/info
  - 请求方式：get
  - 请求携带的数据：
    + id         用户名id   String  必填
  - 响应数据（json）
    + `{code:1,message:'登录成功',token:'xxxx',info:'用户数据'}`

#### 用户修改密码（登录后才可以使用的接口）
  - 请求地址：/user/rpwd
  - 请求方式：post
  - 请求携带数据：
    + id       用户名id   String  必填
    + oldpwd   旧密码     String  必填
    + newpwd       新密码   String  必填
    + rnewpwd     确认新密码   String  必填
  - 响应数据（json）
    + `{code:1,message:'密码修改成功'}`

#### 用户个人资料修改（登录后才能使用的接口）
  - 请求地址：/user/rinfo
  - 请求方式：post
  - 请求携带的数据：
    + id             用户名id  string  必填
    + gender         性别    string  选填
    + age            年龄    number  选填
    + tel            手机    number  选填
    + avator         头像    string  选填
  - 响应数据(json)
    + `{code:1,message:'修改成功'}` 