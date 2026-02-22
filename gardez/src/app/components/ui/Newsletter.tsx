export default function Newsletter() {
  return (
    <form action={"POST"} className="flex flex-col">
      <p className="font-bold text-xl py-3">NEWSLETTER</p>
      <label htmlFor="email" className="flex flex-row border rounded-md">
        <input 
          type="email" 
          name="email" 
          placeholder="E-mail" 
          className=" rounded-md p-1 px-3 mr-1 focus:outline-0 w-70"
        />
        <button type="button" className="font-bold rounded-md p-2 hover:bg-gray-300 cursor-pointer">Send</button>
      </label>
    </form>
  );
}
