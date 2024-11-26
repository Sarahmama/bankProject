import instance from "./index";
const profile = async (fromData)=>{
    const data = await instance.get("/mini-project/api/auth/me");

    localStorage.setItem("token",data.token)
    console.log("profile", data)
    return data;
}
const register = async (formData) => {
    const data = await instance.post("/mini-project/api/auth/register", formData);
    localStorage.setItem("token", data.token);
    console.log("register data", data)
    return data;
};
const login = async (formData) => {
    const data = await instance.post("/mini-project/api/auth/login", formData);
    localStorage.setItem("token", data.token);
    console.log("login data", data)
    return data;
};

export { register, login ,profile};