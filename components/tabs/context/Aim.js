import Swal from "sweetalert2"
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";


export default function Aim({
  aim,
  setAim,
  aimDescription,
  setAimDescription,
  selectObj2, // Aimo
}) {
  const router = useRouter();
  return (
    <>
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            // Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            router.push("documentation#aim")
          }} />
        </IconButton>
        Aim
      </label>
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        The goals of many gamification projects do not appear to have been clearly set out before the projects began. 
        The goal of a gamified solution may simply be to increase the number of students, to increase the cooperation among users, or simply to support a behavior change towards eco-sustainable behaviors. 
        In order to help researchers and practitioners in the reasoning underlying the design and development of software, the aim component collects information about the goal of the designed software and why it has been thought.
        This selection includes three different types of aims, reported by Tondello, Premsukh, and Nacke, 2018: <br/><bold className="font-bold">(1) Outcome goal</bold>, which refers to the accomplishment of a very specific result. For example, many goals involve completing specific tasks; 
        therefore, the result is well-defined. Challenges, quests, and exploratory tasks are well suited to define outcome goals;<br/><bold className="font-bold">(2) Performance goal</bold>, which refers to doing well by one’s own performance standards. For example, earning a specific number of points, reaching a specific position in a leaderboard, or completing a specific number of tasks; <br/><bold className="font-bold">(3) Process or Learning goal</bold> is related to learning new skills. 
        Research has shown that when the individual lacks the necessary skills or knowledge to
        accomplish a difficult goal, it is better to set a learning goal instead of an outcome or a performance goal.
      </h2>
      <FormControl>
        <InputLabel>Aim</InputLabel>
        <Select
          className="relative w-full shadow-md "
          single
          value={aim}
          onChange={(e) => setAim(e.target.value)}
          input={<OutlinedInput label="Aim" />}
        >
          {selectObj2.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className="w-full border  shadow-md "
        id="aim"
        type="text"
        multiline
        rows={3}
        placeholder="Describe your Aim"
        value={aimDescription}
        onChange={(e) => setAimDescription(e.target.value)}
      />
    </>
  )
}
