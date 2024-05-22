const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/auto/upload`
console.log(process.env.REACT_APP_CLOUD_NAME_CLOUDINARY)

const uploadFile  = async(file) => {
    const formData = new FormData()
    formData.append("file",file)
    formData.append("upload_preset","chat-app-file")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()

}

export default uploadFile 