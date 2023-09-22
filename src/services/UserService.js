
import axios from 'axios';

const URL = 'http://localhost:8080/api/pets';

class UserService {

    getUsers(){
        return axios.get(URL);
    }

    createUser(newUser){
        return axios.post(URL, newUser);
    }

    getUserById(userId){
        return axios.get(URL+"/"+ userId);
    }

    updateUser(newUser, userId){
        return axios.put(URL+"/"+userId, newUser);
    }

    deleteUser(userId){
        return axios.delete(URL+"/"+userId);
    }
}
  

export default new UserService()