import instance from "./index";

const transaction = async() =>{

const data =await instance.get('/mini-project/api/transactions/my',{
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },   
});

console.log("transaction", data)

return data



}
const withdraw= async (formData)=>{
    const data = await instance.put("/mini-project/api/transactions/withdraw",  formData, 
      {  headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },});
        console.log("withdraw response", data);

    return data;
}
const profile = async ()=>{
    const data = await instance.get("/mini-project/api/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },});
   
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

export { register, login ,profile,withdraw ,transaction};