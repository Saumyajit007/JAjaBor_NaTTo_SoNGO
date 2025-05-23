class ApiError{
    constructor(
        statuscode,
        message="something went wrong",
        errors=[],
        stack=""
    ){
        this.statuscode=statuscode,
        this.message=message,
        this.data=null,
        this.success=false,
        this.errors=errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

module.exports={ApiError}