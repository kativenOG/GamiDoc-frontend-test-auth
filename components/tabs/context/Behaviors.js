import Swal from "sweetalert2"
import * as React from "react";
// import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
// Mui elements not used:
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";


export default function Behaviors({
  behavior,
  setBehavior,
  discBehavior,
  setDiscBehavior,
}) {
  const router = useRouter();
  return (
    <>
      <label className="mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            router.push("documentation#behaviors")
          }} />
        </IconButton>
        Encouraged Behaviors
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Game behavior component refers to the clarification of the <bold className="font-bold">game rules</bold>, <bold className="font-bold">game mechanics</bold>, <bold className="font-bold">game progression</bold>. 
        The game rules determine, just like in any other game, how the game inside the application is played. The mechanics describe what happens when a player does something in the game in order to achieve the game’s goal. Progression is defined through a subset of game mechanics that describe how the game overall progresses like, for example, player levels advancing and, thereby, unlocking new things for the game. The final output consists of a list of the game rules, in which mechanics and progression are specified. 
        Moreover, this part is linked to the dynamics subcomponent, which provides a list of possible dynamics that can emerge runtime or after a certain number of runs. 
        This allows researchers and practitioners to (1) monitor the interaction between users
        and mechanics, and (2) to modify the design in order to avoid inadequate interactions and behaviors.
        {/* One of the main aspects of gamification is to modify a behavioral */}
        {/* pattern. The encouraged and avoided behaviors component collects a clear */}
        {/* definition of what are the behaviors that have to be encouraged and */}
        {/* which ones need to be avoided. */}
      </h2>
      <label className="block text-gray-700   font-bold mb-2" />

      <FormControl fullWidth>
        <TextField
          className="w-full border  shadow-md "
          id="Encouraged Behaviors"
          type="text"
          multiline
          rows={3}
          value={behavior}
          onChange={(e) => setBehavior(e.target.value)}
          label="Encouraged Behaviors"
        />
      </FormControl>

      <div className="my-5">
        <FormControl fullWidth>
          <TextField
            className="w-full border  shadow-md "
            id="Discouraged Behaviors"
            type="text"
            multiline
            rows={3}
            value={discBehavior}
            onChange={(e) => setDiscBehavior(e.target.value)}
            label="Discouraged Behaviors"
          />
        </FormControl>
      </div>

    </>
  )
}
