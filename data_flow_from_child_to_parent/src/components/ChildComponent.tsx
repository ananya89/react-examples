interface ChildProps {
  onSendData: (data: string) => void; // define prop type
}


interface ChildProps {
  onSendData: (data: string) => void; // define prop type
}

const ChildComponent: React.FC<ChildProps> = ({ onSendData }) => {
  const sendData = () => {
    onSendData("Hello Parent! 👋");
  };

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>Child Component</h3>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};


export default ChildComponent;
