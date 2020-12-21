import React, { useState } from "react";

export const FormInput=(props)=>{
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [tel,setTel]=useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Elkuldve- Nev :${name} E-mail: ${email} Telefon:${tel}`)
  }
  return (
    <div>
    <p><h4 className="m-5">Jelentkezés</h4> 
        <form onSubmit={handleSubmit}>
            
            <div className="form-group">
                <label for="name">Név</label>
                <input type="text" className="form-control" placeholder="név" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" className="form-control" placeholder="e-mail cím" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="tel">Telefonszám</label>
                <input type="text" id="tel" className="form-control" placeholder="telefonszám" value={tel} onChange={e=>setTel(e.target.value)} />
            </div>
            <input className="btn btn-outline-primary" type="submit" value="Jelentkezés beküldése" />
        </form>
        </p>
    </div>
  );
}
