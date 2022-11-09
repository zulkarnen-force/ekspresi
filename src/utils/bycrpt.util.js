import bcrypt from 'bcrypt'


let salt = bcrypt.genSaltSync(10);

const bcryptPassword = {
    
    hashPassword(password = "") {
        let hashed = bcrypt.hashSync(password, salt);
        return hashed
    },
    
    
    isValidPassword(plainPassword, hashPassword) {
        return bcrypt.compareSync(plainPassword, hashPassword)
    }
}



export default bcryptPassword
