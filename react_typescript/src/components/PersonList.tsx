type personList = {
  names: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: personList) => {
  return (
    <div>
      <ol>
        {props.names.map((e) => (
          <li key={e.first}>
            {e.first} {e.last}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PersonList;
