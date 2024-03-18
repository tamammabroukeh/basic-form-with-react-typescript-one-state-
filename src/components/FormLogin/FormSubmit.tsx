import { Fragment } from "react";
import classes from "./FormSubmit.module.scss";
import { IUser } from "../../interfaces/interfaces";
import { DataFormInput } from "../../data/data";
const FormSubmit: React.FC<{
  setIsLoggedIn: (type: boolean) => void;
  setUserData: (user: IUser) => void;
  userData: IUser;
}> = ({ setIsLoggedIn, setUserData, userData }) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  console.log(userData);
  return (
    <Fragment>
      {/* <h3>Your email : {email}</h3> */}
      <form
        className={classes.form}
        onSubmit={(event) => event.preventDefault()}
      >
        {DataFormInput.map((input) => (
          <div className={classes.Input} key={input.label}>
            <label htmlFor={input.id}>{input.label}: </label>
            <input
              type={input.type}
              id={input.id}
              name={input.name}
              value={userData[input.name]}
              onChange={onChangeHandler}
            />
          </div>
        ))}
        {/*<div className={classes.Input}>
          <label htmlFor="userName">UserName: </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userData.userName}
            onChange={onChangeHandler}
          />
        </div>
         <div className={classes.Input}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.Input}>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            value={userData.address}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.Input}>
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={userData.phone}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.Input}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={onChangeHandler}
          />
        </div> */}
        <button type="submit" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      </form>
    </Fragment>
  );
};

export default FormSubmit;
