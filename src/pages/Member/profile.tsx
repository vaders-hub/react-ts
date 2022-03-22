interface IProps {
  match: {
    isExact: boolean;
    params: any | undefined;
    path: string;
    url: string;
  };
}

const Profile = ({ match }: IProps): React.ReactElement => {
  const { id } = match.params;
  console.log("props", match, id);
  return (
    <div>
      <div>profile {id}</div>
    </div>
  );
};

export default Profile;
