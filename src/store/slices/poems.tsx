import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Poem } from '../../types/poems';
import { getPoems } from '../../services/poetry';

interface PoemsState {
    loading: boolean;
    error: string | null;
    poems: Poem[];
}

const initialState: PoemsState = {
    poems: [],
    loading: false,
    error: null,
};

export const getAllPoems = createAsyncThunk(
    'poems/getAllPoems',
    async (_, { rejectWithValue }) => {
      try {
        console.log('Fetching poems...');
        const data = await getPoems();
        console.log(data);
        return data ?? [];
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);


export const poemsSlice = createSlice({
    name: 'poems',
    initialState,
    reducers: {
        setPoems: (state, action: PayloadAction<Poem[]>) => {
            state.poems = action.payload
        },
        addPoem: (state, action: PayloadAction<Poem>) => {
            state.poems.push(action.payload);
        },
        removePoem: (state, action: PayloadAction<string>) => {
            state.poems = state.poems.filter(poem => poem.id !== action.payload);
        },
        updatePoem: (state, action: PayloadAction<Poem>) => {
            const index = state.poems.findIndex(poem => poem.id === action.payload.id);
            if (index !== -1) {
                state.poems[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getAllPoems.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getAllPoems.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.poems = action.payload;
          })
          .addCase(getAllPoems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
      },
});

export const { addPoem, removePoem, updatePoem, setPoems } = poemsSlice.actions;

export default poemsSlice.reducer;