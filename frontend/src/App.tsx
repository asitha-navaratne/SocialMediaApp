import HomePage from "./views/HomePage";

import Navbar from "./components/Navbar/Navbar";
import CreatePostModal from "./components/CreatePostModal/CreatePostModal";
import ViewPostModal from "./components/ViewPostModal/ViewPostModal";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <CreatePostModal />
      <ViewPostModal />
    </>
  );
}

export default App;
