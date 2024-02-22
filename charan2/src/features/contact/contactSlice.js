import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { contactService } from "./contactService";

export const CreateQuery = createAsyncThunk(
    "contact/get",
    async (contactData,thunkAPI) => {
        console.log(contactData);
    try{
        return await contactService.postQuery(contactData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
}
);

const contactState = {
    contact:"",
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:"",
};
export const contactSlice= createSlice({
    name: "contact",
    initialState: contactState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(CreateQuery.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(CreateQuery.fulfilled,(state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.contact = action.payload;
            if(state.isSucess 
                === true){
                toast.success("contact Form Submitted Sucessfully")
            }
        })
        .addCase(CreateQuery.rejected,(state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.isSuccess=false;
            state.message = action.error;
            if(state.isError === true){
                toast.error("Something went wrong!")
            }
        })
     
    },
});


export default contactSlice.reducer;
