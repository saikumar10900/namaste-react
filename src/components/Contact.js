const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl m-4 p-4">Contact</h1>
      <input
        type="text"
        placeholder="name"
        className="border border-b-black py-2 mx-4"
      />
      <input
        type="text"
        placeholder="mobile"
        className="border border-b-black py-2 mx-4"
      />
      <button type="button" className="bg-black p-2 rounded-lg text-white">
        Submit
      </button>
    </div>
  );
};

export default Contact;
