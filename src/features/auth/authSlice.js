import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ email, phoneNumber, password }, thunkAPI) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const isValid =
//           (email === "test@test.com" || phoneNumber === "0555555555") &&
//           password === "123456";

//         if (isValid) {
//           const user = { name: "Жибек", email: email || phoneNumber };
//           const token = "fake-jwt-token-123";
//           localStorage.setItem("token", token);
//           resolve({ user, token });
//         } else {
//           toast.error("Неверные данные для входа");
//           reject("Неверные данные для входа");
//         }
//       }, 1000);
//     });
//   }
// );
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, phoneNumber, password }, thunkAPI) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isEmailCorrect =
          email === "test@test.com" && password === "1234";
        const isPhoneCorrect =
          phoneNumber === "+996555059584" && password === "1234";

        if (isEmailCorrect || isPhoneCorrect) {
          const user = {
            name: "Жибек",
            email: email || null,
            phoneNumber: phoneNumber || null,
          };
          const token = "fake-jwt-token-123";
          localStorage.setItem("token", token);
          resolve({ user, token });
        } else {
          toast.error("Неверные данные");
          reject("Неверные данные");
        }
      }, 1000);
    });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Ошибка входа";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
