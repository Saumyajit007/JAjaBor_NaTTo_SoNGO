
const loginSuccess=(req,res)=>{
  console.log(req.user)
  res.send(req.isAuthenticated());
}

const loginFailed=()=>{

}
module.exports={
    loginSuccess
}