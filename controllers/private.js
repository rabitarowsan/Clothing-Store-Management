exports.getPrivateData = (req,res,next) => {
    res.status(200).json({
        sucess: true,
        data: "You got acess to the private data in this route",
    });
};