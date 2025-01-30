type personObj = {
  name: { first: string; last: string };
};

const Person = (props : personObj) => {
  return (
    <div>
        {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
