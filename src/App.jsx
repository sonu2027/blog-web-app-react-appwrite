import conf from "./conf/conf";
function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const res=conf
  console.log(res.appwriteURL);
  return (
    <h1 className="text-3xl font-bold underline text-center">
      Hello world!
    </h1>
  )
}

export default App