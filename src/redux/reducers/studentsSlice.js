import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Firebase
import { ref, remove, update, set } from "firebase/database";
import { database } from "../../firebaseFunctions/firebase";

export const fetchStudents = createAsyncThunk(
  "students/getStudents",
  async (data) => {
    return data;
  }
);

export const createStudent = createAsyncThunk(
  "students/createStudent",
  async (data) => {
    const { student, group, teacher } = data;

    try {
      await set(ref(database, "Rapporten/" + student), {
        studentName: student,
        studentGroup: group,
        inputTeacher: teacher,

        personalNotes: "",
        personalGoal: "",
        personalPearl: "",
        personalSocialSkills: "",
        personalIndependence: "",
        personalWorkEthic: "",

        diaRekenen: "",
        diaRekenen2: "",
        diaTekst: "",
        diaTekst2: "",
        diaSpelling: "",
        diaSpelling2: "",
        diaWoordenschat: "",
        diaWoordenschat2: "",
        avi: "",
        avi2: "",
        dmt: "",
        dmt2: "",

        rekenenSnappet: "",
        rekenenSnappet2: "",
        taalSnappet: "",
        taalSnappet2: "",
        spellingSnappet: "",
        spellingSnappet2: "",

        sliderDisplay: [0, 0, 0, 0, 0, 0],

        behaaldeDoelenRekenen: "",
        behaaldeDoelenRekenen2: "",
        doelenTotaalRekenen: "",
        doelenTotaalRekenen2: "",

        behaaldeDoelenTaal: "",
        behaaldeDoelenTaal2: "",
        doelenTotaalTaal: "",
        doelenTotaalTaal2: "",

        behaaldeDoelenSpelling: "",
        behaaldeDoelenSpelling2: "",
        doelenTotaalSpelling: "",
        doelenTotaalSpelling2: "",

        personalmessage: "",
        personalmessage2: "",

        nextGroup: "",
      });
    } catch (err) {
      alert(`Leerling niet toegevoegd: ${err}`);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentName) => {
    let deleteCheck = window.confirm(
      "Weet je zeker dat je deze leerling wilt verwijderen?"
    );
    if (deleteCheck == true) {
      try {
        await remove(ref(database, `/Rapporten/${studentName}`)).then(
          alert(`Leerling: ${studentName} is verwijderd!`)
        );
      } catch (err) {
        alert(`Leerling niet verwijderd: ${err.message}`);
      }
    }
  }
);

const emptyStartStudent = {
  studentName: "Selecteer leerling",
  studentGroup: "",
  inputTeacher: "",

  personalNotes: "",
  personalGoal: "",
  personalPearl: "",
  personalSocialSkills: "",
  personalIndependence: "",
  personalWorkEthic: "",

  diaRekenen: "",
  diaRekenen2: "",
  diaTekst: "",
  diaTekst2: "",
  diaSpelling: "",
  diaSpelling2: "",
  diaWoordenschat: "",
  diaWoordenschat2: "",
  avi: "",
  avi2: "",
  dmt: "",
  dmt2: "",

  rekenenSnappet: "",
  rekenenSnappet2: "",
  taalSnappet: "",
  taalSnappet2: "",
  spellingSnappet: "",
  spellingSnappet2: "",

  sliderDisplay: [0, 0, 0, 0, 0, 0],

  behaaldeDoelenRekenen: "",
  behaaldeDoelenRekenen2: "",
  doelenTotaalRekenen: "",
  doelenTotaalRekenen2: "",

  behaaldeDoelenTaal: "",
  behaaldeDoelenTaal2: "",
  doelenTotaalTaal: "",
  doelenTotaalTaal2: "",

  behaaldeDoelenSpelling: "",
  behaaldeDoelenSpelling2: "",
  doelenTotaalSpelling: "",
  doelenTotaalSpelling2: "",

  personalmessage: "",
  personalmessage2: "",

  nextGroup: "",
};

const initialState = {
  students: [],
  selectedStudent: emptyStartStudent,
  studentDeleted: null,
  studentAdded: "",
  searchedStudent: "",
  status: null,
  selectedCategory: "none",
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    filterStudents(state, action) {
      state.selectedCategory = action.payload.toLowerCase();
    },
    searchStudent(state, action) {
      state.searchedStudent = action.payload.toLowerCase();
    },
    selectStudent(state, action) {
      state.selectedStudent = action.payload;
    },
    rekenenSlider(state, action) {
      state.selectedStudent.sliderDisplay[0] = action.payload;
    },
    taalSlider(state, action) {
      state.selectedStudent.sliderDisplay[2] = action.payload;
    },
    spellingSlider(state, action) {
      state.selectedStudent.sliderDisplay[4] = action.payload;
    },
    rekenenSlider2(state, action) {
      state.selectedStudent.sliderDisplay[1] = action.payload;
    },
    taalSlider2(state, action) {
      state.selectedStudent.sliderDisplay[3] = action.payload;
    },
    spellingSlider2(state, action) {
      state.selectedStudent.sliderDisplay[5] = action.payload;
    },
    updateScores(state, action) {
      state.selectedStudent = {
        ...state.selectedStudent,
        [action.payload.scoreType]: action.payload.newScore,
      };
    },
    updateProjects(state, action) {
      if (Array.isArray(state.selectedStudent[action.payload.type])) {
        state.selectedStudent[action.payload.type] = [
          ...state.selectedStudent[action.payload.type],
          action.payload.item,
        ];
      } else {
        state.selectedStudent[action.payload.type] = [action.payload.item];
      }
    },
    removeProject(state, action) {
      if (Array.isArray(state.selectedStudent[action.payload.type])) {
        state.selectedStudent[action.payload.type] = state.selectedStudent[
          action.payload.type
        ].filter((value, index) => index !== action.payload.index);
      }
    },
  },
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = "pending";
    },
    [fetchStudents.fulfilled]: (state, payload) => {
      state.students = payload;
      state.status = "fulfilled";
    },
    [fetchStudents.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteStudent.pending]: (state) => {
      state.studentDeleted = "pending";
    },
    [deleteStudent.fulfilled]: (state) => {
      state.studentDeleted = "Succesfull removal";
    },
    [deleteStudent.rejected]: (state) => {
      state.studentDeleted = "failed";
    },
    [createStudent.pending]: (state) => {
      state.studentAdded = "pending";
    },
    [createStudent.fulfilled]: (state) => {
      state.studentAdded = "Student is added!";
    },
    [createStudent.rejected]: (state) => {
      state.studentAdded = "failed";
    },
  },
});

export const {
  filterStudents,
  selectStudent,
  searchStudent,
  updateProjects,
  removeProject,
  rekenenSlider,
  taalSlider,
  spellingSlider,
  rekenenSlider2,
  taalSlider2,
  spellingSlider2,
  updateScores,
} = studentSlice.actions;

export const checkStudents = (state) => state.students.students.payload;
export const selectedCategory = (state) => state.students.selectedCategory;
export const selectedStudent = (state) => state.students.selectedStudent;
export const searchedStudent = (state) => state.students.searchedStudent;

export const rekenenSliderValue = (state) =>
  state.students.snappetSliderRekenen;
export const taalSliderValue = (state) => state.students.snappetSliderTaal;
export const spellingSliderValue = (state) =>
  state.students.snappetSliderSpelling;
export const rekenenSliderValue2 = (state) =>
  state.students.snappetSliderRekenen2;
export const taalSliderValue2 = (state) => state.students.snappetSliderTaal2;
export const spellingSliderValue2 = (state) =>
  state.students.snappetSliderSpelling2;

export default studentSlice.reducer;
