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


export default function Targets({
  targetAge,
  setTargetAge,
  targetUser,
  setTargetUser,
  // targetCategory,
  // setTargetCategory,
  selectObj3, // Target categories
  // selectObj4, // Categories selection
}) {
  const router = useRouter();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTargetAge(
      typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            router.push("documentation#target")
          }} />
        </IconButton>
        Target user
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Several documents in the gamification field suggest that users’ individual differences and preferences are crucial for the success of gamified solutions (B. Kim, 2015; Koivisto & Hamari, 2019; Tondello et al., 2016; Zahedi et al., 2021). The existing taxonomies take into account the personality traits or the possible user type. Thus, we decided to develop our taxonomy, following the possible users’ category. The target
        users component collects all the relevant data related to the users who will be involved in the use of the software (<bold className="font-bold">category</bold> and <bold className="font-bold">age ranges</bold>).
        The difficulty in the development of a possible exhaustive taxonomy could lead to explorative applications of gamified solutions for studying new categories.
      </h2>
      <div className="my-5">
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            className="relative w-full shadow-md "
            multiple
            value={targetAge}
            onChange={handleChange}
            input={<OutlinedInput label="Age" />}
          >
            {selectObj3.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* <FormControl> */}
      {/*   <InputLabel>Category</InputLabel> */}
      {/*   <Select */}
      {/*     className="relative w-full shadow-md " */}
      {/*     value={targetCategory} */}
      {/*     onChange={(event) => { setTargetCategory(event.target.value) }} */}
      {/*     input={<OutlinedInput label="Category" />} */}
      {/*   > */}
      {/*     {selectObj4.map((name) => ( */}
      {/*       <MenuItem key={name} value={name}> */}
      {/*         {name} */}
      {/*       </MenuItem> */}
      {/*     ))} */}
      {/*   </Select> */}
      {/* </FormControl> */}

      <TextField
        className="w-full border  shadow-md top-5"
        id="username"
        type="text"
        multiline
        rows={3}
        value={targetUser}
        onChange={(event) => setTargetUser(event.target.value)}
        placeholder="Target user"
      />

    </>
  )
}
