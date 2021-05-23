import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchSolData } from "./AlbumAPI";
import { Image } from "./album.type";

export interface AlbumState {
  data: {
    sol: number;
    images: Image[];
  }[];
  sol: number;
  favorites: Image[];
  load: boolean;
}

const initialState: AlbumState = {
  data: [],
  favorites: [],
  sol: 1,
  load: false,
};

export const getSolData = createAsyncThunk(
  "album/fetchSolData",
  async (sol: number) => {
    const images = await fetchSolData(sol);
    console.log(images);
    return { sol, images };
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setSol: (state, action: PayloadAction<number>) => {
      state.sol = action.payload;
    },
    addFavorite: (state, action: PayloadAction<Image>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSolData.pending, (state) => {
        state.load = true;
      })
      .addCase(getSolData.fulfilled, (state, action) => {
        console.log(action);
        state.load = false;
        state.data = [...state.data, action.payload];
      });
  },
});

export const { setSol, addFavorite, removeFavorite } = albumSlice.actions;

export const selectAlbum = (state: RootState) => state.album;

export default albumSlice.reducer;
