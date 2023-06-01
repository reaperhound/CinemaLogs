import { createSlice } from "@reduxjs/toolkit";

// function getTheme() {
//   const htmlTag = document.documentElement;
//   const currentTheme = htmlTag.getAttribute("data-theme");

//   // Listen for changes to the data-theme attribute
//   const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       if (mutation.attributeName === "data-theme") {
//         const newTheme = htmlTag.getAttribute("data-theme");
//         console.log("Theme changed:", newTheme);
//         // You can perform additional actions when the theme changes
//       }
//     }
//   });

//   observer.observe(htmlTag, { attributes: true });

//   return currentTheme;
// }

const themeSlice = createSlice({
  name: "currentTheme",
  initialState: 'bumblebee',
  reducers: {
    setTheme: (state, action) => {
      state = action.payload
      console.log(state);
      return state;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
