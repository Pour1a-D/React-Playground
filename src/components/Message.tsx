interface Propes {
  name: string;
}

function Message({ name }: Propes) {
  return <h1 className="text-green-600">Hello {name}</h1>;
}

export default Message;
