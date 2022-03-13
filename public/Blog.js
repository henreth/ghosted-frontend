import axios from "axios";

let user = {
      surname: 'Doe'
}

axios.patch('user/1',user)
    .then(r=>alert(r.message))


















