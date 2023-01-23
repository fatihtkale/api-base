import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'
dotenv.config()

class JwtService {
    async verifyToken(req, res, next): Promise<any> {
        let token = req.headers["x-access-token"];

        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }
    
        jwt.verify(token, process.env.JWT_SIGN_CODE, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized" });
            }
            next();
        });
    }
}

export default new JwtService();