const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case 404:
            res.status(404).json({title : "Not Found", message : "The requested resource was not found."})
            break;
        case 400:
            res.status(400).json({title : "Bad Request", message : "The request could not be understood or validated."})
            break;
        case 500:
            res.status(500).json({title : "Internal Server Error", message : "An error occurred on the server."})
            break;
        default:
            res.status(statusCode).json({title : "An Error Occurred", message : "An error occurred on the server."})
            break;
    }
}

module.exports = errorHandler;