const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    try {
        const token = req.headers.authorization || req.cookies.token;

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        try {
            // Verify the token (you'll need a secret key for this)
            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            // Attach the user information to the request object for use in subsequent middleware or routes
            req.user = decoded.user;

            // Continue to the next middleware or route
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (error) {

        console.log(error);
    }
    // Check for authentication token in the request headers or cookies

};

module.exports = authenticateUser;