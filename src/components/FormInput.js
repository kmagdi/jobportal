import React, { useState } from "react";
import emailjs from 'emailjs-com';

export const FormInput=()=>{
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [tel,setTel]=useState("");
  const [msg,setMsg]=useState("")
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (evt) => {
    setFormSubmit(true)
    evt.preventDefault();
    if(tel===process.env.REACT_APP_EMAILJS_TEL){
        const templateId=process.env.REACT_APP_EMAILJS_TEMPLATEID
        const userId=process.env.REACT_APP_EMAILJS_USERID
        //const serviceId=process.env.REACT_APP_EMAILJS_USERID
        const templateParams = {
            name: name,
            msg: msg,
            tel:tel,
            email:email
        };
        emailjs.send('contact_form',templateId, templateParams,userId)
            .then((response) => {
                //console.log('SUCCESS!', response.status, response.text);
                setFormSubmitSuccessful(true)
        }, (err) => {
            //console.log('FAILED...', err);
            setFormSubmitSuccessful(false)
        });
    }else
        setFormSubmitSuccessful(false)
  }
  return (
    <div>
    <div><h4 className="m-5">Jelentkezés</h4> 
    {formSubmitSuccessful ? <h4 className="text-info">A jeletkezése sikeresen beküldve</h4> : (formSubmit?<h4 className="text-danger">ez DEMO...nem lehetséges email küldés!</h4>:'')}
  
        <form onSubmit={handleSubmit}>
            
            <div className="form-group">
                <label htmlFor="name">*Név</label>
                <input type="text" className="form-control" placeholder="név" value={name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">*E-mail</label>
                <input type="email" id="email" className="form-control" required placeholder="e-mail cím" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="tel">*Telefonszám</label>
                <input type="text" id="tel" className="form-control" required placeholder="telefonszám" value={tel} onChange={e=>setTel(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="msg">Üzenet</label>
                <textarea id="msg" className="form-control" placeholder="üzenet" value={msg} onChange={e=>setMsg(e.target.value)} />
            </div>
            <input className="btn btn-outline-primary" type="submit" value="Jelentkezés beküldése" />
        </form>
        </div>
    </div>
  );
}
