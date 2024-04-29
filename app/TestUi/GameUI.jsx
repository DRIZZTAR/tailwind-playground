import React from "react";
import CharacterInfo from "./CharacterInfo";
import Inventory from "./Inventory";

export default function GameUI () {
  let messages = [
    {
      id: 1,
      text: "In the heart of the ancient forest, beneath the canopy of whispering leaves, the hidden glen revealed itself to the weary travelers. 'Behold,' the mage whispered, 'the sanctuary of the Celestial Stag, guardian of these sacred woods.'",
    },
    {
      id: 2,
      text: "As the moon rose high, casting a silver glow over the cobblestone path, a shadowy figure emerged from the mist. 'I am the Keeper of Secrets,' it announced, its voice echoing through the silent night. 'Your journey is fraught with peril, but the keys to the kingdom's salvation lie within the riddles of the past.'",
    },
    {
      id: 3,
      text: "As the moon rose high, casting a silver glow over the cobblestone path, a shadowy figure emerged from the mist. 'I am the Keeper of Secrets,' it announced, its voice echoing through the silent night. 'Your journey is fraught with peril, but the keys to the kingdom's salvation lie within the riddles of the past.'",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-12 gap-2 h-screen">
        {/* Navigation */}
        <div className="col-span-3 col-start-2 p-4 rounded-md h-full bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-center items-center shadow-2xl">
          <h1>YOURE STILL SANE... 2 Turns Remaining</h1>
        </div>

        {/* Chat Log */}
        <div className="col-span-3 row-span-6 col-start-2 row-start-2 rounded-md p-3 overflow-y-auto h-full w-full bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-slate-800 flex justify-center items-center shadow-2xl">
          <div className="flex flex-col items-center space-y-4">
            {/* Map over messages and render them */}
            {messages.map((message) => (
              <p
                key={message.id}
                className="text-center p-2 text-white rounded-md bg-stone-400 bg-opacity-30 shadow-2xl"
              >
                {message.text}
              </p>
            ))}
          </div>
        </div>

        {/* Character Info */}
        <div className="col-span-3 row-span-2 col-start-2 row-start-8 h-full w-full rounded-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex items-center shadow-2xl">
          <CharacterInfo />
        </div>

        {/* Inventory */}
        <div className="col-span-3 row-span-2 col-start-2 row-start-10 h-full w-full rounded-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl">
          <Inventory />
        </div>

        {/* Input Area - Connected to Chat Log */}
        <div className="col-span-3 col-start-2 row-start-12 p-4 text-white h-full w-full rounded-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-slate-800 flex justify-center items-center shadow-2xl">
          <input
            type="text"
            className="w-full rounded-md text-black"
            placeholder="Type here..."
          />
        </div>
      </div>
    </div>
  );
};
