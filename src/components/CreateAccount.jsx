import React, {useState} from 'react'

export const CreateAccount = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState('');
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [birthdate, setBirthDate] = useState("");
  console.log(firstname,lastname,bio,location,birthdate)
    return (
        <div className="container mt-5">
        <h2>Add Account</h2>
        <form className="mt-3">
          <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">First name</label>
              <input
                type="text"
                className="form-control"
                id="owner"
                value={firstname}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="James"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Last name</label>
              <input
                type="text"
                className="form-control"
                id="owner"
                value={lastname}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Mwangi"
              />
            </div>
            <div className="form-group">
            <label htmlFor="inputAddress">Bio</label>
            <textarea
            cols="150" rows="5"
              type="textarea"
              className="form-control"
              id="description"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              placeholder="This is my bio"
            />
          </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Birth date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={birthdate}
                onChange={(event) => setBirthDate(event.target.value)}
              />
            </div>
          </div>
           
        
          <button type="submit" className="btn btn-primary  mt-5 mb-5">
            Save
          </button>
        </form>
      </div>
    )
}