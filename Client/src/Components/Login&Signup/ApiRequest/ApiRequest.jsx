import jwt_decode from 'jwt-decode';
import axios from 'axios';

// Define the server port or default to 3000
const port = import.meta.env.VITE_REACT_APP_SERVER_PORT || 10000;
axios.defaults.baseURL = `http://localhost:${port}`;

/** To get username from Token */
export async function getUsername() {
    const token = localStorage.getItem('token');
    if (!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token);
    return decode;
}

/** authenticate function */
export async function authenticate(username) {
    try {
        // Send a POST request to authenticate the user
        return await axios.post('/api/authenticate', { username });
    } catch (error) {
        // Handle the case where the username doesn't exist
        return { error: "Username doesn't exist...!" };
    }
}

/** get User details */
export async function getUser({ username }) {
    try {
        // Send a GET request to retrieve user details
        const { data } = await axios.get(`/api/user/${username}`);
        return { data };
    } catch (error) {
        // Handle the case where the password doesn't match
        return { error: "Password doesn't Match...!" };
    }
}

/** register user function */
export async function registerUser(credentials) {
    try {
        // Send a POST request to register a new user
        const { data: { msg }, status } = await axios.post(`/api/register`, credentials);

        let { username, email } = credentials;

        /** send email */
        if (status === 201) {
            // Send an email with registration details
            await axios.post('/api/registerMail', { username, userEmail: email, text: msg });
        }

        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** login function */
export async function verifyPassword({ username, password }) {
    try {
        if (username) {
            // Send a POST request to verify the password
            const { data } = await axios.post('/api/login', { username, password });
            return Promise.resolve({ data });
        }
    } catch (error) {
        // Handle the case where the password doesn't match
        return Promise.reject({ error: "Password doesn't Match...!" });
    }
}

/** update user profile function */
export async function updateUser(response) {
    try {
        const token = await localStorage.getItem('token');
        // Send a PUT request to update the user profile
        const data = await axios.put('/api/updateuser', response, { headers: { "Authorization": `Bearer ${token}` } });

        return Promise.resolve({ data });
    } catch (error) {
        return Promise.reject({ error: "Couldn't Update Profile...!" });
    }
}

/** generate OTP */
export async function generateOTP(username) {
    try {
        // Send a GET request to generate an OTP
        const { data: { code }, status } = await axios.get('/api/generateOTP', { params: { username } });

        // Send mail with the OTP
        if (status === 201) {
            // Retrieve user email
            let { data: { email } } = await getUser({ username });
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
            // Send an email with the OTP
            await axios.post('/api/registerMail', { username, userEmail: email, text, subject: "Password Recovery OTP" });
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** verify OTP */
export async function verifyOTP({ username, code }) {
    try {
        // Send a GET request to verify the OTP
        const { data, status } = await axios.get('/api/verifyOTP', { params: { username, code } });
        return { data, status };
    } catch (error) {
        return Promise.reject(error);
    }
}

/** reset password */
export async function resetPassword({ username, password }) {
    try {
        // Send a PUT request to reset the password
        const { data, status } = await axios.put('/api/resetPassword', { username, password });
        return Promise.resolve({ data, status });
    } catch (error) {
        return Promise.reject({ error });
    }
}