import jwt from 'jsonwebtoken'

export const parseToken = token => {
    const {id, exp} = jwt.decode(token)
    const now = Math.floor(Date.now() / 1000)
  
    if (exp < now) throw new Error('Token is expired')
  
    return {id}
  }