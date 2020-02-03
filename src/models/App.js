import { action } from "easy-peasy";

const App = {
  isOpenImage: false,
  linkImagePreview: "",
  openImagePreview: action((state, payload) => {
    state.linkImagePreview = payload;
    state.isOpenImage = true;
  }),
  closeImagePreview: action((state, payload) => {
    state.isOpenImage = false;
  })
};

export default App;
