"use client";

import { createSlice } from "@reduxjs/toolkit";

export const temoignagesSlice = createSlice({
  name: "temoignages",
  initialState: {
    temoignages: [
      {
        id: 1,
        name: "Jean",
        text: "Le développeur web a réalisé un travail exceptionnel pour mon site. Je suis très satisfaite de son professionnalisme et de son expertise. Je le recommande vivement ",
      },
      {
        id: 2,
        name: "Pierre",
        text: "J'ai été impressionné par le talent du développeur web. Il a créé un site web attrayant et fonctionnel en un temps record. Je le recommande sans hésitation !",
      },
    ],
  },
  reducers: {
    addTemoignage: (state, action) => {
      state.temoignages.push(action.payload);
    },

    deleteTemoignage: (state, action) => {
      state.temoignages = state.temoignages.filter(
        (temoignage) => temoignage.id !== action.payload
      );
    },

    updateTemoignage: (state, action) => {
      const updatedTemoignages = state.temoignages.map((temoignage) => {
        if (temoignage.id == action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
            text: action.payload.text,
          };
        }
        return temoignage;
      });
      state.temoignages = updatedTemoignages;
    },
  },
});

export const { addTemoignage, deleteTemoignage, updateTemoignage } =
  temoignagesSlice.actions;

export default temoignagesSlice.reducer;
