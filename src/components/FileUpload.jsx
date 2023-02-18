import React from 'react'
import Axios from 'axios'


const FileUpload = () => {

    let formData = new FormData();

    const handleChange = (e)=>{
        console.log("Data", e.target.files[0]);
        if(e.target && e.target.files[0]){
            formData.append('file',e.target.files[0])
        }
    }

    const submitData = ()=>{

        Axios.post(
            'https://v2.convertapi.com/upload',{
                formData
            }).then((result) => {
                console.log("result",result);

            }).catch((err)=>{
                console.log(err);
            })
   }


  return (
    <div className='App'>
        <input type="file" onChange={(e)=> handleChange(e)} />
        <div>
            <button onClick={submitData}>Upload File</button>
        </div>
    </div>
  )
}

export default FileUpload