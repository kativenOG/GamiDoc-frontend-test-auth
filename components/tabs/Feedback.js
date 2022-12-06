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

export default function Feedback({

  timing,
  setTiming,
  selectObj1,

  context,
  setContext,
  selectObj2,
  contextDescription,
  setContextDescription,

}) {
  const router = useRouter();
  return (
    <div className="flex flex-col py-4 w-[60em]">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        {/* STRANO CHE FEEDBACK RIPORTI A TECHNOLOGY */}
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            // Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            router.push("documentation#feedback")
          }} />
        </IconButton>
        Feedback
      </label>
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        Feedback component refers to the selection of the kind of feedback used in the software. 
        Since there are different ways to provide feedback, mainly according to the content and timing, 
        and since feedback works differently across certain domains and users <span className="underline text-blue-400">(Hassan et al., 2019)</span>, 
        this section is needed to specify the content and the timing of used feedback. 
        The selected taxonomy comes from <span className="underline text-blue-400">(Bassanelli & Bucchiarone, n.d.)</span>. 
        Hence, GamiDOC provides a choice according to the <bold className="font-bold">timing</bold> (<bold className="font-bold">immediate feedback</bold>, and <bold className="font-bold">late feedback</bold>, <bold className="font-bold">personalized feedback </bold>timing), 
        and a choice for the <bold className="font-bold">content</bold> (<bold className="font-bold">corrective feedback</bold>, <bold className="font-bold">explanatory feedback</bold>, <bold className="font-bold">reporting feedback</bold>, and <bold className="font-bold">personalized feedback</bold> content).
      </h2>
      <FormControl className="">
        <InputLabel>Timing</InputLabel>
        <Select
          className="relative w-full shadow-md"
          single
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {selectObj1.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <TextField */}
      {/*   className="w-full border  top-4" */}
      {/*   id="username" */}
      {/*   type="text" */}
      {/*   multiline */}
      {/*   rows={3} */}
      {/*   placeholder="Timing description" */}
      {/*   value={timingDescription} */}
      {/*   onChange={(e) => setTimingDescription(e.target.value)} */}
      {/* /> */}

      <div className="my-5">
        <FormControl fullWidth>
          <InputLabel>Content</InputLabel>
          <Select
            className=" w-full  shadow-md"
            single
            value={context}
            onChange={(e) => setContext(e.target.value)}
            input={<OutlinedInput label="Name" />}
          >
            {selectObj2.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TextField
        className="  w-full border  "
        id="Description"
        type="text"
        multiline
        rows={3}
        placeholder="Describe your choices"
        value={contextDescription}
        onChange={(e) => setContextDescription(e.target.value)}
      />
    </div>
  );
}
