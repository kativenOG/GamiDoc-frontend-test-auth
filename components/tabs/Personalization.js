import Swal from "sweetalert2"
import * as React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { TextField } from "@mui/material";
import { useRouter } from "next/router"

function Personalization({ personalization, setPersonalization }) {
  const router = useRouter()

  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        {/* STRANO CHE PERSONALIZATION RIPORTI A TECHNOLOGY */}
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            router.push("documentation#personalization")
          }} />
        </IconButton>
        Personalization
      </label>
      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        Several solutions in the gamification field suggest a personalization or adaptation 
        of the gamified solutions according to several individual differences and preferences <span className="underline text-blue-400">(Hallifax, Lavoúe, & Serna, 2020;
        Oliveira et al., 2022)</span>, such as the player type <span className="underline text-blue-400">(Bartle, 1996; Ferro, Walz, and Greuter, 2013; Tondello et al., 2016)</span>, 
        personality traits <span className="underline text-blue-400">(Denden, Tlili, Essalmi, & Jemni, 2017)</span>, motivation and goal <span className="underline text-blue-400">(Tondello et al., 2018)</span>, and so forth. 
        For this, we decided to add a part related to the selection of a personalization modality and a possible adaptation feature.
      </h2>
      <TextField
        className={"flex w-full border  shadow-md mb-4"}
        type="text"
        placeholder="Personalization"
        multiline
        rows={3}
        value={personalization}
        onChange={(e) => setPersonalization(e.target.value)}
      />
    </div>
  );
}

export default Personalization;
