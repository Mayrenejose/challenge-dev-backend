export const authorizationSystem = (roleOne, roleTwo) => {
    return (req, res, next) => {
    if (req.user && (req.user.role === roleOne || req.user.role === roleTwo)) {
        next()
    } else {
        res.status(403).json({ error: 'no access' })
    }}
}

export default authorizationSystem 