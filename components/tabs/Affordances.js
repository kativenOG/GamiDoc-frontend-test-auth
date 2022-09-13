import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { TextField } from "@mui/material";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/jUFe5JY.png`;
};

function Affordances({
  affordances,
  setAffordances,
  affordancesSelection,
}) {

  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <Link href="documentation#affordances">
          <IconButton aria-label="Example">
            <InfoOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Link>
        Affordances
      </label>
      <h2 className=" mt-4 block text-gray-700  mb-2 ">
        Gamification elements component shows a list of gamified elements used
        in the software. The previous components are useful to better understand
        which gamification elements fit in the proper way. The selected taxonomy
        of possible gamified elements comes from the work of Toda and colleagues
        (Toda, Klock, et al., 2019; Toda, Oliveira, et al., 2019): <br />•
        Performance: Acknowledgement, Level, Progression, Points, Stats; <br />•
        Ecological: Chance, Imposed choice, Economy, Rarity, Time Pressure;{" "}
        <br />
        • Social: Competition, Cooperation, Reputation, Social Pressure; <br />
        • Personal: Novelty, Objectives, Puzzle, Renovation, Sensation; <br />
        • Fictional: Narrative, Storytelling
        <br />
      </h2>
      <div className="w-auto mt-3">
        <TextField
          className=" -top-2 w-31 border shadow-md "
          id="username"
          type="text"
          multiline
          placeholder="Game action"
          rows={1}
        // value={aesthetics}
        // onChange={(e) => setAesthetics(e.target.value)}
        />
        <Image
          loader={sanityIoImageLoader}
          src="image-src"
          alt="GamiDoc"
          height={34}
          width={85}
        />
        <TextField
          className=" -top-2 w-31 border shadow-md "
          id="username"
          type="text"
          multiline
          placeholder="Condition"
          rows={1}
        // value={aesthetics}
        // onChange={(e) => setAesthetics(e.target.value)}
        />
        <Image
          loader={sanityIoImageLoader}
          className="top-4"
          src="image-src"
          alt="GamiDoc"
          height={34}
          width={85}
        />
        <FormControl className="relative w-60 shadow-md mb-4 -top-2">

          <Select
            displayEmpty

            single
            value={affordances}
            onChange={(e) => setAffordances(e.target.value)}
            input={<OutlinedInput />}

          >
            <MenuItem disabled value="">
              <em className="text-gray-400 font-normal ">Game elements</em>
            </MenuItem>
            {affordancesSelection.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Affordances;
