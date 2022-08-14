import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fileDownload from 'react-file-download';
import axios from 'axios';

const DetailsInfo = (props) => {
    // console.log(props);
    const { name, email, phone, position} = props.inf;
    console.log();

    const download = (e) => {
        e.preventDefault();
        // console.log(e);

        axios({
            url: "http://localhost:5000/download",
            // method: "GET",
            // headers:{
            //     'content-type':'application/pdf'
            // },
            // responseType: "blob",
        }).then((res) => {
            console.log(res.data);
            fileDownload(res.data, "downloaded.pdf")
        })

    }
    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl mt-5 ">
                <div class="card-body justify-center items-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <small>{position}</small>
                </div>
                <button onClick={(e) => download(e)} className='bg-gray-500 text-lg p-5'>Download</button>
            </div>
        </div>
    );
};

export default DetailsInfo;