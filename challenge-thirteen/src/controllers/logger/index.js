export const getLogger = async(req, res) => {
    try{
       return res.json({ log: `[${req.method}] ${req.url} - ${new Date().toLocaleTimeString()}` })
    } catch (error) {
        res.status(400).send({message: 'error getting loggers'})
    }
}