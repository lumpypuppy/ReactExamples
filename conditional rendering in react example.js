var user = {
  name: 'Chris',
  age: 42,
  location: 'Queens'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return <p>No location found</p>
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);