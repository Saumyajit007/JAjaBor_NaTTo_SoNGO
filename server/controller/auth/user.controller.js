const {ApiResponse} = require("../../utils/ApiResponse");
const {ApiError}=require("../../utils/ApiError")

const loginSuccess = (req, res) => {
  console.log(req.user);
  res.send(req.isAuthenticated());
};

const checkAuth = (req, res) => {
if (req.isAuthenticated()) {
  const userdetails={
    id:req.user?.googleID,
    name:req.user?.name,
    email:req.user?.email,
    role:req.user?.role,
    isAuthenticated:true
  }
  console.log(req.isAuthenticated())
  return res
  .status(200)
  .json(
    new ApiResponse(
      200,
      userdetails,
      "user logged-in successfully"
    )
  );
}

return res.status(400).json(new ApiError(400,"unable to logged-in"))
};

module.exports = {
  checkAuth
};
