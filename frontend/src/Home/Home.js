import React from 'react';
import DjangoCSRFToken from "django-react-csrftoken/src";

export default function Home (){
    return(
        <div className= 'Home'
             style = {{textAlign: 'center', fontFamily: 'Hiragino Sans GB', overflowX: 'hidden', backgroundColor: '#000034', height: '100vh'}}>
            <div className='text' style = {{color: '#F2F2F2'}}>
                <div style = {{fontSize: '35px', marginTop: '30vh'}}>帅哥的主页</div>
                <div style = {{fontSize: '35px', marginTop: '10vh'}}>A Handsome Guy's Homepage</div>
                <div style = {{fontSize: '15px', marginTop: '40vh'}}>现在搞毕设 之后再弄</div>
                <form method = 'POST' action = "http://127.0.0.1:8000/postMessage/">
                    <DjangoCSRFToken />
                    <input name = 'name' />
                    <input name = 'content' />
                    <input type = 'submit' value = '确定'/>
                </form>
            </div>
        </div>
    )
}