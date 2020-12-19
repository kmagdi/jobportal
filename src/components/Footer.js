export const Footer=()=>{
    return(
        <div className="card-group ">
              <div className="card ">
                  <div  className="card-footer text-muted"><small className="text-muted"><b>Székhely:</b>{this.props.contactData.location}</small>
                  </div>
              </div>
              <div className="card">
                  <div className="card-footer text-muted lpc">
                      <small className="text-muted"><b>Levelezési cím:</b>{this.props.contactData.adress}</small>
                  </div>
              </div>
              <div className="card">
                  <div className="card-footer text-muted lpc">
                      <small className="text-muted"><b>Telefon:</b>{this.props.contactData.tel}</small>
                  </div>
              </div>
              <div className="card">
                  <div className="card-footer text-muted lpc">
                      <small className="text-muted"><b>E-mail:</b>{this.props.contactData.email}</small>
                  </div>
              </div>
              <div className="card">
                  <div className="card-footer text-muted lpc">
                      <small className="text-muted"><b>OM azonosító:</b>{this.props.contactData.omid}</small>
                  </div>
              </div>             
          </div>
          
    )
}