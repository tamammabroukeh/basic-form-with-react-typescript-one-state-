import { IUserDetails } from "../interfaces/interfaces";
const UserDetails = ({ user }: IUserDetails) => {
  return (
    <div>
      <h3>username: {user.userName}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Address: {user.address}</h3>
      <h3>Phone: {user.phone}</h3>
    </div>
  );
};

export default UserDetails;
