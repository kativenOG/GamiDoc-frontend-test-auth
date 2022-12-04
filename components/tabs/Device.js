import Swal from "sweetalert2"
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router"
import { TextField } from "@mui/material";

function Device({
  device,
  setDevice,
  DeviceSelection,
  deviceDescription,
  setDeviceDescription,
}) {
  const router = useRouter()
  return (
    <div className="flex flex-col w-[60em] py-4">
      <label className=" mt-4 block text-gray-700  font-bold mb-2">
        <IconButton aria-label="Example">
          <InfoOutlinedIcon sx={{ fontSize: 20 }} onClick={() => {
            Swal.fire({ title: 'Your changes have been saved in a Draft', icon: 'info' })
            router.push("documentation#technology")
          }} />
        </IconButton>
        Device
      </label>

      <h2 className="w-[60em] mt-4 block text-gray-700  mb-2 ">
        {/* The technology component takes into account hardware, software, input */}
        {/* and output devices, any other technological component involved in the */}
        {/* software development, and the kind of device in which the software will */}
        {/* be used. Since there are several different devices that can be used for */}
        {/* gamified solutions, it is important to comprehend if the selected */}
        {/* choices could fit the context information (i.e. device type, game */}
        {/* engine, etc), and then if the selected gamified elements are optimal for */}
        {/* the selected device. */}
        The technology component takes into account hardware, software, input and output devices, any other technological components involved in the software development, 
        and the kind of device in which the software will be used. Since there are several different devices that can be used for gamified solutions, 
        and different game elements fit in in a different way according to the device used <span className="underline text-blue-400">(Su, Zou, Xie, and Wang, 2021)</span>, and different interactions with games can change the user experience 
        <span className="underline text-blue-400">(McEwan, Johnson, Wyeth, and Blackler, 2012)</span>, it is important to comprehend if the selected choices could fit the context information (i.e. device type, game engine, etc), 
        and then if the selected gamified elements are optimal for the selected device. This component allows the selection of a choice within:
        <bold className="font-bold">(1) mobile, (2) tablet, (3) computer/laptop, (4) head-mounted display, (5) augmented reality</bold> and <bold className="font-bold">(6) real life</bold>.
      </h2>
      <div className="mb-5">
        <FormControl fullWidth>
          <InputLabel>Device</InputLabel>
          <Select
            className="relative w-full shadow-md "
            single
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            input={<OutlinedInput label="Name" />}
          >
            {DeviceSelection.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TextField
        className="w-full border shadow-md "
        id="Device"
        type="text"
        multiline
        rows={3}
        placeholder="Device Description"
        value={deviceDescription}
        onChange={(e) => setDeviceDescription(e.target.value)}
      />
    </div>
  );
}

export default Device;
