const user = {
  firstName: "Pablo",
  lastName: "Perez",
  address: {
    street1: "24 rue Blah",
    zipcode: 75001
  },
  emails: ["blah@blah.com", "pablo@perez.com"],
  avatarUrl: "https://media.giphy.com/media/xUPOqE6SS9j405QhDq/giphy.gif"
};

function displayAvatar() {
  if (user.avatarUrl) {
    return <img src={user.avatarUrl} />;
  } else {
    return (
      <img src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png" />
    );
  }
}
